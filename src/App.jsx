import { useState} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './component/NavBar.jsx'
import Cart from "./component/pages/Cart.jsx"
import Ayuda from "./component/pages/Ayuda.jsx"
import Nosotros from "./component/pages/Nosotros.jsx"
import Contacto from "./component/pages/Contacto.jsx"
import Tienda from "./component/pages/Tienda.jsx"
import BotonColor from "./component/BotonColor.jsx"
import Busqueda from './component/Busqueda.jsx'
import ItemListContainer from "./component/ItemsList/ItemListContainer.jsx"
import { ItemDetailContainer } from './component/ItemsList/ItemDetailContainer.jsx'
import ItemListContainerCategory from "./component/ItemsList/ItemListContainerCategory.jsx"
import {Provider} from "./contexts/ItemsContext.jsx"
import { Footer } from './component/pages/Footer.jsx'

function App() {
  const [isAzul, setIsAzul] = useState(false);

  const cambiarColorNavBar = () => {
    setIsAzul(!isAzul);
};  
  const colorNavBar = isAzul ? '#4CAF50' : '#08527A';
  
  return(
    <Provider>
  <BrowserRouter>
    <div className="body_header">
      <Busqueda />
      <BotonColor cambiarcolor={cambiarColorNavBar}/>
    </div>
    <header className="header">
      <NavBar colorFondo={colorNavBar}/>
    </header>
    <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/Nosotros' element={<Nosotros />}/>
      <Route path='/Ayuda' element={<Ayuda />}/>
      <Route path='/Contacto' element={<Contacto />}/>
      <Route path='/Tienda' element={<Tienda />}/>
      <Route path='/item/:id' element={<ItemDetailContainer />}/>
      <Route path='/category/:categoryid' element={<ItemListContainerCategory />}/>
      <Route path='/category/Cart' element={<Cart />}/>
    </Routes>
    <Footer />
  </BrowserRouter>
  </Provider>
  )
};

export default App
