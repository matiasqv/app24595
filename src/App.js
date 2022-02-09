
import './App.css'
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'



function App() {
  return (
    <div className="App">
      {/* este title  y color viaja a NavBar por las props */}
      <NavBar title="e-miTienda" color="purple" />
      <ItemListContainer greeting="HOLA MUNDO" color="purple" />
    </div>
  );
}

export default App
