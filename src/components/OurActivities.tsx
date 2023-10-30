import Image01 from '../../src/img/Atividades-1.jpg';
import Image02 from '../../src/img/Atividades-2.jpg';
import Image03 from '../../src/img/Atividades-3.jpg';
import Image04 from '../../src/img/Atividades-4.jpg';


import Image from 'next/image';

import styles from '../../styles/OurActivities.module.css';

function OurActivities() {

    return (
        <div style={{ marginTop: "4rem" }}>
            <h2>Nossas Atividades</h2>
            <hr className={`division_h2`} />

            <div className={`${styles.activities} container`}>
                <div className='grid grid-cols-12 gap-5 sm:gap-10'>
                    <div className='col-span-12 sm:col-span-6'>
                        <Image src={Image01} width={800} height={800} alt="Casal sorrindo olhando o pôr do sol" />
                    </div>
                    <div className='col-span-12 sm:col-span-6'>
                        <Image src={Image02} width={800} height={800} alt="Mulher olhando mapa da cidade" />
                    </div>
                    <div className='col-span-12 sm:col-span-6'>
                        <Image src={Image03} width={800} height={800} alt="Mulher bebendo aguá da fonte de um ponto turístico" />
                    </div>
                    <div className='col-span-12 sm:col-span-6'>
                        <Image src={Image04} width={800} height={800} alt="Mulher analisando um mapa completo turístico da cidade" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurActivities;