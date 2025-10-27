import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio() {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary   pt-3">Portfolio</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row justify-content-center">
          {['cabin.png', 'cake.png', 'circus.png', 'game.png', 'safe.png', 'submarine.png'].map((img, i) => (
            <div className="col-md-6 col-lg-4 mb-5" key={i}>
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src={`https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/${img}`} alt="..." />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
