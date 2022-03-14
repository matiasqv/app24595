
import '../CartWidget/CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { NavLink } from 'react-router-dom'
import { addDoc, collection, doc, writeBatch, getDoc, Timestamp } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import { useNotificationServices } from '../../services/notification/NotificationServices'



const Cart = () => {

    const { cart, removerItem, clearItems, precioTotal } = useContext(CartContext)

    const setNotification = useNotificationServices()

    const confirmOrder = () => {

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

        console.log(objOrder)

        const batch = writeBatch(firestoreDb)
        const outOfStock = []

        objOrder.items.forEach(prod => {
            getDoc(doc(firestoreDb, 'products', prod.id)).then(response => {

                if (response.data().stock >= prod.count) {
                    batch.update(doc(firestoreDb, 'products', response.id), {
                        stock: response.data().stock - prod.count
                    })
                    console.log(prod)
                } else {
                    outOfStock.push({ id: response.id, ...response.data() })
                    outOfStock.forEach(p => {
                        console.log(p.producto)
                        setNotification('error', `No hay suficiente stock de: ${p.producto}`)
                    })
                }
                if (outOfStock.length === 0) {
                    addDoc(collection(firestoreDb, 'orders'), objOrder).then(({ id }) => {
                        console.log({ id })
                        console.log(outOfStock.length)
                        batch.commit().then(() => {
                            setNotification('success', `La orden se genero, su numero de orden es : ${id}`)
                            clearItems()
                        })
                    })
                }
            })
        })
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
                            <div className='Item-Card-Carrito' key={productDetail.id}>
                                <li>
                                    <img src={productDetail.imagen} alt={productDetail.producto} className="Item-Img" />
                                    Cantidad: {productDetail.count} {productDetail.producto} Precio: $ {productDetail.precio}
                                    <button className="Button" onClick={() => removerItem(productDetail.id)}>Borrar Item </button>
                                </li>
                            </div>
                        ))}
                    </>
                    <h2>Precio Total: {precioTotal()}</h2>
                    <button className="Button" onClick={() => confirmOrder()}>confirmOrder</button>
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