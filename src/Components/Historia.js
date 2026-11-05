import React from 'react';

function Historia() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="text-uppercase fw-bold text-muted small tracking-widest">Orígenes y Evolución</span>
          <h2 className="fw-bold text-dark display-6 mt-1">Nuestra Historia</h2>
          <p className="text-muted mt-2">Un recorrido lleno de sabor, arte y constante innovación.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border">
              <p className="text-secondary lead fs-6 mb-4" style={{ textAlign: 'justify', lineHeight: '1.8' }}>
                Fundado con la misión de enaltecer la sazón peruana y brindar un punto de encuentro cultural, nuestro restaurante ha recorrido un camino lleno de pasión, tradición y constante innovación culinaria.
              </p>
              <p className="text-muted small mb-0" style={{ textAlign: 'justify', lineHeight: '1.8' }}>
                Desde nuestros inicios, nos propusimos ser guardianes de los sabores ancestrales, adaptándolos a las exigencias modernas sin perder el alma ni la autenticidad que nos caracteriza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Historia;