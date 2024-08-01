import { useState,useEffect } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './component/NavBar.jsx'
import Ayuda from "./component/Ayuda.jsx"
import Nosotros from "./component/Nosotros.jsx"
import Contacto from "./component/Contacto.jsx"
import Tienda from "./component/Tienda.jsx"
import BotonColor from "./component/BotonColor.jsx"
import Busqueda from './component/Busqueda.jsx'
import ItemListContainer from "./component/ItemListContainer.jsx"
import { ItemDetailContainer } from './component/ItemDetailContainer.jsx'
import ItemListContainerCategory from "./component/ItemListContainerCategory.jsx"

function App() {
  const [isAzul, setIsAzul] = useState(false);

  const cambiarColorNavBar = () => {
    setIsAzul(!isAzul);
};  
  const colorNavBar = isAzul ? '#4CAF50' : '#08527A';
  
  return(
  <BrowserRouter>
        <div style={{display:"flex",flexDirection: "row",justifyContent: "space-evenly",flexWrap: "wrap",backgroundColor: "#fff",borderBottom: "1px solid #6c757d",borderTop: "1px #dee2e6 solid",alignItems: "center"}}>
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
      <Route path='/category/:category' element={<ItemListContainerCategory />}/>
    </Routes>
  </BrowserRouter>
  )
};

export default App
