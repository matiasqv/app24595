
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ productDetail }) => {

    console.log(productDetail)
    console.log(productDetail.imagen)


    const onAdd = (count) => {
        if (count > 0) {
            console.log("Se agreo al carrito", count, "unidades")
        }
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
                <ItemCount stock={productDetail.stock} initial={1} onAdd={onAdd} />
            </div>
        </article>
    )
}

export default ItemDetail