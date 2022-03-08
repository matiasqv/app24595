
import '../CartWidget/CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { NavLink } from 'react-router-dom'


const Cart = () => {

    const { cart, removerItem, clearItems, precioTotal } = useContext(CartContext)


    return (
        <div className='ItemDetailContainer'>
            <h1>Carrito de Compras</h1>
            {cart.length > 0 ?
                <div>
                    <NavLink className="Button" to={'/'}>Agregar Productos</NavLink>
                    <button className="Button" onClick={clearItems}>VACIAR CARRITO</button>
                    <>
                        {cart.map((productDetail) => (
                            <div className='Item-Card-Carrito' >
                                <li key={productDetail.id}>
                                    <img src={productDetail.imagen} alt={productDetail.marca} className="Item-Img" />
                                    Cantidad: {productDetail.count} {productDetail.marca} Precio: $ {productDetail.precio}
                                    <button className="Button" onClick={() => removerItem(productDetail.id)}>Borrar Item </button>
                                </li>
                            </div>
                        ))}
                    </>
                    <h2>Precio Total: {precioTotal()}</h2>
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