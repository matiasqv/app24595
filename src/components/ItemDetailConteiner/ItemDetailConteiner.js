import { useEffect, useState } from 'react';
import { getProduct } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailConteiner.css';

const ItemDetailConteiner = () => {

    const [productDetail, setProductDetail] = useState([])
    console.log(productDetail)
    useEffect(() => {
        getProduct().then((productDetail) => {
            setProductDetail(productDetail)
        })
    }, [])

    console.log(productDetail)
    console.log(productDetail.id)

    return (
        <div className='ItemDetailContainer'>
            <h3>Detalle de Producto</h3>
            <ItemDetail key={productDetail.id} productDetail={productDetail} />,
        </div>
    );
}


export default ItemDetailConteiner