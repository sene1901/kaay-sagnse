import React from "react";
import '../../html-css-file/style-homme.css';


import image1 from '../assets/IMG-20250624-WA0069.jpg';
import image2 from '../assets/IMG-20250624-WA0070.jpg';
import image3 from '../assets/IMG-20250624-WA0073.jpg';
import image4 from '../assets/IMG-20250624-WA0075.jpg';
import image5 from '../assets/IMG-20250624-WA0077.jpg';
 import image6 from '../assets/IMG-20250625-WA0039.jpg';
 import image7 from '../assets/IMG-20250625-WA0056.jpg';
 import image8 from '../assets/IMG-20250625-WA0043.jpg';
import image9 from '../assets/IMG-20250625-WA0051.jpg';
import image10 from '../assets/IMG-20250625-WA0047.jpg';
 import image11 from '../assets/IMG-20250625-WA0053.jpg';
 import image12 from '../assets/IMG-20250625-WA0059.jpg';
// import image13 from '../assets/IMG-20250624-WA0063.jpg';


function Homme() {
  return (
    <>
      <div className="nom">
        <section>
          <div className="sec-homme text-center rounded-pill" style={{ backgroundColor: '#RRGGBBAA' }}>
            <h1>Collection Homme</h1>
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
                        <h6>Costume</h6>
                        <h6>60 000 Fcfa</h6>
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
                        <h6>Collection Homme</h6>
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
                        <h6>Collection Homme</h6>
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

export default Homme;
