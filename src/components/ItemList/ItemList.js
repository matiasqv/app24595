
import Item from '../Item/Item'
import './ItemList.css'


const ItemList = ({products, ...rest}) => {


    return (
        <div className='Item-list'>
            <ul className="List">
                {products.map(product =>
                    <Item key={product.id} productList={product}  />
                )}
            </ul>
        </div>
    )
}

export default ItemList


