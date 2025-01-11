// src/pages/Info.js
import React from 'react';
import './Info.css'; // Import the CSS file

const Info = () => {
  return (
    <div className="info-page">
      <div className="container">
        <div className="content-wrapper">
          <h1>Información</h1>

          <div className="info-card">
            <p>
              Este blog ha sido creado con el objetivo de proporcionar información especifica sobre
              los temas: Prueba de Hipótesis y Confiabilidad. Somos un equipo de estudiantes de la
              Universidad Politecnica Territorial Alonso Gamero, pertenecientes al PNF de Informática, 
              Trayecto 3, trimestre 1, Periodo 2024-2, seccion 31 de la unidad curricular Matematica.
            </p>
            <h2>Docente</h2>
            <ul>
              <li>Prf. Airam Colina</li>
            </ul>
            <h2>Autores</h2>
            <ul>
              <li>Jose Graterol</li>
              <li>Lariana Camacho</li>
            </ul>

            <h2>Contacto</h2>
            <p>
              ¿Tiene preguntas o sugerencias? No dude en ponerse en contacto con nosotros para cualquier consulta.{' '}
              <ul>
                <li>
                  <a href="mailto:joselgraterolc.8@gmail.com" className="contact-link">
                    joselgraterolc.8@gmail.com
                  </a>
                </li>
                <li>
                  <a href="mailto:larycamachomedina@gmail.com" className="contact-link">
                    larycamachomedina@gmail.com
                  </a>
                </li>
              </ul>
              
            </p>

            <div className="logo-info-page">
              <img src="https://imgur.com/DnNZdDc.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
