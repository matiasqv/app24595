import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { NavLink } from 'react-router-dom'


const CartWidget = () => {

    const { cart, unidadTotal, precioTotal } = useContext(CartContext)


    console.log(cart)

    console.log(cart[0].count)
    console.log(unidadTotal())

    console.log(precioTotal())



    return (
        <NavLink className="CartWidget" to={'/cart'}>
            <img src={'../images/carrito.png'} className="Carrito" />
            <p className="Numero">{unidadTotal()}</p>
        </NavLink> 
    )
}

export default CartWidget