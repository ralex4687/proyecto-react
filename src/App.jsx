
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
        <DinamicComponent title="Título del Producto" description="Descripción del producto aquí"
        button="shop!" image="https://i.postimg.cc/XYq3Syp6/empanadas-logo.png" 
        />
        <DinamicComponent title="Título del Producto" description="Descripción del producto aquí"
        button="shop!" image="https://i.postimg.cc/vT4LwhFg/empanada-caprese.webp" 
        />
        <DinamicComponent title="Título del Producto" description="Descripción del producto aquí"
        button="shop!" image="https://i.postimg.cc/XYq3Syp6/empanadas-logo.png" 
        />
        <DinamicComponent title="Título del Producto" description="Descripción del producto aquí"
        button="shop!" image="https://i.postimg.cc/vT4LwhFg/empanada-caprese.webp" 
        />
        <Contador />
        <ComponentWithChildren>
          <DinamicComponent saludo="¡Hola! Bienvenido a nuestra tienda"
          />
        </ComponentWithChildren>

    </div>
  )
}

export default App
