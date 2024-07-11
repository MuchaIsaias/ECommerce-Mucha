import React from 'react'
import CartWidget from './CartWidget.jsx'
import { images } from './Imagenes.jsx'
const NavBar = ({ colorFondo }) =>{
    return (
        <nav className="header-nav" style={{display:"flex", backgroundColor: colorFondo}}>
            <a href="./index.html"><img src={images.Miproyecto} alt="logo-de-la-tienda"/></a>
            <input className="checkbox" type="checkbox"/>
            <img className="menu abrir" src="./assets/menu.png" alt=""/>
            <img className="menu cerrar" src="./assets/x.png" alt=""/>
            <ul className="nav-ul row w-100" >
                <li className="nav-ul-li col-xl-2 col-lg-2 col-md-12 li-categorias">
                    <a href="">
                        <img src={images.categorias} alt=""/>
                            Categorias
                        <img className="flecha" src="./assets/flecha-hacia-abajo-para-navegar.png" alt="foto-de-flecha-hacia-abajo"/>
                    </a>
                    <ul style={{ backgroundColor: colorFondo}}>
                        <li><a href="">Accesorios</a></li>
                        <li><a href=".">Notebooks</a></li>
                        <li><a href=".">PcArmadas</a></li>
                        <li><a href=".">Hardware</a></li>
                        <li><a href=".">Monitores</a></li>
                        <li><a href=".">Software</a></li>
                        <li><a href=".">Conectividad</a></li>
                    </ul>
                </li>
                <li className="nav-ul-li col-xl-2 col-lg-2">
                    <a href="">
                        <img src={images.casa} alt="logo-de-una-casa"/>
                        Inicio
                    </a>        
                </li>
                <li className="nav-ul-li col-xl-2 col-lg-2">
                    <a href="">
                        <img src={images.tiendaOnline} alt="logo-de-una-tienda"/>
                        Tienda
                    </a>
                </li>
                <li className="nav-ul-li col-xl-2 col-lg-2">
                    <a href="">
                        <img src={images.burbujaDeDialogo} alt="logo-de-burbuja-de-dialogo"/>
                        Nosotros
                    </a>
                </li>
                <li className="nav-ul-li col-xl-2 col-lg-2">
                    <a href="">
                        <img src={images.ayudar} alt="logo-de-ayudar"/>
                        Ayuda
                    </a>
                </li>
                <li className="nav-ul-li col-xl-2 col-lg-2">
                    <a href="">
                        <img src={images.auriculares} alt="logo-de-auriculares-con-microfono"/>
                        Contacto
                    </a>
                </li>
            </ul>
            <CartWidget/>        
        </nav>
    )
}
export default NavBar