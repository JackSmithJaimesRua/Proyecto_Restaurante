import React, { useState } from 'react';

function Login({ onLoginExitoso }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación simple para examen (acepta cualquier credencial o una fija)
    if (email && password) {
      onLoginExitoso();
    } else {
      setError(true);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center py-4">
        <div className="col-md-5">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="p-4 text-center text-white" style={{ backgroundColor: '#0B1D3A' }}>
              <h3 className="fw-bold mb-1">ACCESO ADMINISTRATIVO</h3>
              <p className="text-warning small mb-0">Ingrese sus credenciales de Intranet</p>
            </div>
            
            <div className="card-body p-4 p-md-5 bg-white">
              {error && (
                <div className="alert alert-danger small py-2 mb-3" role="alert">
                  Por favor complete todos los campos.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label small fw-semibold text-dark">Usuario / Correo Admin</label>
                  <input 
                    type="email" 
                    required 
                    className="form-control" 
                    placeholder="admin@kauza.pe" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label small fw-semibold text-dark">Contraseña</label>
                  <input 
                    type="password" 
                    required 
                    className="form-control" 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-warning w-100 py-3 fw-bold text-dark rounded-3 shadow-sm text-uppercase"
                >
                  Ingresar a Intranet
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;