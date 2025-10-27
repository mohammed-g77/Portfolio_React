import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';

export default function Hero() {
  return (
    <header className="masthead   text-white text-center" id="page-top">
      <div className="hero-container d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-5" src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg" alt="Avatar" />
        <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </header>
  );
}
