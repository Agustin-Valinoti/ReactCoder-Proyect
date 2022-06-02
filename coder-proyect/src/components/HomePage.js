import React from "react";
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">LA NUEVA ERA</h1>
          <p className="mb-5">
            EXPLORA NUESTROS PRODUCTOS
          </p>
          <Link to='/itemlist' className="btn btn-primary">CATALOGO</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
