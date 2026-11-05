import React, { useState } from 'react';

function Intranet() {
  const [pestanaActiva, setPestanaActiva] = useState('resumen');

  // 1. Estado del Restaurante y Horarios
  const [restauranteAbierto, setRestauranteAbierto] = useState(true);
  const [horarios, setHorarios] = useState({
    almuerzo: '12:00 PM - 04:00 PM',
    cena: '07:00 PM - 11:00 PM'
  });

  // 2. Estado de Mesas (10 Mesas)
  const [mesas, setMesas] = useState([
    { id: 1, numero: 'Mesa 01', zona: 'Terraza', capacidad: 2, estado: 'libre' },
    { id: 2, numero: 'Mesa 02', zona: 'Terraza', capacidad: 2, estado: 'ocupada' },
    { id: 3, numero: 'Mesa 03', zona: 'Terraza', capacidad: 4, estado: 'reservada' },
    { id: 4, numero: 'Mesa 04', zona: 'Salon Principal', capacidad: 4, estado: 'ocupada' },
    { id: 5, numero: 'Mesa 05', zona: 'Salon Principal', capacidad: 6, estado: 'libre' },
    { id: 6, numero: 'Mesa 06', zona: 'Salon Principal', capacidad: 4, estado: 'ocupada' },
    { id: 7, numero: 'Mesa 07', zona: 'VIP / Privado', capacidad: 8, estado: 'reservada' },
    { id: 8, numero: 'Mesa 08', zona: 'VIP / Privado', capacidad: 10, estado: 'libre' },
    { id: 9, numero: 'Mesa 09', zona: 'Barra', capacidad: 2, estado: 'ocupada' },
    { id: 10, numero: 'Mesa 10', zona: 'Barra', capacidad: 2, estado: 'libre' },
  ]);

  // 3. Lista de Reservas Sincronizada con localStorage
  const [reservas, setReservas] = useState(() => {
    const guardadas = localStorage.getItem('kauza_reservas');
    if (guardadas) {
      return JSON.parse(guardadas);
    }
    return [
      { id: 101, cliente: 'Carlos Mendoza', fecha: '2026-11-03', hora: '13:30', personas: 4, mesa: 'Mesa 03', estado: 'Confirmada' },
      { id: 102, cliente: 'Ana María Torres', fecha: '2026-11-03', hora: '20:00', personas: 8, mesa: 'Mesa 07', estado: 'Pendiente' },
      { id: 103, cliente: 'Jorge Benavides', fecha: '2026-11-04', hora: '14:00', personas: 2, mesa: 'Por Asignar', estado: 'Pendiente' }
    ];
  });

  const confirmarReserva = (id) => {
    const actualizadas = reservas.map(item => item.id === id ? { ...item, estado: 'Confirmada' } : item);
    setReservas(actualizadas);
    localStorage.setItem('kauza_reservas', JSON.stringify(actualizadas));
  };

  const eliminarReserva = (id) => {
    const actualizadas = reservas.filter(item => item.id !== id);
    setReservas(actualizadas);
    localStorage.setItem('kauza_reservas', JSON.stringify(actualizadas));
  };

  // 4. Comandas Activas (Cocina / KDS)
  const [comandas, setComandas] = useState([
    { id: 501, mesa: 'Mesa 04', mozo: 'Gianfranco', items: '2x Ceviche Ancestral, 1x Lomo Saltado', estado: 'En Preparación' },
    { id: 502, mesa: 'Mesa 02', mozo: 'Lucía', items: '1x Trilogía de Causas, 2x Pisco Sour', estado: 'Listo para Servir' },
    { id: 503, mesa: 'Mesa 06', mozo: 'Gianfranco', items: '1x Seca de Res, 1x Chicha Morada', estado: 'Entregado' }
  ]);

  // 5. Platos de la Carta y Formularios
  const [platos, setPlatos] = useState([
    { id: 1, nombre: 'Ceviche Kauza Ancestral', cat: 'Entradas', precio: 48.00 },
    { id: 2, nombre: 'Trilogía de Causas', cat: 'Entradas', precio: 42.00 },
    { id: 3, nombre: 'Papa a la Huancaína Cremosa', cat: 'Entradas', precio: 28.00 },
    { id: 4, nombre: 'Anticuchos de Corazón', cat: 'Entradas', precio: 36.00 },
    { id: 5, nombre: 'Lomo Saltado al Wok', cat: 'Fondos', precio: 58.00 },
    { id: 6, nombre: 'Seca de Res con Taco Taco', cat: 'Fondos', precio: 54.00 }
  ]);

  const [nuevoPlato, setNuevoPlato] = useState({ nombre: '', cat: 'Entradas', precio: '' });
  const [platoEditando, setPlatoEditando] = useState(null);
  const [mostrarFormularioCarta, setMostrarFormularioCarta] = useState(false);

  // Funciones de Lógica
  const cambiarEstadoMesa = (id, nuevoEstado) => {
    setMesas(mesas.map(m => m.id === id ? { ...m, estado: nuevoEstado } : m));
  };

  const agregarOEditarPlato = (e) => {
    e.preventDefault();
    if (!nuevoPlato.nombre || !nuevoPlato.precio) return alert('Por favor completa todos los campos.');

    if (platoEditando) {
      setPlatos(platos.map(p => p.id === platoEditando ? { ...p, ...nuevoPlato, precio: parseFloat(nuevoPlato.precio) } : p));
      setPlatoEditando(null);
    } else {
      const nuevoId = platos.length > 0 ? Math.max(...platos.map(p => p.id)) + 1 : 1;
      setPlatos([...platos, { id: nuevoId, nombre: nuevoPlato.nombre, cat: nuevoPlato.cat, precio: parseFloat(nuevoPlato.precio) }]);
    }

    setNuevoPlato({ nombre: '', cat: 'Entradas', precio: '' });
    setMostrarFormularioCarta(false);
  };

  const prepararEdicion = (plato) => {
    setNuevoPlato({ nombre: plato.nombre, cat: plato.cat, precio: plato.precio });
    setPlatoEditando(plato.id);
    setMostrarFormularioCarta(true);
  };

  const eliminarPlato = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este platillo de la carta?')) {
      setPlatos(platos.filter(p => p.id !== id));
    }
  };

  return (
    <div style={{ backgroundColor: '#F4F6F9', minHeight: '100vh', width: '100%', overflowX: 'hidden' }} className="pb-5">
      {/* Header Superior Ejecutivo */}
      <div className="text-white py-4 px-5 shadow-sm w-100" style={{ backgroundColor: '#0B1D3A' }}>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-100">
          <div>
            <h2 className="fw-bold mb-1 fs-3">Panel de Control Operativo</h2>
            <p className="text-warning mb-0 fs-6">Sistema de Gestión Integral - Restaurante & Salón Kauza</p>
          </div>
          <div className="mt-3 mt-md-0 d-flex align-items-center gap-3">
            <span className={`badge px-4 py-2 fs-5 rounded-pill ${restauranteAbierto ? 'bg-success' : 'bg-danger'}`}>
              {restauranteAbierto ? '● RESTAURANTE ABIERTO' : '○ RESTAURANTE CERRADO'}
            </span>
            <button 
              onClick={() => setRestauranteAbierto(!restauranteAbierto)} 
              className="btn btn-sm btn-outline-light rounded-pill px-4 py-2 fs-6 fw-semibold"
            >
              Cambiar Estado
            </button>
          </div>
        </div>
      </div>

      {/* Layout de Dos Columnas Full Width */}
      <div className="container-fluid px-4 py-4 w-100">
        <div className="row g-4 w-100 m-0">
          
          {/* SIDEBAR IZQUIERDO */}
          <div className="col-lg-2 col-xl-2 px-2">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white sticky-top w-100" style={{ top: '20px' }}>
              <span className="text-uppercase text-muted fw-bold small px-2 mb-3 d-block">Menú Operativo</span>
              
              <div className="nav flex-column nav-pills gap-2 w-100">
                {[
                  { id: 'resumen', label: 'Resumen General', icon: '📊' },
                  { id: 'mesas', label: 'Control de Mesas', icon: '🪑' },
                  { id: 'cocina', label: 'Cocina (KDS)', icon: '👨‍🍳' },
                  { id: 'reservas', label: 'Reservas', icon: '📅' },
                  { id: 'caja', label: 'Caja & Ventas', icon: '💵' },
                  { id: 'carta', label: 'Gestión de Carta', icon: '🍽️' },
                  { id: 'horarios', label: 'Horarios', icon: '⏰' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPestanaActiva(item.id)}
                    className={`btn text-start fw-semibold px-3 py-3 rounded-3 d-flex align-items-center gap-2 w-100 ${
                      pestanaActiva === item.id 
                        ? 'btn-warning text-dark shadow-sm fw-bold' 
                        : 'btn-light text-secondary bg-transparent border-0'
                    }`}
                    style={{ fontSize: '0.95rem' }}
                  >
                    <span className="fs-5">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              <hr className="my-4 text-muted opacity-25" />
              
              <div className="bg-light p-3 rounded-4 text-center w-100">
                <span className="text-muted d-block fw-bold small mb-1" style={{ fontSize: '0.75rem' }}>TURNO ACTUAL</span>
                <span className="badge bg-dark text-warning p-2 w-100 mb-1 fs-6">Almuerzo</span>
                <small className="text-muted d-block" style={{ fontSize: '0.8rem' }}>{horarios.almuerzo}</small>
              </div>
            </div>
          </div>

          {/* ÁREA DE CONTENIDO PRINCIPAL */}
          <div className="col-lg-10 col-xl-10 px-2">

            {/* 1. RESUMEN GENERAL */}
            {pestanaActiva === 'resumen' && (
              <div className="d-flex flex-column gap-4 w-100">
                <div className="d-flex justify-content-between align-items-center bg-white p-4 rounded-4 shadow-sm w-100">
                  <h4 className="fw-bold text-dark m-0 fs-4">📊 Métricas y Resumen del Día</h4>
                  <span className="text-muted fs-6">Actualización automática</span>
                </div>
                
                <div className="row g-4 w-100 m-0">
                  <div className="col-md-6 col-xl-3 px-2">
                    <div className="card border-0 shadow-sm p-4 rounded-4 bg-white h-100 border-start border-5 border-success">
                      <span className="text-muted small fw-bold fs-6">MESAS OCUPADAS</span>
                      <h2 className="fw-bold text-dark mt-2 mb-1 display-6">
                        {mesas.filter(m => m.estado === 'ocupada').length} / {mesas.length}
                      </h2>
                      <span className="text-success fw-semibold fs-6">
                        {Math.round((mesas.filter(m => m.estado === 'ocupada').length / mesas.length) * 100)}% de ocupación actual
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-3 px-2">
                    <div className="card border-0 shadow-sm p-4 rounded-4 bg-white h-100 border-start border-5 border-primary">
                      <span className="text-muted small fw-bold fs-6">COMANDAS ACTIVAS</span>
                      <h2 className="fw-bold text-primary mt-2 mb-1 display-6">{comandas.filter(c => c.estado !== 'Entregado').length} Pedidos</h2>
                      <span className="text-muted fs-6">En proceso en cocina</span>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-3 px-2">
                    <div className="card border-0 shadow-sm p-4 rounded-4 bg-white h-100 border-start border-5 border-warning">
                      <span className="text-muted small fw-bold fs-6">RESERVAS HOY</span>
                      <h2 className="fw-bold text-dark mt-2 mb-1 display-6">{reservas.length} Solicitudes</h2>
                      <span className="text-warning text-dark fw-semibold fs-6">
                        {reservas.filter(r => r.estado === 'Pendiente').length} pendientes de confirmar
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-3 px-2">
                    <div className="card border-0 shadow-sm p-4 rounded-4 bg-white h-100 border-start border-5 border-dark">
                      <span className="text-muted small fw-bold fs-6">VENTA TOTAL DEL DÍA</span>
                      <h2 className="fw-bold text-warning mt-2 mb-1 display-6">S/ 4,250</h2>
                      <span className="text-muted fs-6">Corte de caja en curso</span>
                    </div>
                  </div>
                </div>

                <div className="row g-4 w-100 m-0">
                  <div className="col-lg-6 px-2">
                    <div className="card border-0 shadow-sm p-4 rounded-4 bg-white h-100">
                      <h5 className="fw-bold mb-4 fs-5">🏆 Platos Más Vendidos</h5>
                      <div className="d-flex flex-column gap-3">
                        <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded-3">
                          <span className="fw-semibold fs-5">1. Ceviche Kauza Ancestral</span>
                          <span className="badge bg-warning text-dark fs-6 px-3 py-2">28 porciones</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded-3">
                          <span className="fw-semibold fs-5">2. Lomo Saltado al Wok</span>
                          <span className="badge bg-secondary fs-6 px-3 py-2">22 porciones</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded-3">
                          <span className="fw-semibold fs-5">3. Trilogía de Causas</span>
                          <span className="badge bg-secondary fs-6 px-3 py-2">15 porciones</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-6 px-2">
                    <div className="card border-0 shadow-sm p-4 rounded-4 bg-white h-100">
                      <h5 className="fw-bold mb-4 fs-5">🚨 Alertas del Sistema</h5>
                      <div className="d-flex flex-column gap-3">
                        <div className="alert alert-warning mb-0 p-4 rounded-3 fs-5 d-flex align-items-center gap-3">
                          <span className="fs-3">⚠️</span>
                          <div><strong>Mesa VIP 07:</strong> Solicitud de reserva pendiente.</div>
                        </div>
                        <div className="alert alert-success mb-0 p-4 rounded-3 fs-5 d-flex align-items-center gap-3">
                          <span className="fs-3">✅</span>
                          <div><strong>Control de Calidad:</strong> Inventario del día ok.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. CONTROL DE MESAS (INTERACTIVO) */}
            {pestanaActiva === 'mesas' && (
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white w-100">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="fw-bold m-0 fs-4">🪑 Mapa y Estado de Mesas en Salón</h4>
                  <div className="d-flex gap-2">
                    <span className="badge bg-success px-3 py-2 fs-6">Libre</span>
                    <span className="badge bg-danger px-3 py-2 fs-6">Ocupada</span>
                    <span className="badge bg-warning text-dark px-3 py-2 fs-6">Reservada</span>
                  </div>
                </div>

                <div className="row g-4">
                  {mesas.map((m) => (
                    <div className="col-md-6 col-xl-4" key={m.id}>
                      <div className={`card border-2 shadow-sm rounded-4 p-4 text-center h-100 ${
                        m.estado === 'libre' ? 'border-success bg-light' :
                        m.estado === 'ocupada' ? 'border-danger bg-light' : 'border-warning bg-light'
                      }`}>
                        <h4 className="fw-bold text-dark mb-2">{m.numero}</h4>
                        <p className="text-muted fs-6 mb-3">{m.zona} • Capacidad: {m.capacidad} pers.</p>
                        <span className={`badge text-uppercase mb-4 py-2 fs-5 ${
                          m.estado === 'libre' ? 'bg-success' :
                          m.estado === 'ocupada' ? 'bg-danger' : 'bg-warning text-dark'
                        }`}>
                          {m.estado}
                        </span>

                        <div className="btn-group w-100 shadow-sm mt-auto">
                          <button onClick={() => cambiarEstadoMesa(m.id, 'libre')} className={`btn ${m.estado === 'libre' ? 'btn-success' : 'btn-outline-success'} py-2 fw-semibold`}>Libre</button>
                          <button onClick={() => cambiarEstadoMesa(m.id, 'ocupada')} className={`btn ${m.estado === 'ocupada' ? 'btn-danger' : 'btn-outline-danger'} py-2 fw-semibold`}>Ocupar</button>
                          <button onClick={() => cambiarEstadoMesa(m.id, 'reservada')} className={`btn ${m.estado === 'reservada' ? 'btn-warning text-dark' : 'btn-outline-warning text-dark'} py-2 fw-semibold`}>Reservar</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. COCINA (KDS INTERACTIVO) */}
            {pestanaActiva === 'cocina' && (
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white w-100">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="fw-bold m-0 fs-4">👨‍🍳 Control de Comandas en Cocina (KDS)</h4>
                  <span className="badge bg-primary px-3 py-2 fs-6">Tiempo real</span>
                </div>
                <div className="row g-4">
                  {comandas.map(c => (
                    <div className="col-xl-6" key={c.id}>
                      <div className="card border shadow-sm rounded-4 p-4 h-100 bg-light">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h4 className="fw-bold text-dark m-0">{c.mesa}</h4>
                          <span className={`badge px-3 py-2 fs-6 ${
                            c.estado === 'En Preparación' ? 'bg-warning text-dark' :
                            c.estado === 'Listo para Servir' ? 'bg-success' : 'bg-secondary'
                          }`}>
                            {c.estado}
                          </span>
                        </div>
                        <p className="text-muted fs-6 mb-3">Mozo asignado: <strong>{c.mozo}</strong></p>
                        <div className="bg-white p-4 rounded-3 border mb-4">
                          <span className="text-muted d-block mb-1 fs-6">Detalle del Pedido:</span>
                          <strong className="text-dark fs-4">{c.items}</strong>
                        </div>
                        <div className="d-flex gap-3 mt-auto">
                          <button 
                            onClick={() => setComandas(comandas.map(item => item.id === c.id ? {...item, estado: 'Listo para Servir'} : item))}
                            className="btn btn-outline-success w-50 py-3 fw-bold fs-5"
                          >
                            ✓ Listo para Servir
                          </button>
                          <button 
                            onClick={() => setComandas(comandas.map(item => item.id === c.id ? {...item, estado: 'Entregado'} : item))}
                            className="btn btn-outline-dark w-50 py-3 fw-bold fs-5"
                          >
                            ➔ Entregar Pedido
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. RESERVAS (GESTIÓN DINÁMICA) */}
            {pestanaActiva === 'reservas' && (
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white w-100">
                <h4 className="fw-bold mb-4 fs-4">📅 Solicitudes de Reserva</h4>
                <div className="table-responsive">
                  <table className="table align-middle table-hover fs-5">
                    <thead className="table-dark">
                      <tr>
                        <th className="py-3">Cliente</th>
                        <th className="py-3">Fecha / Hora</th>
                        <th className="py-3">Personas</th>
                        <th className="py-3">Mesa Asignada</th>
                        <th className="py-3">Estado</th>
                        <th className="py-3">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reservas.map((r) => (
                        <tr key={r.id}>
                          <td className="fw-semibold py-4">{r.cliente}</td>
                          <td>{r.fecha} - {r.hora}</td>
                          <td>{r.personas} personas</td>
                          <td><span className="badge bg-secondary px-3 py-2">{r.mesa}</span></td>
                          <td>
                            <span className={`badge px-3 py-2 fs-6 ${r.estado === 'Confirmada' ? 'bg-success' : 'bg-warning text-dark'}`}>
                              {r.estado}
                            </span>
                          </td>
                          <td>
                            <button 
                              onClick={() => confirmarReserva(r.id)}
                              className="btn btn-success px-3 py-2 me-2 fw-semibold fs-6"
                            >
                              Confirmar
                            </button>
                            <button 
                              onClick={() => eliminarReserva(r.id)}
                              className="btn btn-outline-danger px-3 py-2 fw-semibold fs-6"
                            >
                              Cancelar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 5. CAJA Y VENTAS */}
            {pestanaActiva === 'caja' && (
              <div className="card border-0 shadow-sm rounded-4 p-5 bg-white w-100">
                <h4 className="fw-bold mb-4 fs-3">💵 Resumen de Caja del Día</h4>
                <ul className="list-group list-group-flush mb-4 fs-4">
                  <li className="list-group-item d-flex justify-content-between py-3"><span>Efectivo en Caja:</span><strong>S/ 1,850.00</strong></li>
                  <li className="list-group-item d-flex justify-content-between py-3"><span>Tarjetas (POS):</span><strong>S/ 1,600.00</strong></li>
                  <li className="list-group-item d-flex justify-content-between py-3"><span>Yape / Plin:</span><strong>S/ 800.00</strong></li>
                  <li className="list-group-item d-flex justify-content-between py-4 bg-light rounded-3 mt-3">
                    <span className="fw-bold">Total Recaudado:</span>
                    <strong className="text-warning display-6">S/ 4,250.00</strong>
                  </li>
                </ul>
                <button onClick={() => alert('¡Cierre de caja generado con éxito!')} className="btn btn-warning fw-bold text-dark py-3 fs-4 shadow-sm w-100">
                  Realizar Corte / Cierre de Caja
                </button>
              </div>
            )}

            {/* 6. GESTIÓN DE CARTA (CRUD COMPLETO) */}
            {pestanaActiva === 'carta' && (
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white w-100">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="fw-bold m-0 fs-4">🍽️ Gestión de Platillos de la Carta</h4>
                  <button 
                    onClick={() => { setPlatoEditando(null); setNuevoPlato({ nombre: '', cat: 'Entradas', precio: '' }); setMostrarFormularioCarta(!mostrarFormularioCarta); }} 
                    className="btn btn-warning fw-bold px-4 py-3 fs-5"
                  >
                    {mostrarFormularioCarta ? 'Cerrar Formulario' : '+ Agregar Platillo'}
                  </button>
                </div>

                {/* Formulario de Inserción / Edición */}
                {mostrarFormularioCarta && (
                  <form onSubmit={agregarOEditarPlato} className="bg-light p-4 rounded-4 mb-4 border">
                    <h5 className="fw-bold mb-3">{platoEditando ? 'Editar Platillo' : 'Nuevo Platillo'}</h5>
                    <div className="row g-3">
                      <div className="col-md-5">
                        <label className="form-label fw-semibold">Nombre del Plato</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="Ej: Lomo Saltado"
                          value={nuevoPlato.nombre}
                          onChange={(e) => setNuevoPlato({ ...nuevoPlato, nombre: e.target.value })}
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-semibold">Categoría</label>
                        <select 
                          className="form-select"
                          value={nuevoPlato.cat}
                          onChange={(e) => setNuevoPlato({ ...nuevoPlato, cat: e.target.value })}
                        >
                          <option value="Entradas">Entradas</option>
                          <option value="Fondos">Fondos</option>
                          <option value="Bebidas">Bebidas</option>
                          <option value="Postres">Postres</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label fw-semibold">Precio (S/)</label>
                        <input 
                          type="number" 
                          step="0.01" 
                          className="form-control" 
                          placeholder="0.00"
                          value={nuevoPlato.precio}
                          onChange={(e) => setNuevoPlato({ ...nuevoPlato, precio: e.target.value })}
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-dark fw-bold px-4 py-2 mt-3">
                      {platoEditando ? 'Guardar Cambios' : 'Guardar Platillo'}
                    </button>
                  </form>
                )}

                <div className="table-responsive">
                  <table className="table align-middle table-hover fs-5">
                    <thead className="table-light">
                      <tr>
                        <th className="py-3">Plato</th>
                        <th className="py-3">Categoría</th>
                        <th className="py-3">Precio</th>
                        <th className="py-3">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {platos.map((p) => (
                        <tr key={p.id}>
                          <td className="fw-semibold py-4 fs-4">{p.nombre}</td>
                          <td><span className="badge bg-light text-dark border px-3 py-2 fs-6">{p.cat}</span></td>
                          <td className="fw-bold text-warning fs-4">S/ {p.precio.toFixed(2)}</td>
                          <td>
                            <button onClick={() => prepararEdicion(p)} className="btn btn-outline-primary px-3 py-2 me-2 fw-semibold fs-6">Editar</button>
                            <button onClick={() => eliminarPlato(p.id)} className="btn btn-outline-danger px-3 py-2 fw-semibold fs-6">Eliminar</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 7. HORARIOS */}
            {pestanaActiva === 'horarios' && (
              <div className="row justify-content-center w-100 m-0">
                <div className="col-xl-10 px-0">
                  <div className="card border-0 shadow-sm rounded-4 p-5 bg-white w-100">
                    <h4 className="fw-bold mb-4 fs-3">⏰ Configuración de Horarios de Atención</h4>
                    
                    <div className="mb-4">
                      <label className="form-label fw-semibold fs-4">Turno Almuerzo</label>
                      <input 
                        type="text" 
                        className="form-control form-control-lg p-3 fs-4" 
                        value={horarios.almuerzo}
                        onChange={(e) => setHorarios({ ...horarios, almuerzo: e.target.value })}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold fs-4">Turno Cena</label>
                      <input 
                        type="text" 
                        className="form-control form-control-lg p-3 fs-4" 
                        value={horarios.cena}
                        onChange={(e) => setHorarios({ ...horarios, cena: e.target.value })}
                      />
                    </div>

                    <button onClick={() => alert('¡Horarios actualizados correctamente!')} className="btn btn-warning fw-bold text-dark w-100 py-3 fs-4 shadow-sm mt-3">
                      Guardar Horarios
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}

export default Intranet;