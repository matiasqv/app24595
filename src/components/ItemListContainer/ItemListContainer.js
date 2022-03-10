import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { getProds } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import { useNotificationServices } from '../../services/notification/NotificationServices'
import { getDocs, collection, query, where } from "firebase/firestore"
import { firestoreDb } from '../../services/firebase/firebase'


const ItemListContainer = ({ cat, greeting = "Hola", color = "Red", ...rest }) => {

    const [products, setProducts] = useState([])
    const [prods, setProds] = useState([])
    const { catId } = useParams()


    const setNotification = useNotificationServices()


    useEffect(() => {
        setNotification('error', 'BIEMVENIDO')



        const productsCollectionRef = collection(firestoreDb, 'products')


        getDocs(productsCollectionRef).then((querySnapshot) => {
            const products = querySnapshot.docs.map(doc => {
                console.log(doc)
                return { id: doc.id, ...doc.data() }
            })
            console.log(products)
            setProducts(products)
        }).catch((error) => {
            setNotification('error', `Error buscando productos: ${error}`)
        })

        return (() => {
            setProducts()
        })

    }, []) //  }, [catId]) // 




    useEffect(() => {

        const filterProductsCollectionRef = query(collection(firestoreDb, 'products'), where('categoria', '==', 'categoriasId'))
        getProds(filterProductsCollectionRef).then((prods) => {
            setProds(prods)
        }).catch((error) => {
            setNotification('error', `Error buscando productos: ${error}`)
        })
    }, [])

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
    )
}

export default ItemListContainer