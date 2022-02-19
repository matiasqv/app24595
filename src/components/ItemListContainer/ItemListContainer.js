import './ItemListContainer.css';
/* import ItemCount from '../ItemCount/ItemCount'; */
/* import ItemList from '../ItemList/ItemList'; */
import ItemDetailConteiner from '../ItemDetailConteiner/ItemDetailConteiner';

const ItemListContainer = ({ greeting = "Hola", color = "Red", ...rest }) => {

/*     const mostrar = (count) => {
        if (count > 0) {
            console.log("Se agreo al carrito", count, "unidades")
        }
    } */

    return (
        <header className="ItemListContainer">
            <h2>LA TIENDA ONLINE</h2>
            <h3>Lo que buscas y mas...</h3>
            <h4 style={{ color: color }}>{greeting}</h4>
            <br />
            {/* <ItemCount stock={20} initial={1} mostrar={mostrar} /> */}
            {/* <ItemList products={[]} /> */}
            <ItemDetailConteiner products={[]}/>
        </header>
    );
}

export default ItemListContainer