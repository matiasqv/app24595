
import '../CartWidget/CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'


const Cart = () => {

    const { cart, removerItem, clearItems } = useContext(CartContext)

    return (
        <div className='ItemDetailContainer'>
            <h1>Carrito de Compras</h1>
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
        </div>
    )
}

export default Cart