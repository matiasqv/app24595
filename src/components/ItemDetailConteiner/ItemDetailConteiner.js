import { useEffect, useState } from 'react';
import './ItemDetailConteiner.css';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailConteiner = ({ product , ...rest }) => {

    const [products, setProducts] = useState([])
    console.log(products)
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=Guitarras')
        .then(response => {
            console.log(response)
            return response.json()
        }).then(res =>{
            console.log(res)
            setProducts(res.results)
            console.log(res.results)
            console.log(products)
        })
        console.log(products)
    }, [])

    return (
        <div className='Item-list'>
            <ul className="List">
                {products.map(product =>
                    <ItemDetail key={product.id} product={product} />,
                    console.log(products)
                )}
            </ul>
        </div>
    )
}


export default ItemDetailConteiner