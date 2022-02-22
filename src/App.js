
import './App.css'
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'



function App() {
  return (
    <div className="App">
      {/* este title  y color viaja a NavBar por las props */}
      <NavBar title="e-miTienda" color="purple" />
      <ItemListContainer greeting="HOLA MUNDO" color="purple" />
      <ItemDetailConteiner />
    </div>
  );
}

export default App
