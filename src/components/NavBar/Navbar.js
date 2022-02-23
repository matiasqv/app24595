import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.js'
import { NavLink } from 'react-router-dom'

const NavBar = ({ routing, title, color, ...rest }) => {
    return (
        <nav className="NavBar">
            <div className="NavBar-logo">
                <img src={'../images/logo.svg'} className="App-logo" alt="logo" />
                {/* props.title viene desde App.js por el props */}
                <h3 style={{ backgroundColor: color }} >{title}</h3>
            </div>
            <div className="Categories">
                <NavLink to={'producto/Bebida'} className="Button">Bebida</NavLink>
                <NavLink to={'producto/Carniceria'} className="Button">Carniceria</NavLink>
                <NavLink to={'producto/Lacteos'} className="Button">Lacteos</NavLink>
            </div>
            <div className="LoggaIn">
                <button className="LoggaInButton">Logga In</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar