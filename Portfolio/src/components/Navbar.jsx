import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg   text-uppercase fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand text-white" href="#page-top">Start Bootstrap</a>
        <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
          Menu <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link text-white py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link text-white py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link text-white py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}