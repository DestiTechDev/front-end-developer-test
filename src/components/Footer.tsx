import styles from '../../styles/Footer.module.css';

import { IconFacebook, IconInstagram, IconLinkedin, IconTwitter, IconYoutube } from '../assets/icons';
import AccordionItens from './AccordionItens';

function Footer() {
    return (
        <div className={`${styles.bg_footer}`}>
            <div className={`${styles.bg_spacing_footer} grid grid-cols-12 container md:grid min-[350px]:hidden`}>
                <div className='col-span-12 md:col-span-3'>
                    <h5>Precisa de ajuda?</h5>
                    <ul style={{ width: "75%" }}>
                        <li>Telefone: <a href="tel:+055 21 1234-5678"><br /> <b>+055 21 1234-5678</b></a></li>
                        <li>Email: <a href="mailto:info@example.com"><br /> <b>info@example.com</b></a></li>
                        <li>Endereço: <br /> <b>Botafogo, 232 - Rio de Janeiro</b></li>
                    </ul>
                </div>
                <div className='col-span-12 md:col-span-3'>
                    <h5>Empresa</h5>
                    <ul>
                        <li><a href="#">Centro de Ajuda</a></li>
                        <li><a href="#">Resgatar Vale</a></li>
                        <li><a href="#">Contato</a></li>
                        <li><a href="#">Denunciar Abuso</a></li>
                        <li><a href="#">Sobre Nós</a></li>
                    </ul>
                </div>
                <div className='col-span-12 md:col-span-3'>
                    <h5>Suporte</h5>
                    <ul>
                        <li><a href="#">Suporte 24h</a></li>
                        <li><a href="#">Licença</a></li>
                        <li><a href="#">Satisfação</a></li>
                        <li><a href="#">Precisão</a></li>
                        <li><a href="#">Pagamento</a></li>
                    </ul>
                </div>
                <div className='col-span-12 md:col-span-3'>
                    <h5>Nosso trabalho</h5>
                    <ul>
                        <li><a href="#">Portifólio</a></li>
                        <li><a href="#">Informações da Conta</a></li>
                        <li><a href="#">Trabalhe Conosco</a></li>
                        <li><a href="#">Políticas e Regras</a></li>
                        <li><a href="#">Encontre Nosso Time</a></li>
                    </ul>
                </div>
            </div>
            <div className='md:hidden pt-10 pb-10'>
            <AccordionItens />
            </div>
            <hr />
            <div className={`${styles.bg_copywrite_footer} container flex justify-between items-center flex-col-reverse md:flex-row`}>
                <p>© Copyright 2022</p>

                <div className='flex items-center gap-5 mb-3 md:mb-0'>
                    <div className={`${styles.bg_media_footer}`}>
                        {IconFacebook}
                    </div>
                    <div className={`${styles.bg_media_footer}`}>
                        {IconTwitter}
                    </div>
                    <div className={`${styles.bg_media_footer}`}>
                        {IconYoutube}
                    </div>
                    <div className={`${styles.bg_media_footer}`}>
                        {IconInstagram}
                    </div>
                    <div className={`${styles.bg_media_footer}`}>
                        {IconLinkedin}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;