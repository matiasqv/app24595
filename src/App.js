
import './App.css'
import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export const MyContext = React.createContext('NO HAY NADA')


const App = () => {
  const [cart, setCart] = useState('PRODUCTO')

  console.log(cart)

  useEffect (() => {
    console.log(localStorage.getItem('key'))
  })



  return (
    <div className="App">

      <BrowserRouter>
        <NavBar title="e-miTienda" color="red" />
        <MyContext.Provider value={{ cart, setCart }}>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="HOLA" color="purple" />} />
            <Route path='/about' element={<h1>About</h1>} />
            <Route path='/producto/:catId' element={<ItemListContainer />} />
            <Route path='/detail/:productListId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>

    </div>
  );
}
export default App
