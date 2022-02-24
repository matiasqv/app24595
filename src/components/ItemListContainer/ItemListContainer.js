import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncmock'

const ItemListContainer = ({ greeting = "Hola", color = "Red", ...rest }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((products) => {
            setProducts(products)
        })
    }, [])
    


    return (
        <header className="ItemListContainer">
            <h2>LA TIENDA ONLINE</h2>
            <h3>Lo que buscas y mas...</h3>
            <h4 style={{ color: color }}>{greeting}</h4>
            <br />
            <ItemList products={products}/>
        </header>
    );
}

export default ItemListContainer