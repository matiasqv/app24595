import { createContext, useState } from "react"


const Context = createContext()

export const CartContextProvider =({children}) => {

    const[cart, setCart] = useState([])


    console.log(cart)

    const productToAdd = (productDetail,
        count) => {
        setCart([...cart, {productDetail, count}])

        console.log(productDetail, count)

    }


    return (
        <Context.Provider value={{
            cart,
            productToAdd
            }}>
            {children}
        </Context.Provider>
    )
}


export default Context