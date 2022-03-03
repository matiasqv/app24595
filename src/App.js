
import './App.css'
import React, { useEffect} from 'react'
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'

const App = () => {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar title="e-miTienda" color="red" />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="HOLA" color="purple" />} />
            <Route path='/about' element={<h1>About</h1>} />
            <Route path='/producto/:catId' element={<ItemListContainer />} />
            <Route path='/detail/:productListId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}
export default App
