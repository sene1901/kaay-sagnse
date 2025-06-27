import React from "react";
import '../components/Accueil';


function Connexion(){
   return (
    <>
     <div className='nom py-5 mt-5'></div>
    <div className="container">
        <div className="row">
            <div classNameName="col-md-12 premier">
                <h3><b>Se connecter</b></h3>
                <h5><b>Avec</b></h5>
                <form>
  <div className="mb-3">
    
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Adresse email"/>
   
  </div>
  <div className="mb-3">
    
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
  </div>
  <div className="mb-3 form-check ">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
   <div className="oublier">
     <label className="form-check-label" for="exampleCheck1">Se souvenir de moi </label>
     <a className="deco">Vous avez oublié votre mot de passe ?</a>
</div>
  </div>
 <div className="d-flex justify-content-end">
    <button type="button" className="btn yy btn-lg">Connexion</button>
 </div>

</form>
</div>

<div className="col-md-12">
   <div className="add">
     <h4 className="text-center"><b>Pas de compte ? Créer un compte</b></h4>
    <p className="text-center"><small>L'inscription prend moins d'une minute mais vous donne un controle total sur vos commandes.</small></p>
   </div>



<div className="input-group mb-3 adres">
  <div className="d-flex flex-column">
      <p><b>Prénom Nom</b></p>
  <input type="text" className="form-control" placeholder="Nom Complet" aria-label="Username"/>
  
  </div>

  <div className="d-flex flex-column">
  <p><b>Adresse email</b></p>
  <input type="text" className="form-control" placeholder="Adresse email" aria-label="Server"/>
  </div>
</div>


<div className="input-group mb-3 adres ">
   <div className="d-flex flex-column">
     <p><b>Password</b></p>
  <input type="text" className="form-control" placeholder="Mot de passe" aria-label="Username"/>
   </div>
  <div className="d-flex flex-column">
    <p><b>Confirm Password</b></p>
  <input type="text" className="form-control" placeholder="Confirmez le mot de passe" aria-label="Server"/>
  </div>
</div>


<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="checkDefault"/>
  <label className="form-check-label" for="checkDefault">
    J'accepte les termes et conditions de la politique de confidentialité
  </label>
</div>






<div className="d-flex justify-content-end">
    <button type="button" className="btn yy btn-lg">S'inscrire</button>
 </div>





</div>
        </div>
    </div>


        </>
    );


}
export default Connexion