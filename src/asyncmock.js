// ARRAY products
const products = [
    { "id": 1, "producto": "Bebida", "marca": "CocaCola", "imagen": "img/cocacola.jpg", "precio": "300", "detalles": ["CocaCola en lata", "300 cl", "con azucar"] },
    { "id": 2, "producto": "Bebida", "marca": "Agua de Mar", "imagen": "img/aguamineral.jpg", "precio": "150", "detalles": ["Importada", "500 cl", "sin sodio"] },
    { "id": 3, "producto": "Bebida", "marca": "Jugo Pong", "imagen": "img/jugo.jpg", "precio": "200", "detalles": ["Jugo Natural", "250 cl", "sin concervantes"] },
    { "id": 4, "producto": "Panaderia", "marca": "Pan", "imagen": "img/pan.jpg", "precio": "350", "detalles": ["Pan blanco", "x kg", "sin concervantes"] },
    { "id": 5, "producto": "Almacen", "marca": "Tomate Alcon", "imagen": "img/latatomate.jpg", "precio": "576", "detalles": ["Tomate en lata", "400 g", "Cubitado"] },
    { "id": 6, "producto": "Almacen", "marca": "Fideos Don", "imagen": "img/fideos.jpg", "precio": "259", "detalles": ["Fideos Largos", "500 gr", "a base de trigo"] },
    { "id": 7, "producto": "Carniceria", "marca": "Salmon Rosado", "imagen": "img/salmon.jpg", "precio": "999", "detalles": ["Salmon de Chile", "750 gr", "Importado"] },
    { "id": 8, "producto": "Carniceria", "marca": "Peceto", "imagen": "img/peceto.jpg", "precio": "860", "detalles": ["Vacuno", "1 kg", "Argentina"] },
    { "id": 9, "producto": "Carniceria", "marca": "Costilla de Cerdo", "imagen": "img/cerdo.jpg", "precio": "1100", "detalles": ["Cerdo Patagonico", "800 gr", "Argentina"] },
    { "id": 10, "producto": "Lacteos", "marca": "Queso Parmesano", "imagen": "img/parmesan.jpg", "precio": "685", "detalles": ["Premiun", "500 gr", "40 % de materia grasa"] },
    { "id": 11, "producto": "Lacteos", "marca": "Queso Mar del Plata", "imagen": "img/queso.jpg", "precio": "895", "detalles": ["Premiun", "900 gr", "35 % de materia grasa"] },
    { "id": 12, "producto": "Lacteos", "marca": "Leche San Juan", "imagen": "img/leche.jpg", "precio": "120", "detalles": ["Entera", "1 Litro", "3 % de grasas"] }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 5000)
    })
}

export const getProduct = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products[0])
        }, 3000)
    })
}
