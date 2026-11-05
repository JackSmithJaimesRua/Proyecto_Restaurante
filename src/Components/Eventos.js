import React from 'react';

function Eventos() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        
        {/* Cabecera de Eventos Culturales */}
        <div className="text-center mb-5">
          <span className="text-uppercase fw-bold text-muted small tracking-widest">Arte, Danza y Tradición</span>
          <h2 className="fw-bold text-dark display-6 mt-1">Noches de Espectáculo y Folklore</h2>
          <p className="text-muted mt-2">Disfruta de nuestras muestras artísticas inspiradas en el altiplano y la costa peruana.</p>
        </div>

        {/* Tarjeta principal de evento */}
        <div className="card border-0 shadow-sm rounded-4 mb-5 overflow-hidden">
          <div className="row g-0 align-items-center">
            <div className="col-lg-7">
              <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: '350px' }}>
                <span className="fw-bold fs-5">🎥 Espectáculo de Danzas en Vivo / Diablada & Caporales</span>
              </div>
            </div>
            <div className="col-lg-5 p-4 p-lg-5">
              <span className="badge bg-dark mb-2">Sábados Culturales</span>
              <h3 className="fw-bold mb-3">Cena Show & Expresión Andina</h3>
              <p className="text-muted small mb-4" style={{ textAlign: 'justify' }}>
                Revive las expresiones culturales más populares en un ambiente festivo lleno de ritmo, color y la mejor gastronomía peruana. Un homenaje al arte tradicional de nuestro país.
              </p>
              <button className="btn btn-outline-dark btn-sm fw-semibold">Reservar Experiencia</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Eventos;