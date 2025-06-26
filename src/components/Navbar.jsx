import React from "react";
import '../../html-css-file/style.css'; // Assure-toi que ce chemin est correct
import logo from '../assets/logo.jpg'; // Utilise l'import de React pour les images

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top w-100 shadow">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a className="navbar-brand" href="#">
                        <img src={logo} className="img-fluid" alt="Logo" />
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex justify-content-between mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Accueil">Accueil</a>
                            </li>
                            <li className="nav-item">
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
        </>
    );
}

export default Navbar;
