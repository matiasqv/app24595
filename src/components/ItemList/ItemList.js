import { useEffect, useState } from 'react';
import { getProducts } from '../../asyncmock';
import Item from '../Item/Item';
import './ItemList.css'


const ItemList = (/* {product} */) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((products) => {
            console.log(products)
            setProducts(products)
        })
    }, [])


    console.log(products)


    return (
        <div className='list'>
           <ul className="ListGroup">
            {products.map(product => <Item key={product.id} product={product}/>)}
        </ul> 
        </div>
        
    )
}

export default ItemList


