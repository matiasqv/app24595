import './ItemDetail.css'

const ItemDetail = ({ product }) => {

let mail = product.permalink
console.log(product.permalink)

    return (
        <article className="Item-Card">
            <h2 className="Item-Name">
                {product.title}
            </h2>
            <img src={product.thumbnail} alt={product.title} className="Item-Img" />
            <p className="Item-Precio">
                Precio: $ {product.price}
            </p>
            <button className="Button" ><a href={product.permalink}></a></button>
        </article>
    )
}
export default ItemDetail