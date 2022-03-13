import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNotificationServices } from '../../services/notification/NotificationServices'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'



const ItemListContainer = () => {
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

    return (
        <div className="ItemListContainer">
            {
                loading ?
                    <h1>Cargando...</h1> :
                    products.length ?
                        <ItemList products={products} /> :
                        <h1>No se encontraron productos!</h1>
            }
        </div>
    )

}


/* const ItemListContainer = ({ cat, greeting = "Hola", color = "Red", ...rest }) => {

    const [products, setProducts] = useState([])
    const [prods, setProds] = useState([])
    const { catId } = useParams()

    console.log(catId)
    console.log(prods)


    const setNotification = useNotificationServices()


    useEffect(() => {
        setNotification('error', 'BIEMVENIDO')

        const products = collection(firestoreDb, 'products')

        getDocs(products).then((response) => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            console.log(products)
            setProducts(products)
        }).catch(err => {
            console.log(err)
        })
        return (() => {
            setProducts()
            console.log(products)
        })
    }, [])  */
    
    
    //  }, [catId]) // 




    /* useEffect(() => {

        const prods = query(collection(firestoreDb, 'products'), where('categoria', '==', catId))
        getDocs(prods).then((response) => {
            const prods = response.docs.map(p => {
                return { id: p.id, ...p.data() }
            })
            setProds(prods)

            console.log(prods)

        }).catch(err => {
            console.log(err)
        })
    }, [catId]) */

    /*     useEffect(() => {
            getProds(catId).then((prods) => {
                setProds(prods)
                console.log(prods)
            }).catch(err => {
                console.log(err)
            })
        }, [catId]) */

/*     return (
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
} */

export default ItemListContainer