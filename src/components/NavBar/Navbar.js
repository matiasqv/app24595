import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.js'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCategorias } from '../../asyncmock'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'



const NavBar = ({ catId, title, color, ...rest }) => {
    const [categorias, setCategorias] = useState([])
    const { cart } = useContext(CartContext)

    useEffect(() => {
        getCategorias().then(categorias => {
            setCategorias(categorias)
        })
    }, [])

    return (
        <nav className="NavBar">
            <NavLink className="NavBar-logo" to={'/'}>
                <img src={'../images/logo.svg'} className="App-logo" alt="logo" />
                <h3 style={{ backgroundColor: color }} >{title}</h3>
            </NavLink>
            <div className="Categorias">
                {categorias.map(cat => <NavLink key={cat.id} cat={cat} to={`/producto/${cat.id}`} className={({ isActive }) => isActive ? 'ActiveButton' : 'Button'} >{cat.descripcion}</NavLink>)}
            </div>
            <div className="LoggaIn">
                <button className="LoggaInButton">Logga In</button>
            </div>
            {cart.length > 0 && <CartWidget />}
        </nav>
    )

}

export default NavBar