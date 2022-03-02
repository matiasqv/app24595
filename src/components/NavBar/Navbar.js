import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.js'
import { NavLink } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { getCategorias } from '../../asyncmock'
import { MyContext } from '../../App'



const NavBar = ({ catId, title, color, ...rest }) => {

    const [categorias, setCategorias] = useState([])


    const contexValue = useContext(MyContext)
    console.log(contexValue)

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
            <CartWidget />
        </nav>
    )

}

export default NavBar