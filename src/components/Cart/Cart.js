
import '../CartWidget/CartWidget.css'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'

/* VER BIEN AQUI LOS CLASSNAME Y ESTILOS, LAS IMPORTACIONES */

const cantidad = 10

const Cart = ({ }) => {

    const { cart, removerItem, clearItems } = useContext(CartContext)
    console.log(cart)

    return (
        <div className='ItemDetailContainer'>
            <h1>Carrito de Compras</h1>
            <button className="Button" onClick={clearItems}>VACIAR CARRITO</button>
            <>
                {cart.map((productDetail) => (
                    <li key={productDetail.id}>
                        Cantidad: {productDetail.count} {productDetail.marca}
                        <img src={productDetail.imagen} alt={productDetail.marca} className="Item-Img" />
                        <p className="Item-Precio">
                            Precio: $ {productDetail.precio}
                        </p>
                        <div className=''>

                        </div>
                        <button className="Button" onClick={() => removerItem(productDetail.id)}>Borrar Item </button>

                    </li>

                ))}
            </>
        </div>
    )
}

export default Cart