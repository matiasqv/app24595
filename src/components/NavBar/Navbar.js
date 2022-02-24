import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.js'
import { NavLink } from 'react-router-dom'

const NavBar = ({ title, color, ...rest }) => {
    return (
        <nav className="NavBar">
            <NavLink className="NavBar-logo" to={'/'}>
                <img src={'../images/logo.svg'} className="App-logo" alt="logo" />
                {/* props.title viene desde App.js por el props */}
                <h3 style={{ backgroundColor: color }} >{title}</h3>
            </NavLink>
            <div className="Categories">
                <NavLink to={'/producto/Bebida'} className={({ isActive }) => isActive ? 'ActiveButton' : 'Button'}>Bebida</NavLink>
                <NavLink to={'/producto/Carniceria'} className={({ isActive }) => isActive ? 'ActiveButton' : 'Button'}>Carniceria</NavLink>
                <NavLink to={'/producto/Lacteos'} className={({ isActive }) => isActive ? 'ActiveButton' : 'Button'}>Lacteos</NavLink>
            </div>
            <div className="LoggaIn">
                <button className="LoggaInButton">Logga In</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar