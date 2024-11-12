import React from 'react';

const Eventos = () => {
  return (
    <div className="contenido">
      <div className="container py-5">
        <div className="row">
          {/* Columna de texto */}
          <div className="col-md-6">
            <h2 className="mb-4"><strong>Eventos Especiales</strong></h2>
            <p className="lead mb-4">
              Desde bodas y cumpleaños hasta conferencias y ferias comerciales, nuestros fotógrafos capturan los <strong>momentos especiales</strong> de tu vida o de tu negocio con profesionalismo y creatividad.
              Sabemos lo importante que son estos eventos y trabajamos para garantizar que cada momento sea capturado de manera memorable.
            </p>
            <p className="lead mb-4">
              Con una atención meticulosa a los detalles y una comprensión profunda de la importancia de cada momento, nuestro equipo se esfuerza por proporcionarte <strong>imágenes</strong> que reflejen la esencia y la emoción de cada evento.
              Ya sea un evento corporativo que busca promover su marca o un evento personal que desea preservar para siempre, estamos aquí para ayudarte.
            </p>
            {/* Botón de llamada a la acción para contactar */}
            <button id="mostrarFormulario" className="btn btn-primary btn-lg">¡Contáctanos Ahora!</button>
          </div>
          {/* Columna de imagen */}
          <div className="col-md-6">
            <img src="public/eventos especiales.jpg" className="img-fluid" alt="Eventos Especiales" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventos;
