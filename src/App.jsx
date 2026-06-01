
import './App.css'
import ItemListContainer from "./components/ItemListContainer"
import Navbar from './components/Navbar'
import NavbarRB from './components/NavBarRB'
import Contador from './components/Contador'; 
import DinamicComponent from './components/DinamicComponent';
import ComponentWithChildren from './components/ComponentWithChildren';

function App() {
 console.log('App')

  return (
    <div>
      <Navbar />
      <NavbarRB />
      <ItemListContainer 
        saludo="¡Hola! Bienvenido a nuestra tienda" 
        itemsdisponibles="Nuestros productos" />
      <Contador />

    </div>
  )
}

export default App
