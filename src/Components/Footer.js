import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1817' }} className="text-white py-4 mt-auto border-top border-secondary">
      <div className="container text-center">
        <p className="mb-1 fw-bold tracking-wider" style={{ color: '#D4AF37', letterSpacing: '1px' }}>
          KUSI — Gastronomía & Folklore Peruano
        </p>
        <p className="text-secondary small mb-0">
          © 2026 Proyecto Académico | Lima, Perú
        </p>
      </div>
    </footer>
  );
}

export default Footer;