import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncmock'
import { getProds } from '../../asyncmock'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting = "Hola", color = "Red", ...rest }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((products) => {
            setProducts(products)
            console.log(products)
        })
    }, [])
    
    const [prods, setProds] = useState([])
    const { catId } = useParams()

    console.log(catId)


    useEffect(() => {
        getProds(catId).then((prods) => {
            setProds(prods)
            console.log(prods)
        })
    }, [])

    return (
        <header className="ItemListContainer">
            <h2>LA TIENDA ONLINE</h2>
            <h3>Lo que buscas y mas...</h3>
            <h4 style={{ color: color }}>{greeting}</h4>
            <br />
           { catId? <ItemList products={prods}/> :
            <ItemList products={products}/>}
        </header>
    );
}

export default ItemListContainer