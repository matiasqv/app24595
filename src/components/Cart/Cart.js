
import '../CartWidget/CartWidget.css'
import { useContext, useState } from 'react'
import CartContext from '../../context/CartContext'
import { NavLink } from 'react-router-dom'
import { addDoc, collection, doc, getDoc, Timestamp,  writeBatch } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import { useNotificationServices } from '../../services/notification/NotificationServices'
import ContactForm from '../ContactForm/ContactForm'



const Cart = () => {

    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: ''
    })




    const { cart, removerItem, clearItems, precioTotal } = useContext(CartContext)
    const setNotification = useNotificationServices()

    const confirmOrder = () => {
        if (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') {
            setProcessingOrder(true)

            const objOrder = {
                buyer: contact,
                items: cart,
                total: precioTotal(),
                date: Timestamp.fromDate(new Date())
            }

            const outOfStock = []

            const batch = writeBatch(firestoreDb)

            const executeOrder = () => {
                if (outOfStock.length === 0) {
                    addDoc(collection(firestoreDb, 'orders'), objOrder).then(({ id }) => {
                        batch.commit().then(() => {
                            clearItems()
                            setContact({ name: '', phone: '', address: '', comment: '' })
                            setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                        })
                    }).catch(error => {
                        setNotification('error', error)
                    })
                } else {
                    outOfStock.forEach(prod => {
                        setNotification('error', `El producto ${prod.producto} no tiene stock disponible`)
                        /* removerItem(prod.id) */
                    }).finally(() => {
                        setProcessingOrder(false)
                    })
                }
            }


            objOrder.items.forEach(prod => {
                getDoc(doc(firestoreDb, 'products', prod.id)).then(response => {
                    if (response.data().stock >= prod.count) {
                        batch.update(doc(firestoreDb, 'products', response.id), {
                            stock: response.data().stock - prod.count
                        })
                    } else {
                        outOfStock.push({ id: response.id, ...response.data() })
                    }
                }).catch((error) => {
                    console.log(error)
                }).then(() => {
                    executeOrder()
                }).finally(() => {
                    setProcessingOrder(false)
                })
            })
        } else {
            setNotification('error', 'Debe completar los datos de contacto para generar la orden')
        }
    }

    if (processingOrder) {
        return <h1>Se esta procesando su orden</h1>
    }


    return (
        <div className='ItemDetailContainer'>
            {(contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') ?
                <div>
                    <h4>Nombre: {contact.name}</h4>
                    <h4>Telefono: {contact.phone}</h4>
                    <h4>Direccion: {contact.address}</h4>
                    <h4>Comentario: {contact.comment}</h4>
                    <button onClick={() => setContact({ name: '', phone: '', address: '', comment: '' })}
                        className='Button'
                        style={{ backgroundColor: 'red', fontSize: '20px', margin: '10px' }}>
                        Borrar datos de contacto
                    </button>
                </div>
                :
                <ContactForm setContact={setContact} />
            }
            <h2>Carrito de Compras</h2>
            {cart.length > 0 ?
                <div>
                    <NavLink className="Button" to={'/'}>Agregar Productos</NavLink>
                    <button className="Button" onClick={clearItems}>VACIAR CARRITO</button>
                    <>
                        {cart.map((productDetail) => (
                            <div className='Item-Card-Carrito' key={productDetail.id} {...productDetail}>
                                <li>
                                    <img src={productDetail.imagen} alt={productDetail.producto} className="Item-Img" />
                                    Cantidad: {productDetail.count} {productDetail.producto} Precio: $ {productDetail.precio}
                                    <button className="Button" onClick={() => removerItem(productDetail.id)}>Borrar Item </button>
                                </li>
                            </div>
                        ))}
                    </>
                    <h2>Precio Total: {precioTotal()}</h2>
                    <button className="Button" onClick={() => confirmOrder()}>Confirmar la Order</button>
                </div>
                :
                <>
                    <h2>El Carrito esta vacio</h2>
                    <NavLink className="Button" to={'/'}>INICIO</NavLink>
                </>
            }
        </div>
    )
}

export default Cart