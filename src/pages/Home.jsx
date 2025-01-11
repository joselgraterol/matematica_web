import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Bienvenidos al Blog de Matemática</h1>
            <p>Explora nuestros artículos sobre Prueba de Hipótesis y Confiabilidad</p>
            <button onClick={() => navigate('/articles')} className="cta-button">
              Explorar artículos <span className="icon">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;