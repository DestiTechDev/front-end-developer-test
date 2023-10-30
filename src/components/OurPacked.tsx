import Slider from 'react-slick';

import styles from '../../styles/OurPacked.module.css';

import Image01 from '../../src/img/Rectangle 22.jpg';
import Image02 from '../../src/img/Rectangle 24.jpg';
import Image03 from '../../src/img/Rectangle 27.jpg';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { IconLocation } from '../assets/icons';

function OurPacked() {
    const settings = {
        className: "center",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "80px",
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode: true,
                    centerPadding: "60px 60px 0 0",
                }
            }
        ]
    };

    return (
        <>
            <h2>Nossos Pacotes</h2>
            <hr className={`division_h2`} />

            <div className={`${styles.bg_our_packed} container`}>
                <Slider {...settings}>
                    <div className={`${styles.bg_spacing_card}`}>
                        <div className={`${styles.bg_card_our_packed}`}>
                            <Image src={Image01} width={400} height={260} alt="" />
                            <div className={`${styles.bg_card_text}`}>
                                <h5>Salvador - BA</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna tellus, tristique in mi non, volutpat molestie nibh.
                                </p>
                                <ul>
                                    <li>Cras urna dui</li>
                                    <li>Scelerisque aliquam felis in</li>
                                    <li>Aliquet efficitur neque</li>
                                    <li>Proin eget rutrum mi</li>
                                    <li>Donec tincidunt nunc nec lorem efficitur iaculi</li>
                                </ul>
                            </div>
                            <div className={`${styles.bg_card_price}`}>
                                <small>
                                    {IconLocation}
                                    Brasil
                                </small>
                                <p>
                                    R$ 800,00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.bg_spacing_card}`}>
                        <div className={`${styles.bg_card_our_packed}`}>
                            <Image src={Image02} width={400} height={260} alt="" />
                            <div className={`${styles.bg_card_text}`}>
                                <h5>Angra dos Reis - RJ</h5>
                                <p>
                                    Sed condimentum justo enim, ut feugiat arcu aliquet id. Praesent auctor leo porta, tempus lacus sed, euismod elit. Ut tristique mollis massa et mattis.
                                </p>
                                <ul>
                                    <li>Cras urna dui</li>
                                    <li>Scelerisque aliquam felis in</li>
                                    <li>Aliquet efficitur neque</li>
                                    <li>Proin eget rutrum mi</li>
                                    <li>Donec tincidunt nunc nec lorem efficitur iaculi</li>
                                </ul>
                            </div>
                            <div className={`${styles.bg_card_price}`}>
                                <small>
                                    {IconLocation}
                                    Brasil
                                </small>
                                <p>
                                    R$ 640,00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.bg_spacing_card}`}>
                        <div className={`${styles.bg_card_our_packed}`}>
                            <Image src={Image03} width={400} height={260} alt="" />
                            <div className={`${styles.bg_card_text}`}>
                                <h5>São Paulo - SP</h5>
                                <p>
                                    Etiam molestie scelerisque odio, in ultrices metus venenatis a. Phasellus accumsan, nisl ut vulputate consectetur, sapien metus luctus enim.
                                </p>
                                <ul>
                                    <li>Cras urna dui</li>
                                    <li>Scelerisque aliquam felis in</li>
                                    <li>Aliquet efficitur neque</li>
                                    <li>Proin eget rutrum mi</li>
                                    <li>Donec tincidunt nunc nec lorem efficitur iaculi</li>
                                </ul>
                            </div>
                            <div className={`${styles.bg_card_price}`}>
                                <small>
                                    {IconLocation}
                                    Brasil
                                </small>
                                <p>
                                    R$ 240,00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.bg_spacing_card}`}>
                        <div className={`${styles.bg_card_our_packed}`}>
                            <Image src={Image01} width={400} height={260} alt="" />
                            <div className={`${styles.bg_card_text}`}>
                                <h5>Salvador - BA</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna tellus, tristique in mi non, volutpat molestie nibh.
                                </p>
                                <ul>
                                    <li>Cras urna dui</li>
                                    <li>Scelerisque aliquam felis in</li>
                                    <li>Aliquet efficitur neque</li>
                                    <li>Proin eget rutrum mi</li>
                                    <li>Donec tincidunt nunc nec lorem efficitur iaculi</li>
                                </ul>
                            </div>
                            <div className={`${styles.bg_card_price}`}>
                                <small>
                                    {IconLocation}
                                    Brasil
                                </small>
                                <p>
                                    R$ 800,00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.bg_spacing_card}`}>
                        <div className={`${styles.bg_card_our_packed}`}>
                            <Image src={Image02} width={400} height={260} alt="" />
                            <div className={`${styles.bg_card_text}`}>
                                <h5>Angra dos Reis - RJ</h5>
                                <p>
                                    Sed condimentum justo enim, ut feugiat arcu aliquet id. Praesent auctor leo porta, tempus lacus sed, euismod elit. Ut tristique mollis massa et mattis.
                                </p>
                                <ul>
                                    <li>Cras urna dui</li>
                                    <li>Scelerisque aliquam felis in</li>
                                    <li>Aliquet efficitur neque</li>
                                    <li>Proin eget rutrum mi</li>
                                    <li>Donec tincidunt nunc nec lorem efficitur iaculi</li>
                                </ul>
                            </div>
                            <div className={`${styles.bg_card_price}`}>
                                <small>
                                    {IconLocation}
                                    Brasil
                                </small>
                                <p>
                                    R$ 640,00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.bg_spacing_card}`}>
                        <div className={`${styles.bg_card_our_packed}`}>
                            <Image src={Image03} width={400} height={260} alt="" />
                            <div className={`${styles.bg_card_text}`}>
                                <h5>São Paulo - SP</h5>
                                <p>
                                    Etiam molestie scelerisque odio, in ultrices metus venenatis a. Phasellus accumsan, nisl ut vulputate consectetur, sapien metus luctus enim.
                                </p>
                                <ul>
                                    <li>Cras urna dui</li>
                                    <li>Scelerisque aliquam felis in</li>
                                    <li>Aliquet efficitur neque</li>
                                    <li>Proin eget rutrum mi</li>
                                    <li>Donec tincidunt nunc nec lorem efficitur iaculi</li>
                                </ul>
                            </div>
                            <div className={`${styles.bg_card_price}`}>
                                <small>
                                    {IconLocation}
                                    Brasil
                                </small>
                                <p>
                                    R$ 240,00
                                </p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default OurPacked;