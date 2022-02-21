import './ItemDetail.css'

const ItemDetail = ({ productDetail }) => {

console.log(productDetail)

    return (
        <article className="Item-Card">
            <h2 className="Item-Name">
                {productDetail.marca}
            </h2>
            <img src={productDetail.imagen} alt={productDetail.marca} className="Item-Img" />
            <p className="Item-Precio">
                Precio: $ {productDetail.precio}
            </p>
            <p className="Item-Precio">
                {productDetail.detalles}
            </p>
        </article>
    )
}
export default ItemDetail