import { useEffect, useState } from 'react';
import { getProductById } from '../../services/firebase/firebase'
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom'
import { useNotificationServices } from '../../services/notification/NotificationServices'

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState()
    const [loading, setLoading] = useState(true)
    const { productListId } = useParams()

    const setNotification = useNotificationServices()

    useEffect(() => {

        getProductById(productListId).then(response => {
            setProductDetail(response)
        }).catch(error => {
            setNotification('error', error)
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