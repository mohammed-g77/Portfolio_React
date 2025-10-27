import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

export default function About() {
  return (
    <section className="page-section About text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 ms-auto"><p className="lead"><b>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</b></p></div>
          <div className="col-lg-4 me-auto"><p className="lead"><b>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</b></p></div>
        </div>
        <div className="text-center mt-4">
          <a className="btn btn-xl btn-outline-light" href="#!">
            <i className="fas fa-download me-2"></i>
            Free Download!
          </a>
        </div>
      </div>
    </section>
  );
}
