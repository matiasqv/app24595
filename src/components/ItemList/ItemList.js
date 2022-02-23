import { useEffect, useState } from 'react';
import { getProducts } from '../../asyncmock';
import Item from '../Item/Item';
import './ItemList.css'


const ItemList = ({routing, ...rest}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((products) => {
            setProducts(products)
        })
    }, [])

    return (
        <div className='Item-list'>
            <ul className="List">
                {products.map(product =>
                    <Item key={product.id} productList={product} routing={routing} />
                )}
            </ul>
        </div>
    )
}

export default ItemList


