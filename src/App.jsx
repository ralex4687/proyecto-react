
import './App.css'
import ItemListContainer from "./components/ItemListContainer"
import Navbar from './components/Navbar'
import NavbarRB from './components/NavBarRB'
import Contador from './components/Contador'; 
import DinamicComponent from './css/DinamicComponent';

function App() {
 console.log('App')

  return (
    <div>
      <Navbar />
      <NavbarRB />
      <ItemListContainer 
        saludo="¡Hola! Bienvenido a nuestra tienda" 
        itemsdisponibles="Nuestros productos" />
        <DinamicComponent title="Título del Producto" description="Descripción del producto" />
        <Contador />

    </div>
  )
}

export default App
