import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <div className="NavBar-logo">
                <img src={'./images/logo.svg'} className="App-logo" alt="logo" />
                <h3>e-miTienda</h3>
            </div>
            <div className="Categories">
                <button className="Button">Productos</button>
                <button className="Button">Liquidación</button>
                <button className="Button">Promoción</button>
            </div>
            <div className="LoggaIn">
                <button className="LoggaInButton">Logga In</button>
            </div>
        </nav>
    )
}

export default NavBar