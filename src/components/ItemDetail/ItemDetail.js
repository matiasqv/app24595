import './ItemDetail.css'

const ItemDetail = ({ product }) => {

console.log(product)
console.log(product)

    return (
        <article className="Item-Card">
            <h2 className="Item-Name">
                {product.marca}
            </h2>
            <img src={product.imagen} alt={product.marca} className="Item-Img" />
            <p className="Item-Precio">
                Precio: $ {product.precio}
            </p>
            <button className="Button" ><a href={product.permalink}></a></button>
        </article>
    )
}
export default ItemDetail