import { useEffect, useState } from 'react';
import { firestoreDb } from '../../services/firebase/firebase'
import { getDoc, doc } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState()
    const [loading, setLoading] = useState(true)
    const { productListId } = useParams()

    console.log(productListId)

    useEffect(() => {

        const prod = doc(firestoreDb, 'products', productListId)

        getDoc(prod).then(response => {
            const prod = { id: response.id, ...response.data()}
            setProductDetail(prod)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

    }, [productListId])


    return (
        <div className='ItemDetailContainer'>
            <h3>Detalle de Producto</h3>
            {loading ? <h1>Cargando...</h1> :
                productDetail ? <ItemDetail productDetail={productDetail} /> :
                    <h1>El categoria no existe</h1>
            }
        </div>
    )
}

export default ItemDetailContainer