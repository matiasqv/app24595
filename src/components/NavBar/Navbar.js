import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.js'

const NavBar = ({ routing, title, color, ...rest }) => {
    return (
        <nav className="NavBar">
            <div className="NavBar-logo" onClick={() => routing({ path: 'list', id: 1 })}>
                <img src={'./images/logo.svg'} className="App-logo" alt="logo" />
                {/* props.title viene desde App.js por el props */}
                <h3 style={{ backgroundColor: color }} >{title}</h3>
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