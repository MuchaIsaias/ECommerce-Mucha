const Contacto = ()=>{
    return(
        <main className="main-contactos">
    <div className="contactos-section row w-100">
        <div className="card sacar-position contactos-informacion col-xl-6" style={{width: "55rem"}}>
        <h2 className="card-title">Información</h2>
        <div className="card-body border-top">
          <h3 className="card-subtitle mb-2">Direccion:</h3>
          <p className="card-text">Rufino Inda 2553</p>
          <p className="card-text">Mar del Plata - Buenos Aires</p>
          <p className="card-text">Por consultas acerca de tu pedido:</p>
          <p className="card-text">Tel: (02236211929)</p>
          <p className="card-text">WhatsApp:+54 9 2236211929</p>
          <h3 className="card-subtitle mb-2">Atención al cliente:</h3>
          <p className="card-text">email: Isaiasmucha@gmail.com</p>
          <h3 className="card-subtitle mb-2">Atención:</h3>
          <p className="card-text">Lunes a Viernes de 09:30 a 19:00hs.</p>
          <p className="card-text">Sábados de 09:00 a 14:00hs</p>
        </div>
      </div>
      <div className="card sacar-position contactos-registro col-xl-6" style={{width: "55rem"}}>
        <div className="card-body">
          <form className="contactos-form">
            <div className="mb-3 contactos-form-inputs">
              <label htmlFor="exampleFormControlInput1" className="form-label"></label>
              <input type="email" className="form-control contactos-gmail" id="exampleFormControlInput1" placeholder="Tu Correo Electronico" required/>
              <label htmlFor="exampleFormControlPassword1" className="form-label"></label>
              <input type="password" className="form-control contactos-password" id="exampleFormControlPassword1" placeholder="Contraseña" required/>
            </div>
            <div className="mb-3 contactos-form-textarea">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        <div className="contactos-mapa">
            
        </div> 
        </div>
      </div>
    </div>
  </main>
    );
}
export default Contacto