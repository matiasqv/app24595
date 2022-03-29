import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial)
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <>
            <h2 className="NumeroContador">{count}</h2>
            <div className="Button-Padre">
                <button className="Button" onClick={decrement}>-</button>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <button className="Button" onClick={() => onAdd(count)}>AGREGAR AL CARRITO</button>
        </>
    )
}

export default ItemCount