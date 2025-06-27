import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Formulaire from './components/Formulaire'; // Le composant que tu as créé
import './App.css';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/formulaire' element={<Formulaire />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>

        {/* Footer affiché sur toutes les pages */}
        <Footer />
      </div>
    </>
  );
}

export default App;
