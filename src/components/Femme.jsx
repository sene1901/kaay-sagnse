import React from "react";
import '../../html-css-file/style-femme.css';


import image1 from '../assets/IMG-20250624-WA0066.jpg';
import image2 from '../assets/IMG-20250624-WA0078.jpg';
import image3 from '../assets/IMG-20250624-WA0074.jpg';
import image4 from '../assets/IMG-20250624-WA0072.jpg';
import image5 from '../assets/IMG-20250624-WA0082.jpg';
 import image6 from '../assets/IMG-20250624-WA0074.jpg';
 import image7 from '../assets/proxy-image.jpeg';
 import image8 from '../assets/proxy-image1.jpeg';
import image9 from '../assets/proxy-image2.jpeg';
import image10 from '../assets/proxy-image3.jpeg';
 import image11 from '../assets/proxy-image4.jpeg';
 import image12 from '../assets/proxy-image5.jpeg';
// import image13 from '../assets/IMG-20250624-WA0063.jpg';


function Femme() {
  return (
    <>
      <div className="nom">
        <section>
          <div className="sec-homme text-center rounded-pill" style={{ backgroundColor: '#CEC4BA' }}>
            <h1>Collection Femme</h1>
          </div>

          <div className="container">
            <div className="row">

              {/* Carte Produit */}
              {[image1, image2, image3, image4].map((img, idx) => (
                <div className="col-md-6 col-lg-3" key={idx}>
                  <div className="carte">
                    <img src={img} className="card-img-top tofs" alt="costume homme" />
                    <div>
                      <div className="ms-4">
                        <h6>Collection Femme</h6>
                        <h6>15 000 Fcfa</h6>
                      </div>

                      <div className="card-body app d-flex justify-content-between">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-5 col-lg-3">
                              <select className="form-control form-control-sm">
                                <option>Choisissez une taille</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                              </select>
                            </div>
                            <div className="col-md-7">
                              <button type="button" className="btn btn-primary" style={{ fontSize: '10px' }}>
                                <i className="bi bi-cart2"></i> Ajouter au panier
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  
                </div>
              ))}

            </div>
            <div className="row">

              {/* Carte Produit */}
              {[image5, image6, image7, image8].map((img, idx) => (
                <div className="col-md-6 col-lg-3" key={idx}>
                  <div className="carte">
                    <img src={img} className="card-img-top " alt="costume homme" />
                    <div>
                      <div className="ms-4">
                        <h6>Collection Femme</h6>
                        <h6>20 000 Fcfa</h6>
                      </div>

                      <div className="card-body app d-flex justify-content-between">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-5 col-lg-3">
                              <select className="form-control form-control-sm">
                                <option>Choisissez une taille</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                              </select>
                            </div>
                            <div className="col-md-7">
                              <button type="button" className="btn btn-primary" style={{ fontSize: '10px' }}>
                                <i className="bi bi-cart2"></i> Ajouter au panier
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  
                </div>
              ))}

            </div>

             <div className="row">

              {/* Carte Produit */}
              {[image9, image10, image11, image12].map((img, idx) => (
                <div className="col-md-6 col-lg-3" key={idx}>
                  <div className="carte">
                    <img src={img} className="card-img-top tofs" alt="costume homme" />
                    <div>
                      <div className="ms-4">
                        <h6>Collection Femme</h6>
                        <h6>30 000 Fcfa</h6>
                      </div>

                      <div className="card-body app d-flex justify-content-between">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-5 col-lg-3">
                              <select className="form-control form-control-sm">
                                <option>Choisissez une taille</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                              </select>
                            </div>
                            <div className="col-md-7">
                              <button type="button" className="btn btn-primary" style={{ fontSize: '10px' }}>
                                <i className="bi bi-cart2"></i> Ajouter au panier
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  
                </div>
              ))}

            </div>



          </div>
        </section>
      </div>
    </>
  );
}

export default Femme;
