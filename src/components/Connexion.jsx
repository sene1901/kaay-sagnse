function Connexion() {

  return (
    <>
     <div>
    {/* <Navbar></Navbar> */}
    <Routes>
      <Route path='/' element={  <Accueil />} />
      {/* <Route path='/connexion' element={<Connexion></Connexion>} /> */}
      <Route path='/Navbar' element={<Navbar/>} />
    </ Routes>
    <footer></footer>
    </div> 
    </>
  )
}
export default Connexion