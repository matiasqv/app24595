
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget' /* Ver si lo quito */
import { MyContext } from '../../App'

const ItemDetail = ({ productDetail }) => {
    const [count, setCount] = useState(0)
    
    const  {cart, setCart} = useContext(MyContext)
    console.log(cart)


    const onAdd = (count) => {
        setCount(count)
        setCart(`Agregue ${count}`)
    }

    console.log(cart)


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

                {/* <ItemCount stock={productDetail.stock} initial={1} onAdd={onAdd} /> */}
                {/* {count !== 0 ? <h2>Ir al carriro</h2> : <ItemCount stock={productDetail.stock} initial={1} onAdd={onAdd} />} */}
                {/* {count === 0 ? <ItemCount stock={productDetail.stock} initial={1} onAdd={onAdd} /> : <h2>Ir al carriro</h2> */}

                {count === 0 ? <ItemCount stock={productDetail.stock} initial={1} onAdd={onAdd} /> : <Link className="Item-Name" to={`/cart`} >Ir al carrito</Link>
                }

            </div>
        </article>
    )
}

export default ItemDetail