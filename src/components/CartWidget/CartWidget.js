import './CartWidget.css'

const cantidad = 5

const CartWidget = () => {

    return (
        <div className="CartWidget">
            <img src={'./images/carrito.png'} className="Carrito" />
            <p className="Numero">{cantidad}</p>
        </div>
    )
}

export default CartWidget