// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Page from './composant/Page'
// import './App.css'

// function App() {

//   return (
//     <>
//      <div>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab ea dolor ipsam suscipit aut consequatur dolore est fugiat quos. 
//       Deleniti itaque facere iste numquam qui saepe, deserunt quas quam.</p>
    
//     </div> 

//     <Page />
//     </>
//   )
// }

// export default App
// import Navbar from './components/Navbar'
// import Connexion from './components/Connexion'
// import Inscription from './components/Inscription'
import Accueil from './components/Accueil'
import Femme from './components/Femme'
import { Route,Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
     <div>
    {/* <Navbar></Navbar> */}
    <Routes>
      <Route path='/' element={  <Accueil />} />
      <Route path='/Femme' element={  <Femme />} />
      {/* <Route path='/connexion' element={<Connexion></Connexion>} /> */}
      {/* <Route path='/inscription' element={<Inscription></Inscription>} /> */}
    </ Routes>
    <footer></footer>
    </div> 

      
      {/*partie connexion  */}
    
  
    <Accueil />
    <Femme />

    </>
  )
}

export default App








