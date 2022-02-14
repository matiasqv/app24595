import './ItemListContainer.css'
import ClassCounter from '../ItemCount/ItemCount'
import FunctionCounter from '../FunctionCounter/FunctionCounter.js'

const ItemListContainer = (props) => {
    return (
        <header className="ItemListContainer">
            <h2>LA TIENDA ONLINE</h2>
            <h3>Lo que buscas y mas...</h3>
            <h4 style={{ color: props.color }}>{props.greeting}</h4>
            <ClassCounter/>
            <FunctionCounter stock ="20" initial="1" />
        </header>
    );
}

export default ItemListContainer