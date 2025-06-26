
import React from "react";
import '../../html-css-file/style.css'; 
import logo from '../assets/logo.jpg'; 
import { Link } from 'react-router-dom';

<Link to="/enfants">Enfants</Link>

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
                        <img src={logo} className="img-fluid rounded-4" alt="Logo" />
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex justify-content-between mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="">Accueil</a>
                            </li>
                             <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" id="categorieDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Catégorie
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="categorieDropdown">
                                    <li><a  className="dropdown-item" href="">Homme</a></li>
                                    <li><a className="dropdown-item" href="#">Femme</a></li>
                                    <li><Link to="/enfants" className="dropdown-item">Enfants</Link></li>
                                </ul>
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
