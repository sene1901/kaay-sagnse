// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg
import Navbar from './composant/Navbar'
import Connexion from './composant/Connexion'
import Inscription from './composant/Inscription'
import Page from './composant/Page'
import { Route,Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
     <div>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={  <Page />} />
      <Route path='/connexion' element={<Connexion></Connexion>} />
      <Route path='/inscription' element={<Inscription></Inscription>} />
    </ Routes>
    <footer></footer>
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab ea dolor ipsam suscipit aut consequatur dolore est fugiat quos. 
      Deleniti itaque facere iste numquam qui saepe, deserunt quas quam.</p>
    
    </div> 

  
    </>
  )
}

export default App
