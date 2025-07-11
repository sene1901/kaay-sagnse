

//                 

import React from 'react';
import image1 from '../assets/IMG-20250625-WA0006.jpg';
import image2 from '../assets/IMG-20250625-WA0008.jpg';
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




function Enfants() {
  return (
    <>

    <section>
        <div className="baniere mt-5">
            <h1 className="text-center fw-bold"> Collection Enfants Disponible !</h1>
            <p class="text-center">Habille tes petits princes et princesses avec style</p>
        </div>
    </section>
      <section>
        <div className="container">
          <div className="row ">
            {/* Produit 1 */}
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="carte g-5">
                <img src={image1} className="card-img-top" alt="..." />
                <div>
                  <div className="ms-4">
                    <h5>Collection Enfant</h5>
                    <h6>5000Fcfa</h6>
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
                              style={{ fontSize: '12px' }}
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
                    <h5>Collection Enfant</h5>
                    <h6>10 000Fcfa</h6>
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
                              style={{ fontSize: '12px' }}
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
                    <h5>Collection Enfant</h5>
                    <h6>7500Fcfa</h6>
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
                              style={{ fontSize: '12px' }}
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
                    <h5>Collection Enfant</h5>
                    <h6>10 000Fcfa</h6>
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
                              style={{ fontSize: '12px' }}
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
                    <h5>Collection Enfant</h5>
                    <h6>10 000Fcfa</h6>
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
                              style={{ fontSize: '12px' }}
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
                    <h5>Collection Enfant</h5>
                    <h6>5000Fcfa</h6>
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
                              style={{ fontSize: '12px' }}
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
                    <h5>Collection Enfant</h5>
                    <h6>10000Fcfa</h6>
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
                              style={{ fontSize: '12px' }}
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
                    <h5>Collection Enfant</h5>
                    <h6>5000Fcfa</h6>
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
                              style={{ fontSize: '12px' }}
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
                    <h5>Collection Enfant</h5>
                    <h6>9000Fcfa</h6>
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
                              style={{ fontSize: '12px' }}
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
                    <h5>Collection Enfant</h5>
                    <h6>12000Fcfa</h6>
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
                              style={{ fontSize: '12px' }}
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
                    <h5>Collection Enfant</h5>
                    <h6>8000Fcfa</h6>
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
                              style={{ fontSize: '12px' }}
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
                    <h5>Collection Enfant</h5>
                    <h6>15000Fcfa</h6>
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
                              style={{ fontSize: '12px' }}
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
      <footer className="bgw">
      <div className="container p-5">
        <div className="row">
          <div className="col-md-3">
            <p className="fw-bold fs-3 h25">Kaay sangse</p>
            <p className=" fw-bold">Kaay Sangse – Bien plus qu’une boutique en ligne : un univers de style, pour femmes, hommes et enfants, où chaque tenue raconte votre élégance.</p>
          </div>

          <div className="col-md-3">
            <p className="fw-bold fs-3 h25">Contact</p>
            <p className=" fw-bold">Num: 778678292</p>
            <p className=" fw-bold">Adresse: HLM grand yoff</p>
            <p className=" fw-bold">kaay-sangse25@gmail.com</p>
            <p className=" fw-bold">Nous rejoindre sur:</p>
            <div className="p-2">
              <a href="https://www.facebook.com/share/1JoMrxdZrF/?mibextid=wwXIfr"><i className="bi bi-facebook text-light"></i></a>{' '}
              <a href=" https://www.instagram.com/kaaysagnse2025?igsh=cDg1bHE1b20zbmJk&utm_source=ig_contact_invite"><i className="bi bi-instagram text-light"></i></a>{' '}
              <a href="https://www.tiktok.com/"><i className="bi bi-tiktok text-light"></i></a>
            </div>
          </div>

          <div className="col-md-3">
            <p className="fw-bold fs-3 h25">Produits</p>
            <p className=" fw-bold">Vêtements</p>
            <p className=" fw-bold">Promotion</p>
            <p className=" fw-bold">Cadeaux</p>
          </div>

          <div className="col-md-3">
            <p className="fw-bold fs-3">Jusqu'à moins de 30 000 Fcfa</p>
            <button type="button" className="btn active" aria-pressed="true">
              Acheter maintenant
            </button>
          </div>
        </div>
      </div>

      <div className="text-center border-top pb-3">
        <p>
          © Tous les droits sont réservés. Fait par{' '}
          <b className="h25">Teranga-dev</b>
        </p>
      </div>
    </footer>
    </>
  );
}

export default Enfants;







