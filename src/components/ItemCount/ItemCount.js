import { useState } from "react"
import './ItemCount.css'

const ItemCount = (props) => {
    var initial = parseInt(props.initial);
    var stock = parseInt(props.stock);

    const [count, setCount] = useState(initial) // = [state, setState]

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
    const mostrar = () => {
        console.log(count)
    }

    return (
        <>
            <h3>Counter</h3>
            <h2>{count}</h2>
            <div className="Button-Padre">
                <button className="Button" onClick={decrement}>-</button>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <button className="Button" onClick={mostrar}>AGREGAR AL CARRITO</button>
        </>
    )
}

export default ItemCount