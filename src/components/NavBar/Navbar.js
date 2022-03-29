import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.js'
import { NavLink } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import { getCategorias } from '../../services/firebase/firebase'
import { useNotificationServices } from '../../services/notification/NotificationServices'



const NavBar = ({ title, color, ...rest }) => {
    const [categorias, setCategorias] = useState([])
    const { cart } = useContext(CartContext)

    const setNotification = useNotificationServices()

    useEffect(() => {
        getCategorias().then(response => {
            setCategorias(response)
        }).catch(error => {
            setNotification('error', error)
        })
    }, [])

    return (
        <nav className="NavBar">
            <NavLink className="NavBar-logo" to={'/'}>
                <img src={'../images/logo.svg'} className="App-logo" alt="logo" />
                <h3 style={{ backgroundColor: color }} >{title}</h3>
            </NavLink>
            <div className="Categorias">
                {categorias.map(cat => <NavLink key={cat.id} cat={cat} to={`/categoria/${cat.id}`} className={({ isActive }) => isActive ? 'ActiveButton' : 'Button'} >{cat.descripcion}</NavLink>)}
            </div>
            <div className="LoggaIn">
                <button className="LoggaInButton">Logga In</button>
            </div>
            {cart.length > 0 && <CartWidget />}
        </nav>
    )
}

export default NavBar