import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { MdOutlineAirplaneTicket } from 'react-icons/md'
import { Button } from '../button/Button'



function Navbar() {

    // variável que, quando clicada, faz o useState mudar o estado do icon. Começa como FALSO.
    const [click, setClick] = useState(false)

    const [button, setButton] = useState(true) // constante do btn da navbar


    // function que quando o setClick é usado/clicado, muda o click pra TRUE (! significa contrário do que já estava definido antes, ou seja, como estava falso, se tornou verdadeiro)
    const handleClickIcon = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)


    // function para saber se o tamanho da tela é maior ou igual 960 (tela grande). caso seja, não vai mostrar o botão. se não for, vai mostrar.
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    // useEffect usado pra que o botão cadastro não apareça quando a page for recarregada, com a tela pequena
    useEffect(() => {
        showButton()
    }, [])

    // evento na tela para sempre que mexer na tela (seguindo a lógica acima), mostrar o botão
    window.addEventListener('resize', showButton)


    // {button && <Button buttonStyle='btn--outline'>CADASTRE-SE</Button>} COLOCAR NO FINAL

    return (
        <div className='navbar'>

            <div className="navbar-informs hide">
                <ul className="inf-menu">
                    <li className='inf-itens'><a className="inf-links" href="mailto:destinow@gmail.com">destinow@gmail.com</a></li>
                    <li className='inf-itens'><a className="inf-links" href="">Sobre nós</a></li>
                    <li className='inf-itens'><a className="inf-links" href="">Contato</a></li>
                    <li className='inf-itens'><a className="inf-links" href="">Fotos</a></li>
                </ul>
            </div>


            <div className="navbar-container">
                {/* LOGO */}
                <a href='#' className="navbar-logo" onClick={closeMobileMenu}> {/* para quando o logo for clicado, fechar o navbar escondido*/}
                    <MdOutlineAirplaneTicket color='#007A78' /> DestiNow
                </a>

                <div className="menu-icon" onClick={handleClickIcon}>
                    {/* abaixo está um ternário onde se o botão for clicado, muda o icone - foi importado esses icones no index.html*/}
                    {click ? <GrClose color='#007A78' /> : <GiHamburgerMenu color='#007A78' />}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href='/' className='nav-links' onClick={closeMobileMenu}> {/* para quando um componente dentro do navbar escondido for clicado, fechar o navbar*/}
                            IDIOMA
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/sobre' className='nav-links' onClick={closeMobileMenu}>
                            CARRINHO
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/cursos' className='nav-links' onClick={closeMobileMenu}>
                            AJUDA
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/cursos' className='nav-links' onClick={closeMobileMenu}>
                            LOGIN
                        </a>
                    </li>
                </ul>

                {button && <Button buttonSize={'btn--medium'}>CRIAR CONTA</Button>}
            </div>
        </div>
    )
}

export default Navbar