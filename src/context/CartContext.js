import { createContext, useState } from "react"


const Context = createContext()

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const productToAdd = (productDetail, count) => {
        if (isInCart(productDetail.id)) {
            alert('sumar al carrito');
            sumarCantidad(productDetail, count)
        } else {
            setCart([...cart, { ...productDetail, count }])
        }
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
        setCart(newProducts)
    }

    const unidadTotal = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.count
        })
        return count
    }

    const precioTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total = total + prod.precio * prod.count
        })
        return total
    }

    const clearItems = () => {
        setCart([])
    }

    const removerItem = (id) => {
        const itemsfiltrados = cart.filter((product) => product.id !== id)
        setCart(itemsfiltrados)
    }

    return (
        <Context.Provider value={{
            cart,
            productToAdd,
            removerItem,
            clearItems,
            unidadTotal,
            precioTotal

        }}>
            {children}
        </Context.Provider>
    )
}


export default Context