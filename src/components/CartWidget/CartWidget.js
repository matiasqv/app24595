import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'


const CartWidget = () => {

    const { cart } = useContext(CartContext)

    return (
        <div className="CartWidget">
            <img src={'../images/carrito.png'} className="Carrito" />
            <p className="Numero">{cart.length}</p>
        </div>
    )
}

export default CartWidget