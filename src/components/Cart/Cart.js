
import '../CartWidget/CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { NavLink } from 'react-router-dom'
import { addDoc, collection, doc, updateDoc, getDocs, writeBatch, getDoc, update, Timestamp } from 'firebase/firestore'
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
        /*     addDoc(collection(firestoreDb, 'orders'), objOrder).then ((response) => {
                console.log(response)
            }) */

        /* updateDoc(doc(firestoreDb, 'orders', '4Auoahi3nvau4e0ZKCo8'), objOrder).then((response) => {
            console.log(response)
        }) */

        console.log(objOrder)

        const batch = writeBatch(firestoreDb)
        const outOfStock = []

        objOrder.items.forEach(prod => {
            getDoc(doc(firestoreDb, 'products', prod.id)).then(response => {
                console.log(response)
                console.log(response.data())
                console.log(response.data().id)
                console.log(response.id)
                console.log(response.data().stock)
                console.log(prod.id)
                console.log(prod)
                console.log(prod.count)
                console.log(outOfStock)
                console.log(outOfStock.length)


                if (response.data().stock >= prod.count) {
                    batch.update(doc(firestoreDb, 'products', response.id), {
                        stock: response.data().stock - prod.count
                    })
                    console.log(prod)
                }
                else {
                    outOfStock.push({ id: response.id, ...response.data() })
                    console.log(outOfStock)
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