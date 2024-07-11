import { useState } from 'react'
import { images } from './component/Imagenes.jsx'
import './App.css'
import NavBar from './component/NavBar.jsx'
import ItemListContainer from './component/ItemListContainer.jsx'

function App() {
  const [isAzul, setIsAzul] = useState(true);

  const cambiarColorNavBar = () => {
    setIsAzul(!isAzul);
  };  

  const colorNavBar = isAzul ? '#08527A' : '#4CAF50';
  return(
    <div className='App'>
      <div style={{display:"flex",flexDirection: "row",justifyContent: "space-evenly",flexWrap: "wrap",backgroundColor: "#fff",borderBottom: "1px solid #6c757d",borderTop: "1px #dee2e6 solid",alignItems: "center"}}>
            <a href="./index.html"><img src={images.Miproyecto} alt="logo-de-la-tienda" style={{width: "10.8rem",height: "100%"}}/></a>
            <form id="formularioBusqueda" style={{display: "flex",alignItems: "center",flexWrap: "wrap"}}> 
                <input className="input" type="search" placeholder="Buscar Productos..." id="buscador" style={{width: "43rem",height: "initial",fontSize: "2rem",border: "1px #dee2e6 solid",padding: "1rem",}}/>
                <input className="boton-input-header" type="submit" style={{fontSize: "2rem",height: "initial",width: "8.3rem",padding: "1rem",border: "1px #dee2e6 solid"}}/>
            </form>
            <button onClick={cambiarColorNavBar} style={{width:"5rem",fontSize:"1rem",backgroundColor:"#198754"}}>
            Color
            </button>
        </div>
        <header className="header">
          <NavBar colorFondo={colorNavBar}/>
          <ItemListContainer greeting={"Bienvenidos"}/>
        </header>  
    </div>
  )
};

export default App
