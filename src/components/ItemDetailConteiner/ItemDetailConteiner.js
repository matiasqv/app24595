import { useEffect, useState } from 'react';
import { getProduct } from '../../asyncmock';
import './ItemDetailConteiner.css';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailConteiner = () => {

    const [product, setProduct] = useState([])
    console.log(product)
    useEffect(() => {
        getProduct().then((product) => {
            setProduct(product)
        })
    }, [])

    console.log(product)

    return (
        <div className='Item-list'>
            <h3>Detalle de Producto</h3>
            <ItemDetail key={product.id} product={product} />,

        </div>
    );
}


export default ItemDetailConteiner