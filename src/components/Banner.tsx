import React from "react";

import Slider from 'react-slick';

import styles from '../../styles/Banner.module.css';

import Banner01 from '../img/banner/castelmezzano-gb02175fe7_1920 1.jpg';
import Banner02 from '../img/banner/AUNZ-header-1920x600.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function Banner() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className={`${styles.bg_banner} banner-home`}>
            <Slider {...settings}>
                <Image priority={true} src={Banner01} width={1920} height={600} alt="" />
                <Image src={Banner02} width={1920} height={600} alt="" />
            </Slider>
        </div>
    )
}

export default Banner;