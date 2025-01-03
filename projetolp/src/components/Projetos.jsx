import React from "react";
import "../styles/Projetos.css";
import projeto1 from "../assets/1.png";
import projeto2 from "../assets/2.png";

const Projetos = () => {
  const projetos = [projeto1, projeto2];

  return (
    <section className="projetos" id="projetos">
      <div className="projetos-container">
        <h2>Projetos</h2>
        {projetos.map((imagem, index) => (
          <div className="projeto" key={index}>
            <img src={imagem} alt={`Projeto ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
