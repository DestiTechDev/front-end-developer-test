import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BsYoutube, BsLinkedin } from 'react-icons/bs';
import './Footer.css';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';
import ArrowIcon from "../../images/icons/icon-arrow-down.svg";

// Um botão customizado que permite expandir/collapsar uma seção do acordeão.
const CustomToggle = ({ eventKey, title }) => {
    const decoratedOnClick = useAccordionButton(eventKey);
    return (
        <h3 onClick={decoratedOnClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {title}
            <img src={ArrowIcon} alt="Arrow Down" style={{ marginLeft: '10px' }} />
        </h3>
    );
};

const Footer = () => {
    return (
        <footer>
            <Accordion className="d-md-none">
                <Card className="accordion-d">
                    <CustomToggle  eventKey="0" title="PRECISA DE AJUDA?" />
                    <Accordion.Collapse eventKey="0">
                        <div>
                            <p>Telefone:</p>
                            <p>+055 21 1234-5678</p>
                            <p>Email:</p>
                            <p>info@example.com</p>
                            <p>Endereço:</p>
                            <p>Botafogo, 232 - Rio de Janeiro</p>
                        </div>
                    </Accordion.Collapse>
                </Card>
                <Card className="accordion-d">
                    <CustomToggle eventKey="1" title="EMPRESA" />
                    <Accordion.Collapse eventKey="1">
                        <div>
                            <p><a href='/'>Centro de Ajuda</a></p>
                            <p><a href='/'>Resgatar Vale</a></p>
                            <p><a href='/'>Contato</a></p>
                            <p><a href='/'>Denunciar Abuso</a></p>
                            <p><a href='/'>Sobre Nós</a></p>
                        </div>
                    </Accordion.Collapse>
                </Card>
                <Card className="accordion-d">
                    <CustomToggle eventKey="2" title="SUPORTE" />
                    <Accordion.Collapse eventKey="2">
                        <div>
                            <p><a href='/'>Suporte 24h</a></p>
                            <p><a href='/'>Licença</a></p>
                            <p><a href='/'>Satisfação</a></p>
                            <p><a href='/'>Precisão</a></p>
                            <p><a href='/'>Pagamento</a></p>
                        </div>
                    </Accordion.Collapse>
                </Card>
                <Card className="accordion-d">
                    <CustomToggle  eventKey="3" title="NOSSO TRABALHO" />
                    <Accordion.Collapse eventKey="3">
                        <div>
                            <p><a href='/'>Portifolio</a></p>
                            <p><a href='/'>Informações da Conta</a></p>
                            <p><a href='/'>Trabalhe Conosco</a></p>
                            <p><a href='/'>Politicas e Regras</a></p>
                            <p> <a href='/'>Encontre Nosso Time</a></p>
                        </div>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <div className="columns d-none d-md-flex">
                <div className="column c-1">
                    <h3>PRECISA DE AJUDA?</h3>
                    <p>Telefone:</p>
                    <p>+055 21 1234-5678</p>
                    <p>Email:</p>
                    <p>info@example.com</p>
                    <p>Endereço:</p>
                    <p>Botafogo, 232 - Rio de Janeiro</p>
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
                <p>&copy; Copyright 2002</p>
                <div className="social-icons">
                    <a href='/'><FaFacebook /></a>
                    <a href='/'><FaTwitter /></a>
                    <a href='/'><BsYoutube /></a>
                    <a href='/'><FaInstagram /></a>
                    <a href='/'><BsLinkedin /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
