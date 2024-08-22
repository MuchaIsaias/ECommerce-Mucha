export const Footer = ()=>{
return(
    <footer className="footer row w-100">
    <h2 className="col-xl-12">El Refugio Del Hardware</h2>
    <div className="footer-info col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <h3>Direccion</h3>
      <p>Rufino Inda 2553 </p>
      <p>Mar del Plata - Buenos Aires</p>
      <p>Argentina</p>
      <h3>Horarios</h3>
      <p>Lunes a Viernes de 9:00 a 19.00 hs</p>
      <p>Sabados de 9:00 a 14.00 hs</p>
      <p>Domingo Cerrado</p>
    </div>
    <div className="footer-form col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <form>
        <input type="email" name="email" placeholder="Introducir Correo Electronico" required/>
        <input type="submit" name="email"/>
        <h3>¡ ENTERATE DE NUESTRAS PROMOS !</h3>
        <p>Suscríbase a nuestro boletín para recibir ofertas de descuentos anticipados e información sobre nuevos productos.</p>
      </form>
      <ul className="footer-redes">
        <li><a href="https://api.whatsapp.com/send?phone=5492236211929"><img className="wp" src="https://i.imgur.com/S3qo5y0.png" alt="logo-de-whatsapp"/></a></li>
        <li><a href="https://www.facebook.com/isaiass.mucha"><img className="fb" src="https://i.imgur.com/4rdVRVO.png" alt="logo-de-facebook"/></a></li>
        <li><a href="https://www.youtube.com/channel/UCoE7bShhyc2g2Wdu2F6YEuw"><img className="yt" src="https://i.imgur.com/at1hiBH.png" alt="logo-de-youtube"/></a></li>
        <li><a href="https://www.instagram.com/muchaisaias/"><img className="insta" src="https://i.imgur.com/o81q3cC.png" alt="logo-de-instagram"/></a></li>
        <li><a href="https://twitter.com/?lang=es"><img className="tw" src="https://i.imgur.com/aUUodDY.png" alt="logo-de-twitter"/></a></li>
        <li><a href="https://ar.linkedin.com/?trk=guest_homepage-basic_nav-header-logo"><img className="lnkd" src="https://i.imgur.com/GG5iSbc.png" alt="logo-de-linkedin"/></a></li>
      </ul>
    </div>
    <div className="final-footer col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <p>Copyright 2024 © El Refugio del hardware - Powered by: Mar del Plata Digital - Mar del Plata</p>
    </div>
  </footer>
)
}