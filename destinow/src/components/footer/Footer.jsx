import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="columns">
                <div className="column">
                    <h3>PRECISA DE AJUDA?</h3>
                    <div className="column-firstTxt">
                        <p>Telefone:</p>
                        <p>+055 21 1234-5678</p>
                    </div>
                    <div className="column-firstTxt">
                        <p>Email:</p>
                        <p>info@example.com</p>
                    </div>
                    <div className="column-firstTxt">
                        <p>Endereço:</p>
                        <p>Botafogo, 232 - Rio de Janeiro</p>
                    </div>
                </div>
                <div className="column c-2">
                    <h3>EMPRESA</h3>
                    <a href='/'>Centro de Ajuda</a>
                    <a href='/'>Resgatar Vale</a>
                    <a href='/'>Contato</a>
                    <a href='/'>Denunciar Abuso</a>
                    <a href='/'>Sobre Nós</a>
                </div>
                <div className="column c-2">
                    <h3>SUPORTE</h3>
                    <a href='/'>Suporte 24h</a>
                    <a href='/'>Licença</a>
                    <a href='/'>Satisfação</a>
                    <a href='/'>Precisão</a>
                    <a href='/'>Pagamento</a>
                </div>
                <div className="column c-2">
                    <h3>NOSSO TRABALHO</h3>
                    <a href='/'>Portifolio</a>
                    <a href='/'>Informações da Conta</a>
                    <a href='/'>Trabalhe Conosco</a>
                    <a href='/'>Politicas e Regras</a>
                    <a href='/'>Encontre Nosso Time</a>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2023 Nome da Empresa. Todos os direitos reservados.</p>
                <div className="social-icons">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;