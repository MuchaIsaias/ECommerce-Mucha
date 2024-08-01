import { images } from "./Imagenes"
import {NavLink} from "react-router-dom"
const Busqueda =()=>{
    return(
        <>
            <NavLink to="/"><img src={images.Miproyecto} alt="logo-de-la-tienda" style={{width: "10.8rem",height: "100%"}}/>
            </NavLink>
            <form id="formularioBusqueda" style={{display: "flex",alignItems: "center",flexWrap: "wrap"}}> 
                <input className="input" type="search" placeholder="Buscar Productos..." id="buscador" style={{width: "43rem",height: "initial",fontSize: "2rem",border: "1px #dee2e6 solid",padding: "1rem",}}/>
                <input className="boton-input-header" type="submit" style={{fontSize: "2rem",height: "initial",width: "8.3rem",padding: "1rem",border: "1px #dee2e6 solid"}}/>
            </form>
        </>
    )
}
export default Busqueda