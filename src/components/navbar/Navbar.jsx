import React, { useState, useEffect } from 'react';
import Button from '../button/Button';
import Logo from '../../images/icons/logo.svg';
import MenuIcon from '../../images/icons/icons8-cardápio-64.svg';
import CloseIcon from '../../images/icons/icons8-excluir-60.svg';
import './Navbar.css';

const NavbarTab = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showButton, setShowButton] = useState(true);

    // Função para alternar o estado de abertura do menu.
    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
         // Atualiza a visibilidade do botão dependendo da largura da janela.
        const updateButtonVisibility = () => {
            setShowButton(window.innerWidth > 960);
        };
        updateButtonVisibility();
        // Adiciona e remove ouvintes de evento para ajustes responsivos.
        window.addEventListener('resize', updateButtonVisibility);

        return () => {
            window.removeEventListener('resize', updateButtonVisibility);
        };
    }, []);
    
// Componente de link do Navbar com fechamento automático do menu ao clicar.
    const NavbarLink = ({ href, children }) => (
        <li className="nav-item">
            <a href={href} className="nav-links" onClick={closeMenu}>
                {children}
            </a>
        </li>
    );

// Componente de link de informação com suporte opcional para estilos adicionais.
    const InformationLink = ({ href, children, className }) => (
        <li className={`meu-inf-itens ${className || ""}`}>
            <a className="meu-inf-links" href={href}>
                {children}
            </a>
        </li>
    );

    return (
        <div className="meu-navbar">
            <div className="meu-navbar-informs hide">
                <ul className="meu-inf-menu">
                    <InformationLink href="mailto:tour.support@gmail.com">tour.support@gmail.com</InformationLink>
                    <InformationLink href="#">Sobre nós</InformationLink>
                    <InformationLink href="#">Contato</InformationLink>
                    <InformationLink href="#" className="no-border-right">Fotos</InformationLink>

                </ul>
            </div>
            <div className="meu-navbar-container">
                <a href="#" className="meu-navbar-logo" onClick={closeMenu}>
                    <img src={Logo} alt="Logo" />
                </a>
                <div className="menu-icon" onClick={toggleMenu}>
                    <img src={isMenuOpen ? CloseIcon : MenuIcon} alt={isMenuOpen ? "Fechar" : "Menu"} />
                </div>
                <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
                    <NavbarLink href="#">IDIOMA</NavbarLink>
                    <NavbarLink href="#">CARRINHO</NavbarLink>
                    <NavbarLink href="#">AJUDA</NavbarLink>
                    <NavbarLink href="#">LOGIN</NavbarLink>
                </ul>
                {showButton && <Button buttonSize="meu-btn--small">CRIAR CONTA</Button>}
            </div>
        </div>
    );
}

export default NavbarTab;
