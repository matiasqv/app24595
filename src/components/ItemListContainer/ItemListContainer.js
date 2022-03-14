import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNotificationServices } from '../../services/notification/NotificationServices'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'



const ItemListContainer = ({ greeting = "Hola", color = "Red", ...rest }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { catId } = useParams()

    const setNotification = useNotificationServices()

    useEffect(() => {
        setLoading(true)

        const collectionRef = catId ?
            query(collection(firestoreDb, 'products'), where('categoria', '==', catId)) :
            collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }

            })
            console.log(response)
            setProducts(products)
        }).catch((error) => {
            setNotification('error', `Error buscando productos: ${error}`)
        }).finally(() => {
            setLoading(false)
        })

        console.log(catId)
        console.log(products)
        return (() => {
            setProducts()
        })
    }, [catId]) // eslint-disable-line

    console.log(catId)
    console.log(products)

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