// // import React from "react";

// // import '../ ../html-css-file/style.css'


// function  Enfants(){
//     return (
//         <>
//         {/* <div className="Enfants"> */}

//         <section>
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="col-md-6 ">
//                     <div className="carte">
//                     <img src="src/assets/IMG-20250625-WA0006.jpg" className="card-img-top" alt="..."/>
//                     <div>
//                          <div className="ms-4">
//                         <h6>Collection Enfant</h6>
//                     <h6>60 000Fcfa</h6>
//                     </div>
                    
//                     <div className="card-body app d-flex justify-content-between ">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-md-5">
                                     
//                      <select className="form-control form-control-sm">
//                          <option>choisissez une taille</option>
//                          <option>M</option>
//                          <option value="">L</option>
//                          <option value="">XL</option>
//                      </select>
//                                 </div>
                                
//                                 <div className="col-md-7">
//                                      <a href=""><button type="button" className="btn btn-primary " style="font-size: 10px;"> <i className="bi bi-cart2"></i> Ajouter au panier</button></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                     <div className="carte">
//                     <img src="src/assets/IMG-20250625-WA0008.jpg" className="card-img-top" alt="..."/>
//                     <div>
//                          <div className="ms-4">
//                         <h6>costume</h6>
//                     <h6>60 000Fcfa</h6>
//                     </div>
                    
//                     <div className="card-body app d-flex justify-content-between ">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-md-5">
                                     
//                      <select className="form-control form-control-sm">
//                          <option>choisissez une taille</option>
//                          <option>M</option>
//                          <option value="">L</option>
//                          <option value="">XL</option>
//                      </select>
//                                 </div>
                                
//                                 <div className="col-md-7">
//                                      <a href=""><button type="button" className="btn btn-primary " style={{fontsize: '10px'}}> <i class="bi bi-cart2"></i> Ajouter au panier</button></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="col-md-6">
//                     <div class="carte">
//                     <img src="src/assets/IMG-20250625-WA0021.jpg" class="card-img-top" alt="..."/>
//                     <div>
//                          <div class="ms-4">
//                         <h6>costume</h6>
//                     <h6>60 000Fcfa</h6>
//                     </div>
                    
//                     <div class="card-body app d-flex justify-content-between ">
//                         <div class="container">
//                             <div class="row">
//                                 <div class="col-md-5">
                                     
//                      <select class="form-control form-control-sm">
//                          <option>choisissez une taille</option>
//                          <option>M</option>
//                          <option value="">L</option>
//                          <option value="">XL</option>
//                      </select>
//                                 </div>
                                
//                                 <div class="col-md-7">
//                                      <a href=""><button type="button" class="btn btn-primary " style="font-size: 10px;"> <i class="bi bi-cart2"></i> Ajouter au panier</button></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="col-md-6">
//                     <div class="carte">
//                     <img src="src/assets/IMG-20250625-WA0018.jpg" class="card-img-top" alt="..."/>
//                     <div>
//                          <div class="ms-4">
//                         <h6>costume</h6>
//                     <h6>60 000Fcfa</h6>
//                     </div>
                    
//                     <div class="card-body app d-flex justify-content-between ">
//                         <div class="container">
//                             <div class="row">
//                                 <div class="col-md-5">
                                     
//                      <select class="form-control form-control-sm">
//                          <option>choisissez une taille</option>
//                          <option>M</option>
//                          <option value="">L</option>
//                          <option value="">XL</option>
//                      </select>
//                                 </div>
                                
//                                 <div class="col-md-7">
//                                      <a href=""><button type="button" class="btn btn-primary " style="font-size: 10px;"> <i class="bi bi-cart2"></i> Ajouter au panier</button></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//                   </div>
//                 </div>
//             </div>
//         </div>
//     </section>

        
        
//     </>
//     );
// }
// export default Enfants;

//   import React from "react";
// import image1 from '../assets/IMG-20250625-WA0006.jpg';
// import image2 from '../assets/IMG-20250625-WA0008.jpg';
// import image3 from '../assets/IMG-20250625-WA0021.jpg';
// import image4 from '../assets/IMG-20250625-WA0018.jpg';

// function Enfants() {
//   return (
//     <>
//       <section>
//         <div className="container-fluid">
//           <div className="row">
//             {[image1, image2, image3, image4].map((image, index) => (
//               <div className="col-md-6 col-lg-3 col-sm-12" key={index}>
//                 <div className="carte">
//                   <img src={image} className="card-img-top" alt="costume" />
//                   <div>
//                     <div className="ms-4">
//                       <h6>costume</h6>
//                       <h6>60 000 Fcfa</h6>
//                     </div>

//                     <div className="card-body app d-flex justify-content-between">
//                       <div className="container">
//                         <div className="row">
//                           <div className="col-md-5">
//                             <select className="form-control form-control-sm">
//                               <option>choisissez une taille</option>
//                               <option>M</option>
//                               <option>L</option>
//                               <option>XL</option>
//                             </select>
//                           </div>

//                           <div className="col-md-7">
//                             <a href="#">
//                               <button
//                                 type="button"
//                                 className="btn btn-primary"
//                                 style={{ fontSize: "10px" }}
//                               >
//                                 <i className="bi bi-cart2"></i> Ajouter au panier
//                               </button>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Enfants;


import React from 'react';
import image1 from '../assets/IMG-20250625-WA0006.jpg';
import image2 from '../assets/IMG-20250625-WA0008.jpg';
import image3 from '../assets/IMG-20250625-WA0021.jpg';
import image4 from '../assets/IMG-20250625-WA0018.jpg';
import image5 from '../assets/IMG-20250624-WA0055.jpg';
import image6 from '../assets/IMG-20250624-WA0056.jpg';
import image7 from '../assets/IMG-20250624-WA0057.jpg';
import image8 from '../assets/IMG-20250624-WA0058.jpg';
import image9 from '../assets/IMG-20250624-WA0059.jpg';
import image10 from '../assets/IMG-20250624-WA0060.jpg';
import image11 from '../assets/IMG-20250624-WA0061.jpg';
import image12 from '../assets/IMG-20250624-WA0062.jpg';
import image13 from '../assets/IMG-20250624-WA0063.jpg';




function Enfants() {
  return (
    <>
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
    </>
  );
}

export default Enfants;







