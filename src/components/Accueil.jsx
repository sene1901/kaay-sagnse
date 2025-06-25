// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import React from "react";
import '../../html-css-file/style.css'

function Page() {

  return (
    <>
     <div className='nom'>
      <header>
    <div className="navbar">

      <div className="logo">
        <img src="Images/istockphoto-1365118618-2048x2048.jpg" alt="Logo" />
        <span>Kaay Sagnsé</span>
      </div>

      <button className="btn btn-primary">Testons</button>

      <nav>
        <ul className="nav-links">
          <li><a href="index.html">Accueil</a></li>
          
          
          <li className="dropdown">
            <a href="#">Categories▾</a>
            <ul className="dropdown-menu">
              <li><a href="homme.html">Homme</a></li>
              <li><a href="#">Femme</a></li>
              <li><a href="#">Enfant</a></li>
              <li><a href="accessoire.html">Accessoires</a></li>
              
            </ul>
          </li>
        </ul>
      </nav>
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Rechercher un produit..." />
      </div>
      <div className="auth-links">
       <button className="btn-connexion"> <a href="#">Connexion</a></button>
      
      </div>

    </div>
  </header>
</div>
<section  className="Contrôles">

    <div className="controls">
        <button className="filter-btn"><i className='bx bx-filter'></i> FILTER</button>
        <div className="grid-options">
            <i className='bx bx-dots-horizontal'></i>
            <i className='bx bx-grid-small'></i>
            <i className='bx bx-grid-horizontal'></i>
        </div>
         <select className="sort">
            <option>Featured</option>
            <option>opt1</option>
            <option>opt2</option>
        </select>
        </div>
        </section>

    </>
  )
}

export default Page
