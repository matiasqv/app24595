import { createContext, useState } from "react"


const Context = createContext()

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])


    console.log(cart)

    const productToAdd = (productDetail, count) => {
        if (isInCart(productDetail.id)) {
                alert('hay que sumar al carrito');
        } else {
            setCart([...cart, { ...productDetail, count }])
        }
        console.log(productDetail, count)
    }

    const isInCart = (id) => {
        const validacion = cart.some((product) => product.id === id)
        return validacion
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