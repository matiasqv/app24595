
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'


const ItemDetail = ({ productDetail }) => {
    const [count, setCount] = useState(0)
    const { productToAdd } = useContext(CartContext)

    const onAdd = (count) => {
        setCount(count)
        productToAdd(productDetail, count)


        localStorage.setItem('key', `${count}`)
    }

    return (
        <article className="Item-Card">
            <h2 className="Item-Name">
                {productDetail.marca}
            </h2>
            <img src={productDetail.imagen} alt={productDetail.marca} className="Item-Img" />
            <p className="Item-Precio">
                Precio: $ {productDetail.precio}
            </p>
            <div className=''>
                <p className="List">
                    {productDetail.detalles}
                </p>
                <p className="List">
                    {productDetail.producto}
                </p>
                <p className="List">
                    Stock: {productDetail.stock}
                </p>
            </div>
            <div className="Item-Card">
                {count === 0 ? <ItemCount stock={productDetail.stock} initial={1} onAdd={onAdd} /> : <Link className="Item-Name" to={`/cart`} >Ir al carrito</Link>
                }
            </div>
        </article>
    )
}

export default ItemDetail