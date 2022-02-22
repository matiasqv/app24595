
import './ItemDetail.css'

const ItemDetail = ({ productDetail }) => {

    return (
        <article className="Item-Card">
            <h2 className="Item-Name">
                {productDetail.marca}
            </h2>
            <img src={productDetail.imagen} alt={productDetail.marca} className="Item-Img" />
            <p className="Item-Precio">
                Precio: $ {productDetail.precio}
            </p>
            <div>
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
        </article>
    )
}

export default ItemDetail