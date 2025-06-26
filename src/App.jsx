
import Navbar from './components/Navbar'
import Connexion from './components/Connexion'
import Inscription from './components/Inscription'

import Accueil from './components/Accueil'
import { Route,Routes } from 'react-router-dom'
import './App.css' 

function App() {

  return (
    <>
     <div>
    <Navbar></Navbar>
    <Routes>
       <Route path='/' element={  <Accueil />} /> 
      <Route path='/connexion' element={<Connexion></Connexion>} />
      <Route path='/inscription' element={<Inscription></Inscription>} />
    </ Routes>
    <footer></footer>
    
    
    </div> 
    </>
  )
}

export default App
