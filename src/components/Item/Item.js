import './Item.css'


const Item = ({ routing, productList, ...rest }) => {

    console.log(productList.id)
    return (
        <article className="Item-Card">
            <h2 className="Item-Name">
                {productList.marca}
            </h2>
            <img src={productList.imagen} alt={productList.marca} className="Item-Img" />
            <p className="Item-Precio">
                Precio: $ {productList.precio}
            </p>
            <button className='' onClick={() => routing({ path: 'detail', id: productList.id })} >Ver dettalle</button>
        </article>

    )
}

export default Item