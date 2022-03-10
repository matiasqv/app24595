
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { useNotificationServices } from '../../services/notification/NotificationServices'
import { NavLink } from 'react-router-dom'


const ItemDetail = ({ productDetail }) => {
    const [count, setCount] = useState(0)
    const { productToAdd } = useContext(CartContext)

    const setNotification = useNotificationServices ()


    const onAdd = (count) => {
        setCount(count)
        productToAdd(productDetail, count)


        setNotification ('success',`se agrego al carrito`)

    }

    return (
        <article className="Item-Card">
            <h2 className="Item-Name">
                {productDetail.producto}
            </h2>
            <img src={productDetail.imagen} alt={productDetail.producto} className="Item-Img" />
            <p className="Item-Precio">
                Precio: $ {productDetail.precio}
            </p>
            <div className=''>
                <p className="List">
                    {productDetail.detalles}
                </p>
                <p className="List">
                    {productDetail.categoria}
                </p>
                <p className="List">
                    Stock: {productDetail.stock}
                </p>
            </div>
            <div className="Item-Card">
                {count === 0 ? <ItemCount stock={productDetail.stock} initial={1} onAdd={onAdd} /> : <Link className="Item-Name" to={`/cart`} >Ir al carrito</Link>
                }
            </div>
            <NavLink className="Button" to={'/'}>INICIO</NavLink>
        </article>
    )
}

export default ItemDetail