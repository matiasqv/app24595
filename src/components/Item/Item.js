import './Item.css'


const Item = ({ product }) => {
    console.log(product)
    console.log(product.id)
    return (
        <article className="CardItem">
            <h2 className="ItemHeader">
                {product.marca}
            </h2>
            <img src={product.imagen} alt={product.marca} className="Item-Img" />
            <p className="Item-Precio">
                Precio: $ {product.precio}
            </p>
        </article>
    )
}



export default Item