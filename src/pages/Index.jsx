import React from 'react';
import { NavLink } from 'react-router-dom';

function Index() {
    return (
        <>
            {/* Barra de navegación */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mi-menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mi-menu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="eventos">Eventos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="estilo">Estilo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="contacto">Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Sección de inicio */}
            <section id="inicio" className="container-fluid py-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-8 text-center">
                        <h4 className="display-4 text-primary mb-4">Servicios fotográficos<br />profesionales</h4>
                        <p className="lead mb-4">Capturamos tus momentos más especiales con calidad y creatividad...</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
