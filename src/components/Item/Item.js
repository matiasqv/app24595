import './Item.css'


const Item = ({ productList }) => {
    return (
        <article className="Item-Card">
            <h2 className="Item-Name">
                {productList.marca}
            </h2>
            <img src={productList.imagen} alt={productList.marca} className="Item-Img" />
            <p className="Item-Precio">
                Precio: $ {productList.precio}
            </p>
        </article>
    )
}

export default Item