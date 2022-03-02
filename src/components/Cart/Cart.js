
import '../CartWidget/CartWidget.css'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'

/* VER BIEN AQUI LOS CLASSNAME Y ESTILOS, LAS IMPORTACIONES */

const cantidad = 10

const Cart = () => {

    const  {cart, setCart} = useContext(CartContext)
    console.log(cart)

    return (
        <div className='ItemDetailContainer'>
            <h1>Carrito de Compras</h1>
            <img src={'../images/carrito.png'} className="Carrito" />
            <p className="Numero">{cart}</p>
        </div>
    )
}

export default Cart