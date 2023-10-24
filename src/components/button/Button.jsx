import React from "react";
import './Button.css';

const DEFAULT_STYLE = 'meu-btn--primary';
const DEFAULT_SIZE = 'meu-btn--small';

const STYLES = new Set(['meu-btn--primary', 'meu-btn--outline', 'meu-btn--primary-border']);
const SIZES = new Set(['meu-btn--small', 'meu-btn--medium', 'meu-btn--large']);

const Button = ({
    children,
    type,
    onClick,
    buttonStyle = DEFAULT_STYLE,
    buttonSize = DEFAULT_SIZE
}) => {
    // Determina o estilo e tamanho final do botão
    const finalButtonStyle = STYLES.has(buttonStyle) ? buttonStyle : DEFAULT_STYLE;
    const finalButtonSize = SIZES.has(buttonSize) ? buttonSize : DEFAULT_SIZE;

    return (
        <a href="/" className="meu-btn-mobile">
            <button
                className={`meu-btn ${finalButtonStyle} ${finalButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </a>
    );
};

export default Button;
