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
                console.log(product)
            }
        })
        setCart(newProducts)
        console.log(newProducts)
    }

    const unidadTotal = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.count
        })
        return count
    }

    console.log(unidadTotal ())
    console.log(cart)

    const precioTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total = total + prod.precio * prod.count
        })
        return total
    }
    console.log(precioTotal())

/*     const [itemsTotal, setItemsTotal] = useState(0)

    const sCantidad = (productDetail, count) => {
        const newProd = cart.map((a) => {
            if (a.length > 0) {
                const newPro = {
                    ...a, count
                }
                return newProd
                console.log(a.length)
            } else {
                return a
                console.log(a)
            }
        })
        setItemsTotal(newProd)

    } */



/*     console.log(itemsTotal) */

/* 
    const itemsTotal = (cart) => {
        cart.map((cart) => {
            if (cart.length > 0) {
                const element = Number(cart[0].count);
                const total = total + element;
                
                return total
                console.log(total)
            }
            
        })
  
    }
 */





    /*     const itemsTotal = (cart) =>{
    
        cart.map((cart) => {
            if (cart.length > 0) {
                const element = productDetail[i].count
                const total = total + element
    
                return (element)
    
                console.log(element)
            }
    
    
        })}  */




    /*     calcularTotal() {
            let productosLS;
            let total = 0, iva = 0, subtotal = 0;
            productosLS = this.obtenerProductosLocalStorage();
            for (let i = 0; i < productosLS.length; i++) {
                let element = Number(productosLS[i].precio * productosLS[i].cantidad);
                total = total + element;
            }
    
            iva = parseFloat(total * 0.21).toFixed(2);
            subtotal = parseFloat(total - iva).toFixed(2);
    
            document.getElementById('subtotal').innerHTML = subtotal;
            document.getElementById('iva').innerHTML = iva;
            document.getElementById('total').value = total.toFixed(2);
        } */




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