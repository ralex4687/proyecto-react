import "../css/Navbar.css"
import CartWidget from "./CartWidget"
const Navbar = () => {
    return(
        <nav className="nav-container">
            <a className="anchor-nav" href="">
                <img className="logo" alt='logo' src='../logo-portaldepiedras.png' />
            </a>
            <a className="anchor-nav" href="">Nuevos</a>
            <a className="anchor-nav" href="">Ofertas</a>
            <a className="anchor-nav" href="">Mas vendidos</a>
            <CartWidget/>
        </nav>
    )
}
export default Navbar 