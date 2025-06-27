import React from "react";
import "./apercue.css";
import image1 from '../assets/IMG-20250624-WA0055.jpg';

function Formulaire() {
  const toggleInfos = () => {
    alert("Disponible CHEZ KAAY SANGSE\nAdresse: HLM Grand Yoff");
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={image1} className="card-img-top" alt="Produit" />
      </div>
      <div className="product-details">
        <div className="stars">★★★★★</div>
        <div className="price">25.000 Fcfa</div>

        <label htmlFor="taille">Taille:</label>
        <select id="taille">
          <option value="3">M</option>
          <option value="4">L</option>
          <option value="5">XL</option>
          <option value="6">XXL</option>
        </select>

        <label htmlFor="quantite">Quantité:</label>
        <input type="number" id="quantite" defaultValue="1" min="1" />

        <button className="btn-panier">🛒 Ajouter au panier</button>

        <div className="infos">
          <button onClick={toggleInfos}>
            ℹ Disponible CHEZ KAAY SANGSE <br /> Adresse:HLM Grand Yoff
          </button>
        </div>
      </div>
    </div>
  );
}

export default Formulaire;

