
import './App.css'
import { useState } from 'react'
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar title="e-miTienda" color="purple" />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="HOLA MUNDO" color="purple"/>} />
          <Route path='about' element={<h1>About</h1>} />
          <Route path='producto/:productoId' element={<ItemListContainer />} />
          <Route path='detail/:productListId' element={<ItemDetailConteiner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
