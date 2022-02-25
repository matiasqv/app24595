
import './App.css'
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar title="e-miTienda" color="red" />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="HOLA MUNDO" color="purple"/>} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/producto/:catId' element={<ItemListContainer/>} />
          <Route path='/detail/:productListId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App
