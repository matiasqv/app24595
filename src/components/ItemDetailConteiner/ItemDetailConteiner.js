import { useEffect, useState } from 'react';
import { getProduct } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailConteiner.css';
import { useParams } from 'react-router-dom'

const ItemDetailConteiner = () => {

    const [productDetail, setProductDetail] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        getProduct(productId).then((productDetail) => {
            setProductDetail(productDetail)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
        return (() => {
            setProductDetail()
        })
    }, [productId])

    return (
        <div className='ItemDetailContainer'>
            <h3>Detalle de Producto</h3>
            {loading ? <h1>Cargando...</h1> :
                productDetail ? <ItemDetail productDetail={productDetail} /> :
                    <h1>El producto no existe</h1>
            }
        </div>
    )
}

export default ItemDetailConteiner