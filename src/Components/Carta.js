import React, { useState } from 'react';

function Carta() {
  const [categoria, setCategoria] = useState('todos');

  const platos = [
    // Entradas y Causas (Actualizadas con tus imágenes específicas)
    { 
      id: 1, 
      nombre: 'Ceviche Kauza Ancestral', 
      cat: 'entradas', 
      precio: 'S/ 48.00', 
      desc: 'Pesca del día en leche de tigre de ají mochero, choclo y camote glaseado.', 
      img: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 2, 
      nombre: 'Trilogía de Causas', 
      cat: 'entradas', 
      precio: 'S/ 42.00', 
      desc: 'Papa amarilla batida con ají amarillo, pulpa de cangrejo, pollo y pulpo al olivo.', 
      img: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/2c/32/5b/trilogia-de-causas.jpg' 
    },
    { 
      id: 3, 
      nombre: 'Papa a la Huancaína Cremosa', 
      cat: 'entradas', 
      precio: 'S/ 28.00', 
      desc: 'Tradicional crema de ají amarillo y queso fresco sobre papas nativas con huevo y aceituna.', 
      img: 'https://buenazo.cronosmedia.glr.pe/original/2020/09/25/5f6eaf8e2810e95b5c5da50c.jpg' 
    },
    { 
      id: 4, 
      nombre: 'Anticuchos de Corazón', 
      cat: 'entradas', 
      precio: 'S/ 36.00', 
      desc: 'Brochetas marinadas en ají panca y chicha de jora, acompañadas de choclo y papas doradas.', 
      img: 'https://www.cocinista.es/download/bancorecursos/recetas/receta-anticuchos-peruanos.jpg' 
    },

    // Platos de Fondo
    { 
      id: 5, 
      nombre: 'Lomo Saltado al Wok', 
      cat: 'fondos', 
      precio: 'S/ 58.00', 
      desc: 'Jugosos cortes de lomo fino salteados con cebolla, tomate, papas amarillas y arroz.', 
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEMDozjRG2CuA3f8ie-4R6RFYYxgx0Sxvidd77qRyMLHLkAjXW7irTZ4&s=10' 
    },
    { 
      id: 6, 
      nombre: 'Seca de Res con Tacu Tacu', 
      cat: 'fondos', 
      precio: 'S/ 54.00', 
      desc: 'Asado de tira en secado de cilantro con jugoso taco taco de frejoles y salsa criolla.', 
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZJXdE8IdvBbi6ylkZDlt4sPaL0TZH-H4vgbaU3KMqIC8028r6BEuFDeg&s=10' 
    },
    { 
      id: 7, 
      nombre: 'Arroz con Pato de la Casa', 
      cat: 'fondos', 
      precio: 'S/ 52.00', 
      desc: 'Confit de pato tierno sobre arroz verde al culantro, chicha de jora y zarza criolla.', 
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPnRrbpAyWB1P0cF7b64dz3xIfElsyKu-vQ3b6lqUyrCvvdphr7-THvg&s=10' 
    },
    { 
      id: 8, 
      nombre: 'Ají de Gallina Cremoso', 
      cat: 'fondos', 
      precio: 'S/ 45.00', 
      desc: 'Deshilachado de gallina en crema de ají amarillo, nueces, queso parmesano y aceituna.', 
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3QR96ingWzadMOA8pc3C2P6f6TJrYZgJ54lFjIC0q7OMVGA4fIswW-Fk&s=10' 
    },

    // Postres
    { 
      id: 9, 
      nombre: 'Suspiro a la Limeña', 
      cat: 'postres', 
      precio: 'S/ 22.00', 
      desc: 'Manjar blanco tradicional coronado con merengue italiano al oporto y canela.', 
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiCCXuKwW8z9i-b_niivUbnMEVoeuDRi0vuXUS-1AdDRiT7Q8iXJRIfI&s=10' 
    },
    { 
      id: 10, 
      nombre: 'Picarones de la Abuela', 
      cat: 'postres', 
      precio: 'S/ 20.00', 
      desc: 'Aros crujientes de zapallo y camote bañados en miel pura de chancaca y ajonjolí.', 
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_L6P5v-QYzeArleVPRVElNVMnwkA0k8JuHDJ-7MjsnFotpZ21tG7HF8U&s=10' 
    },

    // Bebidas y Cócteles
    { 
      id: 11, 
      nombre: 'Pisco Sour Bicentenario', 
      cat: 'bebidas', 
      precio: 'S/ 32.00', 
      desc: 'Pisco quebranta acholado, jugo de limón recién exprimido, jarabe y clara de huevo.', 
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCkn0PxoJkl_YWmWJ55MJ9RmG2D6_c_qp8VVcsVs9y0NUYqim3l__yvdMe&s=10' 
    },
    { 
      id: 12, 
      nombre: 'Chicha Morada Artesanal', 
      cat: 'bebidas', 
      precio: 'S/ 16.00', 
      desc: 'Bebida de maíz morado con frutas de estación, canela, clavo y toque de limón.', 
      img: 'https://origin.cronosmedia.glr.pe/large/2023/07/24/lg_64bebe2ae1753238157f7157.jpg' 
    }
  ];

  const filtrados = categoria === 'todos' ? platos : platos.filter(p => p.cat === categoria);

  return (
    <div style={{ backgroundColor: '#FAFAFA' }}>
      {/* Banner Superior */}
      <div className="py-5 text-white text-center" style={{ backgroundColor: '#0B1D3A' }}>
        <div className="container">
          <h1 className="display-5 fw-bold">Nuestra Carta</h1>
          <p className="lead text-light mb-0">Sabores auténticos del Perú elaborados con pasión, tradición e ingredientes seleccionados.</p>
        </div>
      </div>

      <div className="container py-5">
        {/* Filtros de Categorías */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          {[
            { id: 'todos', label: 'Todos' },
            { id: 'entradas', label: 'Entradas y Causas' },
            { id: 'fondos', label: 'Platos de Fondo' },
            { id: 'postres', label: 'Postres' },
            { id: 'bebidas', label: 'Bebidas y Cócteles' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setCategoria(f.id)}
              className={`btn px-4 py-2 rounded-pill fw-semibold ${categoria === f.id ? 'btn-warning text-dark' : 'btn-outline-dark'}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grilla de Platos */}
        <div className="row g-4">
          {filtrados.map(plato => (
            <div className="col-md-6" key={plato.id}>
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100 bg-white">
                <div className="row g-0 align-items-center h-100">
                  <div className="col-4 h-100">
                    <img 
                      src={plato.img} 
                      alt={plato.nombre} 
                      className="img-fluid h-100 w-100"
                      style={{ objectFit: 'cover', minHeight: '140px' }}
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="fw-bold mb-0 text-dark">{plato.nombre}</h6>
                        <span className="fw-bold text-warning">{plato.precio}</span>
                      </div>
                      <p className="text-muted small mb-0">{plato.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carta;