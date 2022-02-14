import { useState } from "react"

const FunctionCounter = (props) => {
    var initial = parseInt(props.initial);
    var stock = parseFloat(props.stock);

    const [count, setCount] = useState(initial) // = [state, setState]
    
    console.log(count);


    const decrement = () => {
        if(count > 0) {
            setCount (count - 1)
        }
    }
    const increment = () => {
        if(count < stock){
            setCount (count + 1)
        }
    }
    const mostrar = () => {
        console.log(count)
    }

    return(
        <>
            <h3>Function Counter</h3>
            <h3>{count}</h3>
            <button className="Button" onClick={decrement}>-</button>
            <button className="Button" onClick={increment}>+</button>
            <button className="Buttom" onClick={mostrar}>AGREGAR AL CARRITO</button>
        </>
    )
}

export default FunctionCounter

