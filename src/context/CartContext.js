import { createContext, useState } from "react"


const Context = createContext()

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    
    console.log(cart)

    const productToAdd = (productDetail, count) => {
        if (isInCart(productDetail.id)) {
            alert('hay que sumar al carrito');
            sumarCantidad(productDetail, count)
        } else {
            setCart([...cart, { ...productDetail, count }])
        }
        console.log(productDetail, count)
    }

    const isInCart = (id) => {
        const validacion = cart.some((product) => product.id === id)
        return validacion
    }

    const sumarCantidad = (productDetail, count) => {
        const newProducts = cart.map((product) => {
            if (product.id === productDetail.id) {
                const newProducts = {
                    ...product, count: product.count + count
                }
                return newProducts
            } else {
                return product
            }
        })
 /*        setCart(newProducts)
        console.log(newProducts) */
    }


    /* LIMPIAR TODOS LOS PRODUCTOS */

    const clearItems = () => {
     setCart([])
    }

    /* remover Item */

    const removerItem = (id) => {
        const itemsfiltrados = cart.filter((product) => product.id !== id)
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