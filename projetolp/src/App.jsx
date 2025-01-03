import React from 'react';
import Navbar from './components/Navbar.jsx';
import SobreNos from './components/SobreNos.jsx';
import Projetos from './components/Projetos.jsx';
import Contato from './components/Contato.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="hero-section">
        <h1>Projetando um futuro <br /> mais inovador</h1>
      </div>

      <SobreNos />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
};

export default App;
