import './Item.css'


const Item = ({ routing, product, ...rest }) => {

    console.log(product.id)
    return (
        <article className="Item-Card">
            <h2 className="Item-Name">
                {product.marca}
            </h2>
            <img src={product.imagen} alt={product.marca} className="Item-Img" />
            <p className="Item-Precio">
                Precio: $ {product.precio}
            </p>
            <button className='' onClick={() => routing({ path: 'detail', id: product.id })} >Ver dettalle</button>
        </article>

    )
}

export default Item