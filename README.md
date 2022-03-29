# Ecommerce tienda se supermercado

Tienda online de alimentos.

![e-miTienda](public/images/gif.gif)


Este proyecto se inició con [Create React App](https://github.com/facebook/create-react-app).

## Dependencias Descargadas

[React-Router-Dom](https://reactrouter.com/web/guides/quick-start).\
Esta librería se encarga de generar rutas dinámicas para asi facilitar la navegabilidad por el sitio.

[Firebase](https://firebase.google.com/).\
Utilizo firebase en este proyecto para poder guardar en una base de datos (Firestore) los productos que se muestran en el sitio con todas sus características.
También firebase me permite crear usuarios para poder tener un control sobre la gente que compra en el sitio.


## Hooks Implementados

useState (React).\
Usado para generar estados locales al componente y tambien guardar esos estados para poder luego modificarlos.

useEffect (React).\
Usado para montar y hacer un render de los componentes solo cuando se los tiene que mostrar.

useContext (React).\
Con useContext logramos crear un contexto para poder tener dentro todos los datos, estados y funciones que querramos pasar a cualquier componente.

useParams (React-Router-Dom).\
Con useParams se detecta el parametro que le indicamos por la URL.


## Pasos para ver el sitio desde local

1. Desde la opcion Code copiamos el link HTTPS

2. En nustra terminal elegimos un lugar para clonar la carpeta y escribimos "git clone" + link que copiamos anteriormente

```
git clone https://github.com/matiasqv/app24595quinteros_matias.git
```

3. Desde la terminal nos paramos en la carpeta raiz del proyecto e instalamos todos las dependencias que están dentro con "npm i"

```
npm i
```

4. Escribimos en la terminal "npm start" y se abrira el sitio en el navegador predeterminado.
Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.

```
npm start
```
