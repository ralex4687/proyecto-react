
import './App.css'
import ItemListContainer from "./components/ItemListContainer"
import Navbar from './components/Navbar'
import NavbarRB from './components/NavBarRB'

function App() {


  return (
    <div>
      <NavbarRB />
      <ItemListContainer saludo="¡Hola! Bienvenido a nuestra tienda" 
                         itemsdisponibles="Nuestros productos" />
    </div>
  )
}

export default App
