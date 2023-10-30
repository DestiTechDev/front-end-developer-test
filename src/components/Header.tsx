import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

import styles from '../../styles/Header.module.css';

import Logo from '../img/Logo-2 1.png';

import { IconMenu } from "../assets/icons";
import MenuSideBar from "./MenuSideBar";
import Link from "next/link";

function Header() {
    const [open, setOpen] = useState<any>(false);

    /* Detecta clique fora da div#wrapper para fechar o dropdown de login */
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    var elem: any = document.getElementById('authLoginDropdown');
                    if (elem) {
                        elem.classList.remove(styles.active);
                    }
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    }
    /* //Detecta clique fora da div#wrapper para fechar o dropdown de login\\ */

    return (
        <>
            <div className={`${styles.bg_header} container flex justify-between items-center`}>
                <div>
                    <Image src={Logo} width={280} height={48} alt={"Logo Excursion"} />
                </div>
                <div className={`${styles.bg_header_list}`}>
                    <ul className="flex items-center gap-12">
                        <li><Link href="#">Idioma</Link></li>
                        <li><Link href="#">Carrinho</Link></li>
                        <li><Link href="#">Ajuda</Link></li>
                        <li><Link href="#">Login</Link></li>
                        <li>
                            <button>Criar Conta</button>
                        </li>
                    </ul>

                    <div className="flex items-center">
                        <button onClick={() => setOpen(!open)}>{IconMenu}</button>
                    </div>
                </div>
            </div>
            <div>
                <MenuSideBar open={open} setOpen={setOpen} />
            </div>
        </>
    )
}

export default Header;