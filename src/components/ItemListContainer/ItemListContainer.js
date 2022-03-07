import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncmock'
import { getProds } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import { useNotificationServices } from '../../services/notification/NotificationServices'


const ItemListContainer = ({ cat, greeting = "Hola", color = "Red", ...rest }) => {

    const [products, setProducts] = useState([])
    const [prods, setProds] = useState([])
    const { catId } = useParams()

    
    const setNotification = useNotificationServices ()


    useEffect(() => {
        setNotification('success', 'BIEMVENIDO')
        




        getProducts().then((products) => {
            setProducts(products)
        }).catch(err => {
            console.log(err)
        })

        return (() => {
            setProducts()
        })

    }, [])




    useEffect(() => {
        getProds(catId).then((prods) => {
            setProds(prods)
        }).catch(err => {
            console.log(err)
        })
    }, [catId])

    return (
        <header className="ItemListContainer">
            <h2>LA TIENDA ONLINE</h2>
            <h3>Lo que buscas y mas...</h3>
            <h4 style={{ color: color }}>{greeting}</h4>
            <br />
            {(prods.length !== 0) ?
                <h4 style={{ color: color }}>{catId}</h4> : null}
            {(prods.length !== 0) ?
                <ItemList products={prods} /> :
                <ItemList products={products} />}
        </header>
    );
}

export default ItemListContainer