import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { NavLink } from 'react-router-dom'


const CartWidget = () => {

    const { unidadTotal } = useContext(CartContext)

    return (
        <NavLink className="CartWidget" to={'/cart'}>
            <img src={'../images/carrito.png'} className="Carrito" />
            <p className="Numero">{unidadTotal()}</p>
        </NavLink>
    )
}

export default CartWidget