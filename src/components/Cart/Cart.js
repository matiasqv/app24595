
import '../CartWidget/CartWidget.css'
import { useContext, useState } from 'react'
import CartContext from '../../context/CartContext'
import { NavLink } from 'react-router-dom'
import { addDoc, collection, doc, writeBatch, getDoc, Timestamp } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import { useNotificationServices } from '../../services/notification/NotificationServices'



const Cart = () => {

    const [processingOrder, setProcessingOrder] = useState(false)

    const { cart, removerItem, clearItems, precioTotal } = useContext(CartContext)
    const setNotification = useNotificationServices()

    const confirmOrder = () => {
        setProcessingOrder(true)

        const objOrder = {
            buyer: {
                name: 'Juan',
                phone: '123456',
                address: 'Rivadavia 1234'
            },
            items: cart,
            total: precioTotal(),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(firestoreDb)
        const outOfStock = []


        const executeOrder = () => {
            console.log(outOfStock.length)
            if (outOfStock.length === 0) {
                addDoc(collection(firestoreDb, 'orders'), objOrder).then(({ id }) => {
                    batch.commit().then(() => {
                        clearItems()
                        setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                    })
                }).catch(error => {
                    setNotification('error', error)
                })
            } else {
                outOfStock.forEach(prod => {
                    setNotification('error', `El producto ${prod.producto} no tiene stock disponible`)
                    removerItem(prod.id)
                    console.log(outOfStock.length)
                }).finally(() => {
                    setProcessingOrder(false)
                })
                console.log(outOfStock.length)
            }
            console.log(outOfStock.length)
        }


        objOrder.items.forEach(prod => {
            console.log(outOfStock.length)
            getDoc(doc(firestoreDb, 'products', prod.id)).then(response => {
                if (response.data().stock >= prod.count) {
                    batch.update(doc(firestoreDb, 'products', response.id), {
                        stock: response.data().stock - prod.count
                    })
                    console.log(outOfStock.length)
                } else {
                    outOfStock.push({ id: response.id, ...response.data() })
                    console.log(outOfStock.length)
                }
            }).catch((error) => {
                console.log(error)
            }).then(() => {
                executeOrder()
                console.log(outOfStock.length)
            }).finally(() => {
                setProcessingOrder(false)
            })
        })
    }

    if (processingOrder) {
        return <h1>Se esta procesando su orden</h1>
    }


    return (
        <div className='ItemDetailContainer'>
            <h1>Carrito de Compras</h1>
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
                </>}
        </div>
    )
}

export default Cart