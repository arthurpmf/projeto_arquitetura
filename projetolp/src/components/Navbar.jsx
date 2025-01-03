import React, { useState, useEffect } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Função para controlar a rolagem da página
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Adiciona o evento de rolagem na página
    window.addEventListener("scroll", handleScroll);
    // Limpeza do evento ao desmontar o componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Esc Arquitetura</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#sobre-nos">Sobre Nós</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
