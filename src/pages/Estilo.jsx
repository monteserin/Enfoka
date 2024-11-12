import React from 'react';

const Estilo = () => {
  return (
    <div className="contenido">
      <div className="container py-5">
        <div className="row">
          {/* Columna de texto */}
          <div className="col-md-6">
            <h2 className="mb-4">Nuestro enfoque en el estilo de vida</h2>
            <p className="lead mb-4">
              En <b>EnfoKa</b>, creemos en capturar la esencia de la vida cotidiana de una manera auténtica y artística.
              Nuestro equipo de fotógrafos está dedicado a documentar momentos especiales que cuentan tu historia y reflejan
              tu estilo de vida único.
            </p>
            <p className="lead mb-4">
              Desde retratos íntimos en casa hasta aventuras al aire libre, estamos aquí para capturar tus momentos más
              preciados con profesionalismo y creatividad. <br />
              <b>¡Descubre cómo podemos agregar un toque especial a tu vida cotidiana!</b>
            </p>
            {/* Botón de llamada a la acción para contactar */}
            <button id="mostrarFormulario" className="btn btn-primary btn-lg">¡Contáctanos Ahora!</button>
          </div>
          {/* Columna de imagen */}
          <div className="col-md-6">
            <img src="public/estilo de vida.jpg" className="img-fluid" alt="Imagen de estilo de vida" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estilo;
