import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

export default function Contact() {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <form id="contactForm">
              <div className="form-floating mb-3">
                <input className="form-control" id="name" type="text" placeholder="Enter your name..." />
                <label htmlFor="name">Full name</label>
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" id="email" type="email" placeholder="name@example.com" />
                <label htmlFor="email">Email address</label>
              </div>
               <div className="form-floating mb-3">
                <textarea className="form-control" id="phone" placeholder="Phone Number"></textarea>
                <label htmlFor="phone">Phone Number</label>
              </div>
              <div className="form-floating mb-3">
                <textarea className="form-control" id="message" placeholder="Enter your message here..." style={{ height: '10rem' }}></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <button className="btn btn-primary btn-xl" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
