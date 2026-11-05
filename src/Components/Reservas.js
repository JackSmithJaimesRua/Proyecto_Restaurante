import React, { useState } from 'react';

function Reservas() {
  const [paso, setPaso] = useState(1);

  const [formData, setFormData] = useState({
    cliente: '',
    email: '',
    telefono: '',
    personas: 2,
    fecha: '',
    hora: '13:00',
    mesaSeleccionada: '',
    // Datos de pago (Simulados/UI)
    numeroTarjeta: '',
    vencimientoMes: '',
    vencimientoAnio: '',
    nombreTarjeta: '',
    cvv: ''
  });

  const [reservaExitosa, setReservaExitosa] = useState(false);

  // Listado oficial de mesas del restaurante
  const todasLasMesas = [
    { id: 1, numero: 'Mesa 01', zona: 'Terraza', capacidad: 2 },
    { id: 2, numero: 'Mesa 02', zona: 'Terraza', capacidad: 2 },
    { id: 3, numero: 'Mesa 03', zona: 'Terraza', capacidad: 4 },
    { id: 4, numero: 'Mesa 04', zona: 'Salon Principal', capacidad: 4 },
    { id: 5, numero: 'Mesa 05', zona: 'Salon Principal', capacidad: 6 },
    { id: 6, numero: 'Mesa 06', zona: 'Salon Principal', capacidad: 4 },
    { id: 7, numero: 'Mesa 07', zona: 'VIP / Privado', capacidad: 8 },
    { id: 8, numero: 'Mesa 08', zona: 'VIP / Privado', capacidad: 10 },
    { id: 9, numero: 'Mesa 09', zona: 'Barra', capacidad: 2 },
    { id: 10, numero: 'Mesa 10', zona: 'Barra', capacidad: 2 }
  ];

  // Cálculo del monto de garantía
  const montoPorPersona = 20; // S/. 20 de garantía por persona
  const subtotal = (parseInt(formData.personas) || 1) * montoPorPersona;
  const tarifaServicio = 5;
  const montoTotal = subtotal + tarifaServicio;

  // Filtrar mesas según capacidad
  const capacidadSeleccionada = parseInt(formData.personas) || 1;
  const mesasFiltradas = todasLasMesas.filter(m => m.capacidad >= capacidadSeleccionada);

  const handleIrAlPaso2 = (e) => {
    e.preventDefault();
    if (!formData.cliente || !formData.fecha || !formData.telefono) {
      alert('Por favor completa todos los campos del Paso 1.');
      return;
    }
    if (!formData.mesaSeleccionada && mesasFiltradas.length > 0) {
      setFormData(prev => ({
        ...prev,
        mesaSeleccionada: `${mesasFiltradas[0].numero} (${mesasFiltradas[0].zona} - ${mesasFiltradas[0].capacidad} pers.)`
      }));
    }
    setPaso(2);
  };

  const handlePagarYReservar = (e) => {
    e.preventDefault();
    
    const mesaFinal = formData.mesaSeleccionada || (mesasFiltradas.length > 0 ? `${mesasFiltradas[0].numero} (${mesasFiltradas[0].zona} - ${mesasFiltradas[0].capacidad} pers.)` : 'Por Asignar');

    const nuevaReserva = {
      id: Date.now(),
      cliente: formData.cliente,
      fecha: formData.fecha,
      hora: formData.hora,
      personas: `${formData.personas} personas`,
      mesa: mesaFinal,
      estado: 'Pendiente'
    };

    // Guardar en localStorage para sincronización instantánea con la Intranet
    const reservasGuardadas = JSON.parse(localStorage.getItem('kauza_reservas')) || [];
    localStorage.setItem('kauza_reservas', JSON.stringify([nuevaReserva, ...reservasGuardadas]));

    setReservaExitosa(true);
  };

  return (
    <div style={{ backgroundColor: '#0B1D3A', minHeight: '95vh' }} className="pb-5 text-white">
      {/* Cabecera */}
      <div className="container text-center py-5">
        <h1 className="fw-bold display-5 mb-2">Reserva tu Mesa</h1>
        <p className="text-warning fs-5">Asegura tu lugar completando tus datos y abonando la garantía de reserva con Visa.</p>
      </div>

      <div className="container pb-5" style={{ maxWidth: '850px' }}>
        <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5 bg-white text-dark">
          
          {/* Barra de progreso de Pasos */}
          {!reservaExitosa && (
            <div className="d-flex justify-content-center align-items-center mb-5 border-bottom pb-4">
              <div className="d-flex align-items-center gap-2">
                <span className={`badge rounded-circle p-2 ${paso === 1 ? 'bg-secondary text-white' : 'bg-light text-muted'}`}>1</span>
                <span className={`fw-semibold ${paso === 1 ? 'text-dark' : 'text-muted'}`}>Detalles de Reserva</span>
              </div>
              <span className="mx-4 text-muted">──────➔</span>
              <div className="d-flex align-items-center gap-2">
                <span className={`badge rounded-circle p-2 ${paso === 2 ? 'bg-primary text-white' : 'bg-secondary text-white'}`}>2</span>
                <span className={`fw-bold ${paso === 2 ? 'text-dark' : 'text-muted'}`}>Garantía & Pago Visa</span>
              </div>
            </div>
          )}

          {reservaExitosa ? (
            <div className="text-center py-5">
              <div className="mb-3 text-success fs-1">✅</div>
              <h3 className="fw-bold text-dark mb-3">¡Reserva y Pago Registrados con Éxito!</h3>
              <p className="text-muted mb-4 fs-5">
                Gracias <strong>{formData.cliente}</strong>. Tu reserva para <strong>{formData.personas} personas</strong> en la <strong>{formData.mesaSeleccionada}</strong> ha sido confirmada.
              </p>
              <button 
                onClick={() => {
                  setReservaExitosa(false);
                  setPaso(1);
                  setFormData({ cliente: '', email: '', telefono: '', personas: 2, fecha: '', hora: '13:00', mesaSeleccionada: '', numeroTarjeta: '', vencimientoMes: '', vencimientoAnio: '', nombreTarjeta: '', cvv: '' });
                }} 
                className="btn btn-warning fw-bold text-dark px-4 py-2"
              >
                Hacer otra reserva
              </button>
            </div>
          ) : paso === 1 ? (
            /* PASO 1: DETALLES DE RESERVA */
            <form onSubmit={handleIrAlPaso2}>
              <h4 className="fw-bold mb-4 text-dark">Paso 1: Datos de la Reserva</h4>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Nombre Completo</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Ej. Ana García" 
                    value={formData.cliente}
                    onChange={(e) => setFormData({ ...formData, cliente: e.target.value })}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Correo Electrónico</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="ana@ejemplo.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Teléfono / WhatsApp</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="+51 987 654 321" 
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Número de Personas</label>
                  <select 
                    className="form-select"
                    value={formData.personas}
                    onChange={(e) => setFormData({ ...formData, personas: parseInt(e.target.value) })}
                  >
                    <option value={1}>1 Persona</option>
                    <option value={2}>2 Personas</option>
                    <option value={3}>3 Personas</option>
                    <option value={4}>4 Personas</option>
                    <option value={6}>6 Personas</option>
                    <option value={8}>8 Personas (VIP)</option>
                    <option value={10}>10 Personas (Privado)</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold text-primary">🪑 Mesas disponibles para {formData.personas} persona(s)</label>
                <select 
                  className="form-select form-select-lg bg-light fw-semibold"
                  value={formData.mesaSeleccionada}
                  onChange={(e) => setFormData({ ...formData, mesaSeleccionada: e.target.value })}
                >
                  {mesasFiltradas.length > 0 ? (
                    mesasFiltradas.map((m) => (
                      <option key={m.id} value={`${m.numero} (${m.zona} - ${m.capacidad} pers.)`}>
                        {m.numero} — Zona: {m.zona} (Capacidad: {m.capacidad} personas)
                      </option>
                    ))
                  ) : (
                    <option value="Por Asignar">No hay mesas exactas, se asignará una combinación</option>
                  )}
                </select>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Fecha de Reserva</label>
                  <input 
                    type="date" 
                    className="form-control" 
                    value={formData.fecha}
                    onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Hora de Reserva</label>
                  <input 
                    type="time" 
                    className="form-control" 
                    value={formData.hora}
                    onChange={(e) => setFormData({ ...formData, hora: e.target.value })}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-warning fw-bold text-dark w-100 py-3 fs-5 shadow-sm">
                Ir a Pago de Garantía →
              </button>
            </form>
          ) : (
            /* PASO 2: IDÉNTICO A TU CAPTURA */
            <form onSubmit={handlePagarYReservar}>
              <h4 className="fw-bold mb-3 text-dark">Paso 2: Detalles del Pago de Garantía</h4>

              <div className="mb-4 text-muted small">
                <p className="mb-1"><strong>Nombre Completo:</strong> {formData.cliente || '[User Name]'}</p>
                <p className="mb-1"><strong>Correo Electrónico:</strong> {formData.email || '[ana@ejemplo.com]'}</p>
                <p className="mb-0"><strong>Teléfono / WhatsApp:</strong> {formData.telefono || '[+51...]'}</p>
              </div>

              <div className="row g-4">
                {/* Formulario Tarjeta (Columna Izquierda) */}
                <div className="col-lg-7">
                  <div className="mb-3">
                    <label className="form-label fw-bold small text-uppercase">NÚMERO DE TARJETA</label>
                    <div className="input-group">
                      <input 
                        type="text" 
                        className="form-control py-2" 
                        placeholder="•••• •••• •••• ••••"
                        value={formData.numeroTarjeta}
                        onChange={(e) => setFormData({ ...formData, numeroTarjeta: e.target.value })}
                        required
                      />
                      <span className="input-group-text bg-white">
                        <span className="fw-bold text-primary small">VISA</span>
                      </span>
                    </div>
                  </div>

                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <label className="form-label fw-bold small text-uppercase">FECHA DE VENCIMIENTO (MM/AA)</label>
                      <input 
                        type="text" 
                        className="form-control py-2" 
                        placeholder="MM/AA"
                        value={formData.vencimientoMes}
                        onChange={(e) => setFormData({ ...formData, vencimientoMes: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-6">
                      <label className="form-label fw-bold small text-uppercase">NOMBRE EN LA TARJETA</label>
                      <input 
                        type="text" 
                        className="form-control py-2" 
                        placeholder="Tal como figura"
                        value={formData.nombreTarjeta}
                        onChange={(e) => setFormData({ ...formData, nombreTarjeta: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3 col-6">
                    <label className="form-label fw-bold small text-uppercase">CÓDIGO CVV/CVC</label>
                    <input 
                      type="password" 
                      maxLength="4"
                      className="form-control py-2" 
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Recuadro de Resumen de Garantía (Columna Derecha) */}
                <div className="col-lg-5">
                  <div className="card border rounded-4 p-3 bg-light">
                    <h6 className="fw-bold text-uppercase border-bottom pb-2 mb-3">DETALLES DE LA GARANTÍA</h6>
                    
                    <div className="d-flex justify-content-between mb-2">
                      <span>Número de Personas:</span>
                      <strong>{formData.personas}</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Monto de Garantía:</span>
                      <span>S/. {montoPorPersona.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal:</span>
                      <span>S/. {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Tarifa de Servicio/Impuestos:</span>
                      <span>S/. {tarifaServicio.toFixed(2)}</span>
                    </div>

                    <div className="d-flex justify-content-between border-top pt-2 fw-bold fs-5 text-dark">
                      <span>MONTO TOTAL A PAGAR:</span>
                      <span>S/. {montoTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Texto de políticas */}
              <div className="mt-4 mb-4 small text-muted" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>
                <strong>Política de Cancelación y Reembolso:</strong> En cumplimiento con la política para cancelaciones y reembolsos de KAUZA, el monto cobrado será reembolsado si se cancela con al menos 24 horas de antelación. En caso de no presentarse (No-Show) o cancelaciones tardías, la garantía no será reembolsable. Recibe promociones exclusivas e invitaciones a eventos gastronómicos.
              </div>

              <div className="d-flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setPaso(1)} 
                  className="btn btn-outline-secondary w-25 py-3 fw-bold"
                >
                  ← Atrás
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary w-75 py-3 fw-bold fs-5 shadow-sm"
                  style={{ backgroundColor: '#202B69', borderColor: '#202B69' }}
                >
                  PAGAR Y RESERVAR →
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}

export default Reservas;