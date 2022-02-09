import './NavBar.css'
import '../CartWidget/CartWidget.js'
import CartWidget from '../CartWidget/CartWidget.js'

const NavBar = (props) => {
    return (
        <nav className="NavBar">
            <div className="NavBar-logo">
                <img src={'./images/logo.svg'} className="App-logo" alt="logo" />
                {/* props.title viene desde App.js por el props */}
                <h3 style={{ backgroundColor: props.color }}>{props.title}</h3>
            </div>
            <div className="Categories">
                <button className="Button">Productos</button>
                <button className="Button">Liquidación</button>
                <button className="Button">Promoción</button>
            </div>
            <div className="LoggaIn">
                <button className="LoggaInButton">Logga In</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar