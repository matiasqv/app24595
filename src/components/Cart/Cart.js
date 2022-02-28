
import '../CartWidget/CartWidget.css'


/* VER BIEN AQUI LOS CLASSNAME Y ESTILOS, LAS IMPORTACIONES */

const cantidad = 10

const Cart = () => {

    return (
        <div className='ItemDetailContainer'>
            <h1>Carrito de Compras</h1>
            <img src={'../images/carrito.png'} className="Carrito" />
            <p className="Numero">{cantidad}</p>
        </div>
    )
}

export default Cart