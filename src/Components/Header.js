import React from 'react';

function Header({ cambiarVista, vistaActual, esAdmin, onCerrarSesion }) {
  return (
    <header className="bg-dark text-white py-3 shadow-sm border-bottom border-secondary sticky-top">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* LOGO KAUZA */}
        <div 
          className="h4 fw-bold mb-2 mb-md-0 d-flex align-items-center gap-2" 
          onClick={() => cambiarVista('portada')}
          style={{ cursor: 'pointer', color: '#D4AF37' }}
        >
          <span className="badge bg-warning text-dark me-1">K</span>
          KAUZA <span className="text-white fw-light fs-6">| Cocina Peruana</span>
        </div>

        {/* NAVEGACIÓN LIBRE */}
        <ul className="nav align-items-center gap-1 gap-md-2">
          {[
            { id: 'portada', label: 'inicio' },
            { id: 'carta', label: 'carta' },
            { id: 'nosotros', label: 'nosotros' },
            { id: 'reserva', label: 'reserva' },
            { id: 'intranet', label: 'intranet' }
          ].map((item) => (
            <li className="nav-item" key={item.id}>
              <button 
                onClick={() => cambiarVista(item.id)}
                className={`nav-link text-uppercase px-2 px-md-3 fw-semibold small bg-transparent border-0 ${
                  vistaActual === item.id ? 'text-warning border-bottom border-warning' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}

          {/* BOTÓN MESA & SESIÓN ADMIN */}
          <li className="nav-item ms-md-2 d-flex align-items-center gap-2">
            <button 
              onClick={() => cambiarVista('reserva')} 
              className="btn btn-warning btn-sm fw-bold text-uppercase px-3 rounded-pill"
            >
              reserva mesa
            </button>

            {esAdmin && (
              <button 
                onClick={onCerrarSesion} 
                className="btn btn-outline-danger btn-sm rounded-pill px-2 py-1 small"
                title="Cerrar sesión de Administrador"
              >
                Salir Admin
              </button>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;