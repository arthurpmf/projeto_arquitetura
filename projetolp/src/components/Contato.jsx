import React from "react";
import "../styles/contato.css";

const Contato = () => {
  return (
    <section className="contato" id="contato">
        <h2>Contato</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14670.416345019962!2d-47.935359498402905!3d-15.78015246411857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a4f4f40b88d77%3A0x4e2085d00e7de712!2sEsplanada%20dos%20Minist%C3%A9rios%20-%20Bras%C3%ADlia%2C%20DF!5e0!3m2!1spt-BR!2sbr!4v1644453679040!5m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="contato-info">
        <div className="endereco">
          <p>Esplanada dos Ministérios, Brasília, DF</p>
        </div>

        <div className="contatos">
          <p>Telefone: (61) 1234-5678</p>
          <p>Email: contato@arquitetura.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contato;
