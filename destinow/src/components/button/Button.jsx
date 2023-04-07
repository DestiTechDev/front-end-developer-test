import React from "react"
import './Button.css'

// estilo para o botão primário (fundo branco) e btn outline (sem fundo, e com borda)
const STYLES = ['meu-btn--primary', 'meu-btn--outline', 'meu-btn--primary-border']

const SIZES = ['meu-btn--small', 'meu-btn--medium', 'meu-btn--large']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize }) => {

    // as variáveis abaixo checam se o botão tem um estilo ou tamanho definido, se não tiver automaticamante o primeiro estilo dos arrays STYLES e SIZES 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <a href="/cadastro" className="meu-btn-mobile">
            <button
                className={`meu-btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}>

                {children}

            </button>
        </a>
    )
}