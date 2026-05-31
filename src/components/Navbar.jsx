import "../css/Navbar.css"
import CartWidget from "./CartWidget"
const Navbar = () => {
    return(
        <nav className="nav-container">
            <a className="anchor-nav" href="">
                <img className="logo" alt='logo' src='../logo-portaldepiedras.png' />
            </a>
            <a className="anchor-nav" href="">Inicio / Todo el menú</a>
            <a className="anchor-nav" href="">Pizzas</a>
            <a className="anchor-nav" href="">Empanadas</a>
            <a className="anchor-nav" href="">Bebidas</a>
            <CartWidget compras ={15}/>
        </nav>
    )
}
export default Navbar 