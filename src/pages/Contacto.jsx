import React from 'react';

const Contacto = () => {
  return (
    <section id="seccion-contacto" className="border-bottom border-2">
      <div className="container py-5">
        <div className="row">
          
          {/* Columna de contacto */}
          <div className="col-md-6">
            <div className="contenedor p-4 bg-none">
              <h2 className="pb-4"><i className="bi bi-envelope-fill text-primary"></i> Contacto</h2>
              <p className="fs-5 mb-4">Completa el formulario y nos pondremos en contacto contigo pronto.</p>
              <form method="POST" data-netlify="true" action="#">
                <div className="mb-3">
                  <input type="email" className="form-control" id="email" name="email" placeholder="Correo electrónico" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="name" name="name" placeholder="Nombre" />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control" name="phone" id="phone" placeholder="Teléfono" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" name="message" id="message" placeholder="Mensaje:" rows="4"></textarea>
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary w-100 btn-send">Enviar Mensaje</button>
                </div>
              </form>
            </div>
          </div>
          {/* Columna de información de contacto */}
          <div className="col-md-6">
            <div className="contenedor p-4 bg-none contact-info">
              <h2 className="pb-4">Información de contacto</h2>
              <p className="fs-5 mb-1"><i className="bi bi-geo-alt-fill text-primary"></i> Dirección: C/ Corral de la Cerera 3, Palencia.</p>
              <p className="fs-5 mb-1"><i className="bi bi-envelope-fill text-primary"></i> Correo: info@enfoka.com</p>
              <p className="fs-5 mb-1"><i className="bi bi-telephone-fill text-primary"></i> Teléfono: +34 000 000 000</p>
              <p className="fs-5 mb-0">¿Necesitas ayuda para tus proyectos? <b>¡Contáctanos ahora mismo!</b></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
