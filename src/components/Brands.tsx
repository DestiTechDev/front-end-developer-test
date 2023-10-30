import styles from '../../styles/Brands.module.css';

import Slider from 'react-slick';

import Image01 from '../../src/img/Rectangle 37.png';
import Image02 from '../../src/img/Rectangle 38.png';
import Image03 from '../../src/img/Rectangle 39.png';
import Image04 from '../../src/img/Rectangle 40.png';
import Image05 from '../../src/img/Rectangle 41.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from 'next/image';

function Brands() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 913,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className={`${styles.bg_brands}`}>
            <div className={`${styles.bg_spacing_brands} container`}>
                <Slider {...settings}>
                    <div className={`${styles.bg_brands_card}`}>
                        <Image src={Image01} width={420} height={260} alt="" />
                    </div>
                    <div className={`${styles.bg_brands_card}`}>
                        <Image src={Image02} width={420} height={260} alt="" />
                    </div>
                    <div className={`${styles.bg_brands_card}`}>
                        <Image src={Image03} width={420} height={260} alt="" />
                    </div>
                    <div className={`${styles.bg_brands_card}`}>
                        <Image src={Image04} width={420} height={260} alt="" />
                    </div>
                    <div className={`${styles.bg_brands_card}`}>
                        <Image src={Image05} width={420} height={260} alt="" />
                    </div>
                    <div className={`${styles.bg_brands_card}`}>
                        <Image src={Image01} width={420} height={260} alt="" />
                    </div>
                    <div className={`${styles.bg_brands_card}`}>
                        <Image src={Image02} width={420} height={260} alt="" />
                    </div>
                    <div className={`${styles.bg_brands_card}`}>
                        <Image src={Image03} width={420} height={260} alt="" />
                    </div>
                    <div className={`${styles.bg_brands_card}`}>
                        <Image src={Image04} width={420} height={260} alt="" />
                    </div>
                    <div className={`${styles.bg_brands_card}`}>
                        <Image src={Image05} width={420} height={260} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Brands;