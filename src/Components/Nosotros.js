import React from 'react';

function Nosotros() {
  return (
    <div style={{ backgroundColor: '#0B1D3A', minHeight: '90vh' }} className="pb-5 text-white">
      {/* Cabecera Principal */}
      <div className="container text-center py-5">
        <h1 className="fw-bold display-5 mb-2">Nosotros</h1>
        <p className="text-warning fs-5">Conoce la historia, el equipo y la pasión detrás de Kauza.</p>
      </div>

      <div className="container pb-5">
        {/* Sección de Historia y Misión */}
        <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5 bg-white text-dark mb-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="text-uppercase text-warning fw-bold small tracking-wide">Nuestra Historia</span>
              <h2 className="fw-bold display-6 mb-4 text-dark">Pasión por la Raíz Peruana</h2>
              <p className="text-muted fs-5 mb-3" style={{ lineHeight: '1.8' }}>
                Kauza nació en el corazón de Lima como un tributo a la biodiversidad peruana. El término "Kauza" rinde homenaje al vocablo quechua que significa "vida", "sustento" y "sostenibilidad".
              </p>
              <p className="text-muted fs-5 mb-0" style={{ lineHeight: '1.8' }}>
                Trabajamos de la mano con agricultores locales de los Andes y pescadores artesanales del litoral para garantizar la máxima frescura en cada ingrediente.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <img 
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80" 
                    alt="Ambiente Kauza" 
                    className="img-fluid rounded-4 shadow-sm w-100 object-fit-cover" 
                    style={{ height: '220px' }}
                  />
                </div>
                <div className="col-6">
                  <img 
                    src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=600&q=80" 
                    alt="Platillo Peruano" 
                    className="img-fluid rounded-4 shadow-sm w-100 object-fit-cover" 
                    style={{ height: '220px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Pilares / Valores */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white text-dark text-center">
              <div className="fs-1 mb-3">🌿</div>
              <h4 className="fw-bold mb-3">Sostenibilidad</h4>
              <p className="text-muted mb-0">Insumos 100% locales cultivados bajo prácticas de comercio justo y respeto por el medio ambiente.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white text-dark text-center">
              <div className="fs-1 mb-3">🔥</div>
              <h4 className="fw-bold mb-3">Tradición & Fusión</h4>
              <p className="text-muted mb-0">Rescatamos recetas ancestrales peruanas combinándolas con técnicas culinarias contemporáneas.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white text-dark text-center">
              <div className="fs-1 mb-3">⭐</div>
              <h4 className="fw-bold mb-3">Experiencia Única</h4>
              <p className="text-muted mb-0">Un ambiente cálido, música criolla y una atención de primera para hacerte sentir en casa.</p>
            </div>
          </div>
        </div>

        {/* Sección del Equipo */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-white mb-2">Nuestro Equipo</h2>
          <p className="text-warning fs-5">Los maestros detrás de cada sabor y experiencia.</p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 text-center bg-white text-dark h-100">
              <div className="mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=300&q=80" 
                  alt="Renzo Acuña" 
                  className="rounded-circle shadow-sm object-fit-cover mx-auto" 
                  style={{ width: '100px', height: '100px' }}
                />
              </div>
              <h5 className="fw-bold mb-1">Renzo Acuña</h5>
              <p className="text-warning fw-semibold small mb-2">Chef Ejecutivo</p>
              <p className="text-muted small mb-0">Apasionado por la alta cocina peruana y la revalorización de los productos nativos de la costa y los andes.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 text-center bg-white text-dark h-100">
              <div className="mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80" 
                  alt="Valeria Mendoza" 
                  className="rounded-circle shadow-sm object-fit-cover mx-auto" 
                  style={{ width: '100px', height: '100px' }}
                />
              </div>
              <h5 className="fw-bold mb-1">Valeria Mendoza</h5>
              <p className="text-warning fw-semibold small mb-2">Sommelier & Coctelera</p>
              <p className="text-muted small mb-0">Especialista en maridajes de pisco y vinos peruanos, creando experiencias sensoriales únicas en barra.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 text-center bg-white text-dark h-100">
              <div className="mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" 
                  alt="Carlos Delgado" 
                  className="rounded-circle shadow-sm object-fit-cover mx-auto" 
                  style={{ width: '100px', height: '100px' }}
                />
              </div>
              <h5 className="fw-bold mb-1">Carlos Delgado</h5>
              <p className="text-warning fw-semibold small mb-2">Maestro Cebichero</p>
              <p className="text-muted small mb-0">Más de 15 años perfeccionando el arte del corte perfecto y la leche de tigre tradicional.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Nosotros;