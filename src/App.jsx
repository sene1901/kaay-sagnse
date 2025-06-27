
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import Accueil from './components/Accueil';
import Enfants from './components/Enfants' ;
import Homme from './components/Homme';
// import Femme from './components/Femme';
import './App.css'


function App() {
  return (
    <>

     <div>
    <Navbar></Navbar>
    <Routes>

       <Route path='/' element={  <Accueil />} /> 
       <Route path="/enfants" element={<Enfants />} />
        <Route path='/homme' element={  <Homme />} />
        {/* <Route path='/femme' element={  <Femme/>} /> */}
      <Route path='/connexion' element={<Connexion></Connexion>} />
      <Route path='/inscription' element={<Inscription></Inscription>} />
     
     
    </ Routes>
    <footer></footer>
    
    
    </div> 

      
      {/*partie connexion  */}
    
  
    <Accueil />
    <Homme />
    {/* <Femme/> */}


    </>
  );
}


export default App

