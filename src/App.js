
import './App.css'
import { useState } from 'react'
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'



const App = () => {
  const [route, setRoute] = useState('list')

  return (
    <div className="App">
      <div>
        <button onClick = {() => setRoute ('list')}>list</button>
        <button onClick = {() => setRoute ('detail')}>Detail</button>
      </div>
      {/* este title  y color viaja a NavBar por las props */}
      <NavBar title="e-miTienda" color="purple" />
      {/*{route === 'list' ? <ItemListContainer/> : null}  // Forma de escribirlo en forma ternaria*/}
      {route === 'list' && <ItemListContainer greeting="HOLA MUNDO" color="purple" />}
      {route === 'detail' && <ItemDetailConteiner />}
    </div>
  );
}

export default App
