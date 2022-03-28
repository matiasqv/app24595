import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNotificationServices } from '../../services/notification/NotificationServices'
import { getProducts } from '../../services/firebase/firebase'

const ItemListContainer = ({ greeting = "Hola", color = "Red", ...rest }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { catId } = useParams()

    const setNotification = useNotificationServices()

    useEffect(() => {
        setLoading(true)

        getProducts(catId).then(response => {
            setProducts(response)
        }).catch((error) => {
            setNotification('error', error)
        }).finally(() => {
            setLoading(false)
        })
        return (() => {
            setProducts()
        })
    }, [catId]) // eslint-disable-line

    return (

        <header className="ItemListContainer">
            <h2>LA TIENDA ONLINE</h2>
            <h3>Lo que buscas y mas...</h3>
            <h4 style={{ color: color }}>{greeting}</h4>
            <br />
            <h4 style={{ color: color }}>{catId}</h4>
            {loading ?
                <h1>Cargando...</h1> :
                products.length ?
                    <ItemList products={products} /> :
                    <h1>No se encontraron productos!</h1>
            }
        </header>
    )
}

export default ItemListContainer