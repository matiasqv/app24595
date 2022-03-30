import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getDocs, collection, query, where, getDoc, doc , writeBatch} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: process.env.REACT_APP_apikey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firestoreDb = getFirestore(app)

export const batch = writeBatch(firestoreDb)

export const getProducts = (catId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = catId ?
            query(collection(firestoreDb, 'products'), where('categoria', '==', catId)) :
            collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }

            })
            resolve(products)
        }).catch((error) => {
            reject('Error obteniendo productos: ', error)
        })
    })
}

export const getProductById = (productListId) => {
    return new Promise((resolve, reject) => {
        const prod = doc(firestoreDb, 'products', productListId)

        getDoc(prod).then(response => {
            const prod = { id: response.id, ...response.data() }
            resolve(prod)
        }).catch((error) => {
            reject('Error obteniendo producto: ', error)
        })
    })
}

export const getCategorias = () => {
    return new Promise((resolve, reject) => {
        getDocs(collection(firestoreDb, 'categorias')).then(response => {
            const categorias = response.docs.map(cate => {
                return { id: cate.id, ...cate.data() }
            })
            resolve(categorias)
        }).catch((error) => {
            reject('Error obteniendo categorias: ', error)
        })
    }, [])
}
