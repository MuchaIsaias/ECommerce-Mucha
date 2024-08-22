import React from 'react'
import CartWidget from './ItemsList/CartWidget.jsx'
import { images } from './Imagenes.jsx'
import {NavLink} from "react-router-dom"

const NavBar = ({ colorFondo }) =>{ 
    return (
        <nav className="header-nav" style={{display:"flex", backgroundColor: colorFondo}}>
            <a href="./index.html"><img src={images.Miproyecto} alt="logo-de-la-tienda"/></a>
            <input className="checkbox" type="checkbox"/>
            <img className="menu abrir" src="https://i.imgur.com/8DiG78Y.png" alt=""/>
            <img className="menu cerrar" src="https://i.imgur.com/ASUQNrC.png" alt=""/>
            
            <ul className="nav-ul row w-100" >
                <li className="nav-ul-li col-xl-1 col-lg-1 li-categorias">
                    <NavLink to="/">
                        <img src={images.categorias} alt=""/>
                        <img className="flecha" src={images.Flecha} alt="foto-de-flecha-hacia-abajo"/>
                    </NavLink>
                    <ul>
                        <li><NavLink to="/category/Accesorios">Accesorios</NavLink></li>
                        <li><NavLink to="/category/Notebooks">Notebooks</NavLink></li>
                        <li><NavLink to="/category/PcArmadas">PcArmadas</NavLink></li>
                        <li><NavLink to="/category/Hardware">Hardware</NavLink></li>
                        <li><NavLink to="/category/Monitores">Monitores</NavLink></li>
                        <li><NavLink to="/category/Software">Software</NavLink></li>
                        <li><NavLink to="/category/Gamers">Gamers</NavLink></li>
                    </ul>
                </li>
                <li className="nav-ul-li col-xl-1.5 col-lg-2">
                    <NavLink to="/">
                        <img src={images.casa} alt="logo-de-una-casa"/>
                        Inicio
                    </NavLink>        
                </li>
                <li className="nav-ul-li col-xl-1.5 col-lg-2">
                    <NavLink to="/Tienda">
                        <img src={images.tiendaOnline} alt="logo-de-una-tienda"/>
                        Tienda
                    </NavLink>
                </li>
                <li className="nav-ul-li col-xl-1.5 col-lg-2">
                    <NavLink to="/Nosotros">
                        <img src={images.burbujaDeDialogo} alt="logo-de-burbuja-de-dialogo"/>
                        Nosotros
                    </NavLink>
                </li>
                <li className="nav-ul-li col-xl-1.5 col-lg-2">
                    <NavLink to="/Ayuda">
                        <img src={images.ayudar} alt="logo-de-ayudar"/>
                        Ayuda
                    </NavLink>
                </li>
                <li className="nav-ul-li col-xl-1.5 col-lg-2">
                    <NavLink to="/Contacto">
                        <img src={images.auriculares} alt="logo-de-auriculares-con-microfono"/>
                        Contacto
                    </NavLink>
                </li>
                <li className="nav-ul-li col-xl-1 col-lg-2 ">
                    <CartWidget/> 
                </li>
            </ul>
        </nav>
    )
}
export default NavBar