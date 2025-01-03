import React from 'react';
import '../styles/SobreNos.css';
import imgsobrenos from '../assets/sobrenos.jpg';

const SobreNos = () => {
    return (
        <section className="sobre-nos" id='sobre-nos'>
            <div className="sobre-nos-container">
                <h2>Sobre Nós</h2>
                <div className="content">
                    <div className="image-container">
                        <img src={imgsobrenos} alt="Imagem sobre nós" />
                    </div>
                    <div className="description">
                        <p> Somos uma empresa de arquitetura comprometida em transformar espaços e criar soluções inovadoras e sustentáveis. Nosso time é composto por profissionais experientes, que possuem um olhar atento para o design moderno e funcional, sempre buscando a harmonia entre estética e praticidade. <br /> Desde a concepção até a execução dos projetos, trabalhamos de forma colaborativa para garantir que cada detalhe reflita a visão e as necessidades dos nossos clientes. Acreditamos que a arquitetura tem o poder de moldar o futuro, e nos dedicamos a projetar ambientes que proporcionem bem-estar, eficiência e beleza. Com uma abordagem personalizada e um compromisso com a excelência, estamos aqui para tornar suas ideias em realidade e projetar um futuro mais inspirador.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SobreNos;
