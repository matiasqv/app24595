
import { useParams } from 'react-router-dom'

// ARRAY products
const products = [
    { id: 1, producto: "Bebida", marca: "CocaCola", imagen: "../img/cocacola.jpg", precio: "300", detalles: "CocaCola en lata, 300 cl, con azucar", stock: "35" },
    { id: 2, producto: "Bebida", marca: "Agua de Mar", imagen: "../img/aguamineral.jpg", precio: "150", detalles: "Importada, 500 cl, sin sodio", stock: "20" },
    { id: 3, producto: "Bebida", marca: "Jugo Pong", imagen: "../img/jugo.jpg", precio: "200", detalles: "Jugo Natural, 250 cl, sin concervantes", stock: "39" },
    { id: 4, producto: "Panaderia", marca: "Pan", imagen: "../img/pan.jpg", precio: "350", detalles: "Pan blanco, x kg, sin concervantes", stock: "18" },
    { id: 5, producto: "Almacen", marca: "Tomate Alcon", imagen: "../img/latatomate.jpg", precio: "576", detalles: "Tomate en lata, 400 g, Cubitado", stock: "12" },
    { id: 6, producto: "Almacen", marca: "Fideos Don", imagen: "../img/fideos.jpg", precio: "259", detalles: "Fideos Largos, 500 gr, a base de trigo", stock: "11" },
    { id: 7, producto: "Carniceria", marca: "Salmon Rosado", imagen: "../img/salmon.jpg", precio: "999", detalles: "Salmon de Chile, 750 gr, Importado", stock: "2" },
    { id: 8, producto: "Carniceria", marca: "Peceto", imagen: "../img/peceto.jpg", precio: "860", detalles: "Vacuno, 1 kg, Argentina", stock: "24" },
    { id: 9, producto: "Carniceria", marca: "Costilla de Cerdo", imagen: "../img/cerdo.jpg", precio: "1100", detalles: "Cerdo Patagonico, 800 gr, Argentina", stock: "15" },
    { id: 10, producto: "Lacteos", marca: "Queso Parmesano", imagen: "../img/parmesan.jpg", precio: "685", detalles: "Premiun, 500 gr, 40 % de materia grasa", stock: "45" },
    { id: 11, producto: "Lacteos", marca: "Queso Mar del Plata", imagen: "../img/queso.jpg", precio: "895", detalles: "Premiun, 900 gr, 35 % de materia grasa", stock: "25" },
    { id: 12, producto: "Lacteos", marca: "Leche San Juan", imagen: "../img/leche.jpg", precio: "120", detalles: "Entera, 1 Litro, 3 % de grasas", stock: "10" }
]

const categorias = [
    { id: "Bebida", descripcion: "Bebida" },
    { id: "Panaderia", descripcion: "Panaderia" },
    { id: "Almacen", descripcion: "Almacen" },
    { id: "Carniceria", descripcion: "Carniceria" },
    { id: "Lacteos", descripcion: "Lacteos" }
]

export const getCategorias = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categorias)
        }, 1000)
    })
}



export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}


console.log(products)


export const getProduct = (id) => {

    console.log()
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
            console.log(prod)
            
        }, 1000)
    })
}


export const getProds = (catId ) => {

    console.log(catId )
    return new Promise((resolve) => {
        const prods = products.filter(p => p.producto === catId )
        setTimeout(() => {
            resolve(prods)
            console.log(prods)
            
        }, 1000)
    })
}





export const getCategoria = (cat) => {

    console.log(cat)
    return new Promise((resolve) => {
  /*       const productsToResolve = cat.id ? products.filter(item => item.producto === cat.id) : products */
        const productsToResolve = products.filter(p => p.cat=== cat) 
        setTimeout(() => {
            resolve(productsToResolve)
            console.log(productsToResolve)
        }, 1000)
    })
}
