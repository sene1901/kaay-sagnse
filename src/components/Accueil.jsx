

import React from "react"
import '../../html-css-file/style.css'
import image1 from '../assets/IMG-20250625-WA0006.jpg';
import image2 from '../assets/IMG-20250625-WA0008.jp';
import image3 from '../assets/IMG-20250625-WA0021.jpg';
import image4 from '../assets/IMG-20250625-WA0018.jpg';
import image5 from '../assets/IMG-20250624-WA0055.jpg';
import image6 from '../assets/IMG-20250624-WA0056.jpg';
import image7 from '../assets/IMG-20250624-WA0057.jpg';
// import image8 from '../assets/IMG-20250624-WA0058.jpg';
import image9 from '../assets/IMG-20250624-WA0059.jpg';
import image10 from '../assets/IMG-20250624-WA0060.jpg';
import image11 from '../assets/IMG-20250624-WA0061.jpg';
import image12 from '../assets/IMG-20250624-WA0062.jpg';
import image13 from '../assets/IMG-20250624-WA0063.jpg';

function Accueil() {
  return (
    <div className='nom'>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item text-center vh-100 slide-1 active" data-bs-interval="10000">
            <div className="container h-100 d-flex align-items-center justify-content-center">
              {/* Contenu */}
            </div>
          </div>
          <div className="carousel-item text-center slide-2 vh-100" data-bs-interval="2000">
            <div className="container h-100 d-flex align-items-center justify-content-center">
              {/* Contenu */}
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section>
        <div className="container py-5">
          <div className="row ">
            {/* Produit 1 */}
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="carte g-5">
                <img src={image1} className="card-img-top" alt="..." />
                <div>
                  <div className="ms-4">
                    <h6>costume</h6>
                    <h6>60 000Fcfa</h6>
                  </div>

                  <div className="card-body app d-flex justify-content-between">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-5">
                          <select className="form-control form-control-sm">
                            <option>choisissez une taille</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                          </select>
                        </div>

                        <div className="col-md-7">
                          <a href="#">
                            <button
                              type="button"
                              className="btn btn-light"
                              style={{ fontSize: '10px' }}
                            >
                              <i className="bi bi-cart2"></i> Ajouter au panier
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Produit 2 */}
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="carte">
                <img src={image2} className="card-img-top" alt="..." />
                <div>
                  <div className="ms-4">
                    <h6>costume</h6>
                    <h6>60 000Fcfa</h6>
                  </div>

                  <div className="card-body app d-flex justify-content-between">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-5">
                          <select className="form-control form-control-sm">
                            <option>choisissez une taille</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                          </select>
                        </div>

                        <div className="col-md-7">
                          <a href="#">
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{ fontSize: '10px' }}
                            >
                              <i className="bi bi-cart2"></i> Ajouter au panier
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Produit 3 */}
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="carte">
                <img src={image3} className="card-img-top" alt="..." />
                <div>
                  <div className="ms-4">
                    <h6>costume</h6>
                    <h6>60 000Fcfa</h6>
                  </div>

                  <div className="card-body app d-flex justify-content-between">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-5">
                          <select className="form-control form-control-sm">
                            <option>choisissez une taille</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                          </select>
                        </div>

                        <div className="col-md-7">
                          <a href="#">
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{ fontSize: '10px' }}
                            >
                              <i className="bi bi-cart2"></i> Ajouter au panier
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Produit 4 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="carte">
                <img src={image4} className="card-img-top" alt="..." />
                <div>
                  <div className="ms-4">
                    <h6>costume</h6>
                    <h6>60 000Fcfa</h6>
                  </div>

                  <div className="card-body app d-flex justify-content-between">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-5">
                          <select className="form-control form-control-sm">
                            <option>choisissez une taille</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                          </select>
                        </div>

                        <div className="col-md-7">
                          <a href="#">
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{ fontSize: '10px' }}
                            >
                              <i className="bi bi-cart2"></i> Ajouter au panier
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>





          <div className="row">
            {/* Produit 1 */}
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="carte">
                <img src={image5} className="card-img-top" alt="..." />
                <div>
                  <div className="ms-4">
                    <h6>costume</h6>
                    <h6>60 000Fcfa</h6>
                  </div>

                  <div className="card-body app d-flex justify-content-between">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-5">
                          <select className="form-control form-control-sm">
                            <option>choisissez une taille</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                          </select>
                        </div>

                        <div className="col-md-7">
                          <a href="#">
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{ fontSize: '10px' }}
                            >
                              <i className="bi bi-cart2"></i> Ajouter au panier
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Produit 2 */}
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="carte">
                <img src={image6} className="card-img-top" alt="..." />
                <div>
                  <div className="ms-4">
                    <h6>costume</h6>
                    <h6>60 000Fcfa</h6>
                  </div>

                  <div className="card-body app d-flex justify-content-between">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-5">
                          <select className="form-control form-control-sm">
                            <option>choisissez une taille</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                          </select>
                        </div>

                        <div className="col-md-7">
                          <a href="#">
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{ fontSize: '10px' }}
                            >
                              <i className="bi bi-cart2"></i> Ajouter au panier
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Produit 3 */}
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="carte">
                <img src={image7} className="card-img-top" alt="..." />
                <div>
                  <div className="ms-4">
                    <h6>costume</h6>
                    <h6>60 000Fcfa</h6>
                  </div>

                  <div className="card-body app d-flex justify-content-between">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-5">
                          <select className="form-control form-control-sm">
                            <option>choisissez une taille</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                          </select>
                        </div>

                        <div className="col-md-7">
                          <a href="#">
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{ fontSize: '10px' }}
                            >
                              <i className="bi bi-cart2"></i> Ajouter au panier
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Produit 4 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="carte">
                <img src={image9} className="card-img-top" alt="..." />
                <div>
                  <div className="ms-4">
                    <h6>costume</h6>
                    <h6>60 000Fcfa</h6>
                  </div>

                  <div className="card-body app d-flex justify-content-between">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-5">
                          <select className="form-control form-control-sm">
                            <option>choisissez une taille</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                          </select>
                        </div>

                        <div className="col-md-7">
                          <a href="#">
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{ fontSize: '10px' }}
                            >
                              <i className="bi bi-cart2"></i> Ajouter au panier
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




          <div className="row">
            {/* Produit 1 */}
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="carte">
                <img src={image10} className="card-img-top" alt="..." />
                <div>
                  <div className="ms-4">
                    <h6>costume</h6>
                    <h6>60 000Fcfa</h6>
                  </div>

                  <div className="card-body app d-flex justify-content-between">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-5">
                          <select className="form-control form-control-sm">
                            <option>choisissez une taille</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                          </select>
                        </div>

                        <div className="col-md-7">
                          <a href="#">
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{ fontSize: '10px' }}
                            >
                              <i className="bi bi-cart2"></i> Ajouter au panier
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Produit 2 */}
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="carte">
                <img src={image11} className="card-img-top" alt="..." />
                <div>
                  <div className="ms-4">
                    <h6>costume</h6>
                    <h6>60 000Fcfa</h6>
                  </div>

                  <div className="card-body app d-flex justify-content-between">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-5">
                          <select className="form-control form-control-sm">
                            <option>choisissez une taille</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                          </select>
                        </div>

                        <div className="col-md-7">
                          <a href="#">
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{ fontSize: '10px' }}
                            >
                              <i className="bi bi-cart2"></i> Ajouter au panier
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Produit 3 */}
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="carte">
                <img src={image12} className="card-img-top" alt="..." />
                <div>
                  <div className="ms-4">
                    <h6>costume</h6>
                    <h6>60 000Fcfa</h6>
                  </div>

                  <div className="card-body app d-flex justify-content-between">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-5">
                          <select className="form-control form-control-sm">
                            <option>choisissez une taille</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                          </select>
                        </div>

                        <div className="col-md-7">
                          <a href="#">
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{ fontSize: '10px' }}
                            >
                              <i className="bi bi-cart2"></i> Ajouter au panier
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Produit 4 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="carte">
                <img src={image13} className="card-img-top" alt="..." />
                <div>
                  <div className="ms-4">
                    <h6>costume</h6>
                    <h6>60 000Fcfa</h6>
                  </div>

                  <div className="card-body app d-flex justify-content-between">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-5">
                          <select className="form-control form-control-sm">
                            <option>choisissez une taille</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                          </select>
                        </div>

                        <div className="col-md-7">
                          <a href="#">
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{ fontSize: '10px' }}
                            >
                              <i className="bi bi-cart2"></i> Ajouter au panier
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Accueil
