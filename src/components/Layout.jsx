import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <div>
        {/* Navbar */}
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
                  <NavLink className="nav-link" to="/eventos">Eventos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/estilo">Estilo</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main>
          {children}
        </main>

        {/* Footer */}

      </div>
      <footer className="text-white footer p-3">
        <div className="text-center">
          <h6 className="footercolor">Enfoka © 2024 Copyright</h6>
        </div>
      </footer>
    </>
  );
};

export default Layout;
