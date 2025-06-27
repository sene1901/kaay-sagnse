import React from 'react';

function Footer() {
  return (
    <>
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
              <a href="https://www.facebook.com/share/1JoMrxdZrF/?mibextid=wwXIfr"><i className="bi bi-facebook"></i></a>{' '}
              <a href=" https://www.instagram.com/kaaysagnse2025?igsh=cDg1bHE1b20zbmJk&utm_source=ig_contact_invite"><i className="bi bi-instagram"></i></a>{' '}
              <a href="https://www.tiktok.com/"><i className="bi bi-tiktok"></i></a>
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

export default Footer;


