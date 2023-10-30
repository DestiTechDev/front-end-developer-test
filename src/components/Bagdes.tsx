import Location from "../assets/icons/casa.png";
import Security from "../assets/icons/seguranca.png";
import Price from "../assets/icons/preco.png";
import Image from "next/image";

import styles from '../../styles/Bagdes.module.css';

function Bagdes() { 
    return (
        <div className={`${styles.bg_bagdes} container`}>
            <div className="grid grid-cols-12">
                <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex justify-center">
                    <div className={`${styles.bg_bagdes_card} mb-10 lg:mb-0`}>
                        <Image src={Location} alt="" />
                        <div>
                            <h5>Mais de 20 lojas</h5>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex justify-center">
                    <div className={`${styles.bg_bagdes_card} mb-10 lg:mb-0`}>
                        <Image src={Security} alt="" />
                        <div>
                            <h5>Segurança</h5>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-12 lg:col-span-4 flex justify-center">
                    <div className={`${styles.bg_bagdes_card} mb-10 lg:mb-0`}>
                        <Image src={Price} alt="" />
                        <div>
                            <h5>Os Melhores Preços</h5>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bagdes;