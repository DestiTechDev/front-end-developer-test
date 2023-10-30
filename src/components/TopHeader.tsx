import React from "react";

import styles from "../../styles/TopHeader.module.css";
import Link from "next/link";

function TopHeader() {
    return (
        <div className={`${styles.bg_top_header}`}>
            <ul className="flex justify-end container items-center h-full gap-5">
                <li><Link href="#">tour.support@gmail.com</Link></li>     |     
                <li><Link href="#">Sobre nós</Link></li>     |      
                <li><Link href="#">Contato</Link></li>      |      
                <li><Link href="#">Fotos</Link></li>
            </ul>
        </div>
    )
}

export default TopHeader;