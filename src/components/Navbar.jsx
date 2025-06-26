import React from "react";
import '../../html-css-file/style.css'; // Assure-toi que ce chemin est correct
import logo from '../assets/logo.jpg'; // Utilise l'import de React pour les images

function Navbar() {
    return (
        <>
            <nav classNameName="navbar navbar-expand-md navbar-light bg-white fixed-top w-100 shadow">
                <div classNameName="container-fluid">

                    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span classNameName="navbar-toggler-icon"></span>
                    </button>

                    <a classNameName="navbar-brand" href="#">
                        <img src={logo} classNameName="img-fluid" alt="Logo" />
                    </a>

                    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul classNameName="navbar-nav d-flex justify-content-between mb-lg-0">
                            <li classNameName="nav-item">
                                <a classNameName="nav-link active" aria-current="page" href="/Accueil">Accueil</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="" id="categorieDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Catégorie
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="categorieDropdown">
                                    <li><a  className="dropdown-item" href="#">Homme</a></li>
                                    <li><a className="dropdown-item" href="#">Femme</a></li>
                                    <li><a className="dropdown-item" href="#">enfant</a></li>
                                </ul>
                            </li>
                            <li classNameName="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Connexion">
                                    <i className="bi bi-person"></i> Se Connecter
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-cart-dash"></i> Panier
                                </a>
                            </li>
                        </ul>
                    </div>

                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Recherche" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Recherche</button>
                    </form>
                </div>
            </nav>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item  text-center  vh-100 slide-1 active" data-bs-interval="10000">
                        <div className="container  h-100 d-flex align-items-center justify-content-center">


                        </div>
                    </div>
                    <div classNameName="carousel-item   text-center  slide-2  vh-100" data-bs-interval="2000">
                        <div className="container  h-100 d-flex align-items-center justify-content-center">

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

        </>
    );
}

export default Navbar;
