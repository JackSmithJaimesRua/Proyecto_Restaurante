import React, { useState } from 'react';
import Header from './Components/Header';
import Portada from './Components/Portada';
import Carta from './Components/Carta';
import Nosotros from './Components/Nosotros';
import Reservas from './Components/Reservas';
import Intranet from './Components/Intranet';
import Login from './Components/Login';
import Footer from './Components/Footer';

function App() {
  const [esAdmin, setEsAdmin] = useState(false); // Estado de sesión de administrador
  const [vistaActual, setVistaActual] = useState('portada');

  const renderizarVista = () => {
    switch (vistaActual) {
      case 'portada':
        return <Portada cambiarVista={setVistaActual} />;
      case 'carta':
        return <Carta />;
      case 'nosotros':
        return <Nosotros />;
      case 'reserva':
        return <Reservas />;
      case 'intranet':
        // Si no se ha autenticado como admin, muestra la pantalla de Login
        if (!esAdmin) {
          return <Login onLoginExitoso={() => setEsAdmin(true)} />;
        }
        return <Intranet />;
      default:
        return <Portada cambiarVista={setVistaActual} />;
    }
  };

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header 
        cambiarVista={setVistaActual} 
        vistaActual={vistaActual} 
        esAdmin={esAdmin}
        onCerrarSesion={() => {
          setEsAdmin(false);
          setVistaActual('portada');
        }}
      />
      <main className="flex-grow-1">
        {renderizarVista()}
      </main>
      <Footer />
    </div>
  );
}

export default App;