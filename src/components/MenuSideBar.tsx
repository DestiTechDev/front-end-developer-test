import React, { useEffect, useRef, useState } from "react";

import styles from '../../styles/MenuSideBar.module.css';
import { IconClose } from "../assets/icons";

interface menu {
    open: boolean;
    setOpen: any;
}

const MenuSideBar: React.FC<menu> = ({ open, setOpen }: menu) => {

    useEffect(() => {
        if (open === true) {
            document.getElementById("menuSideBar")!.style.left = "calc(100% - 75%)";
            document.getElementById("shadow")!.style.display = "block";

        } else {
            document.getElementById("menuSideBar")!.style.left = "100%";
            document.getElementById("shadow")!.style.display = "none";
        }
    }, [open])

    /* Detecta clique fora da div#wrapper para fechar o menuSideBar */

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    /* //Detecta clique fora da div#wrapper para fechar o menuSideBar\\ */


    return (
        <div id="menuSideBar"
            className={`${styles.menuSideBar}`}>
            <div
                id="wrapper"
                ref={wrapperRef}
                className={`${styles.bg_menuSideBar_options} w-3/4 h-screen bg-white fixed`}
            >
                <div className="flex justify-end" onClick={() => setOpen(false)}>
                    {IconClose}
                </div>
                <ul>
                    <li>Criar Conta</li>
                    <li>Login</li>
                    <li>Ajuda</li>
                    <li>Carrinho</li>
                    <li>Idioma</li>
                </ul>
            </div>
            <div id="shadow" className={`${styles.shadow}`}></div>
        </div>
    )
}

export default MenuSideBar;