import React from 'react';

function Portada({ cambiarVista }) {
  return (
    <div style={{ backgroundColor: '#FAFAFA' }}>
      {/* HERO BANNER */}
      <section className="py-5 border-bottom" style={{ backgroundColor: '#1A1817', color: '#FFF' }}>
        <div className="container">
          <div className="row align-items-center py-4">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <span className="text-uppercase fw-bold small text-warning tracking-widest">ALTA COCINA PERUANA</span>
              <h1 className="display-4 fw-bold mt-2 mb-3">El Respeto por el Origen y el Sabor</h1>
              <p className="text-light lead fs-6 mb-4" style={{ textAlign: 'justify' }}>
                Revalorizamos nuestros insumos ancestrales como la papa amarilla, el ají amarillo y el pescado fresco a través de técnicas contemporáneas y presentaciones de autor.
              </p>
              <div className="d-flex gap-3">
                <button onClick={() => cambiarVista('carta')} className="btn btn-warning px-4 py-2 fw-bold text-uppercase">
                  Explorar Menú
                </button>
                <button onClick={() => cambiarVista('reserva')} className="btn btn-outline-light px-4 py-2 fw-bold text-uppercase">
                  Reservar Mesa
                </button>
              </div>
            </div>

            {/* FOTOS DE ALTA CALIDAD */}
            <div className="col-lg-6">
              <div className="row g-2">
                <div className="col-8">
                  <img 
                    src="https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80" 
                    alt="Ceviche Peruano Gourmet" 
                    className="img-fluid rounded-3 shadow"
                    style={{ height: '260px', width: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-4 d-flex flex-column gap-2">
                  <img 
                    src="https://media-cdn.tripadvisor.com/media/photo-s/0d/a3/f0/d6/trilogia-de-causas.jpg" 
                    alt="Causa Rellena" 
                    className="img-fluid rounded-3 shadow"
                    style={{ height: '125px', width: '100%', objectFit: 'cover' }}
                  />
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEMDozjRG2CuA3f8ie-4R6RFYYxgx0Sxvidd77qRyMLHLkAjXW7irTZ4&s=10" 
                    alt="Lomo Saltado" 
                    className="img-fluid rounded-3 shadow"
                    style={{ height: '125px', width: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="py-5">
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark display-6">Especialidades del Chef</h2>
            <p className="text-muted">Descubre nuestros platillos emblemáticos preparados con insumos 100% autóctonos.</p>
          </div>

          <div className="row g-4">
            {/* Ceviche */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <div style={{ height: '210px', overflow: 'hidden' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=600&q=80" 
                    alt="Ceviche Clásico" 
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="fw-bold text-dark mb-0">Ceviche Clásico</h5>
                      <span className="badge bg-warning text-dark fs-6">S/ 48.00</span>
                    </div>
                    <p className="text-muted small">Pesca del día en leche de tigre al limón, camote glaseado y choclo desgranado.</p>
                  </div>
                  <button onClick={() => cambiarVista('carta')} className="btn btn-sm btn-link text-warning p-0 fw-bold text-decoration-none text-start mt-2">Ver en Carta →</button>
                </div>
              </div>
            </div>

            {/* Trilogía de Causas */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <div style={{ height: '210px', overflow: 'hidden' }}>
                  <img 
                    src="https://media-cdn.tripadvisor.com/media/photo-s/0d/a3/f0/d6/trilogia-de-causas.jpg" 
                    alt="Trilogía de Causas" 
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="fw-bold text-dark mb-0">Trilogía de Causas</h5>
                      <span className="badge bg-warning text-dark fs-6">S/ 42.00</span>
                    </div>
                    <p className="text-muted small">Papa amarilla batida con ají amarillo, pulpa de cangrejo, pollo y pulpo al olivo.</p>
                  </div>
                  <button onClick={() => cambiarVista('carta')} className="btn btn-sm btn-link text-warning p-0 fw-bold text-decoration-none text-start mt-2">Ver en Carta →</button>
                </div>
              </div>
            </div>

            {/* Lomo Saltado al Wok (Misma imagen de la carta) */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <div style={{ height: '210px', overflow: 'hidden' }}>
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEMDozjRG2CuA3f8ie-4R6RFYYxgx0Sxvidd77qRyMLHLkAjXW7irTZ4&s=10" 
                    alt="Lomo Saltado al Wok" 
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="fw-bold text-dark mb-0">Lomo Saltado al Wok</h5>
                      <span className="badge bg-warning text-dark fs-6">S/ 58.00</span>
                    </div>
                    <p className="text-muted small">Jugosos cortes de lomo salteados con cebolla, tomate, papas amarillas y arroz con choclo.</p>
                  </div>
                  <button onClick={() => cambiarVista('carta')} className="btn btn-sm btn-link text-warning p-0 fw-bold text-decoration-none text-start mt-2">Ver en Carta →</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Portada;