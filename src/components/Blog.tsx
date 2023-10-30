import Slider from 'react-slick';

import styles from '../../styles/Blog.module.css';

import Image01 from '../../src/img/Rectangle 22 (2).jpg';
import Image02 from '../../src/img/Rectangle 23.jpg';
import Image03 from '../../src/img/Rectangle 24 (3).jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

function Blog() {
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
                breakpoint: 913,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
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
        <div className={`${styles.bg_blog} container`}>
            <h2>Blog</h2>
            <hr className={`division_h2`} />

            <Slider {...settings}>
                <div className={`${styles.bg_blog_card}`}>
                    <div className={`${styles.bg_blog_packed}`}>
                        <Image src={Image01} width={420} height={260} alt="" />
                        <div className={`${styles.bg_blog_text}`}>
                            <span>01 de Julho, 2022  |  5 Comentários</span>
                            <h3>The Best Trip</h3>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.bg_blog_card}`}>
                    <div className={`${styles.bg_blog_packed}`}>
                        <Image src={Image02} width={420} height={260} alt="" />
                        <div className={`${styles.bg_blog_text}`}>
                            <span>20 de Agosto, 2022  |  2 Comentários</span>
                            <h3>The Best Trip</h3>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.bg_blog_card}`}>
                    <div className={`${styles.bg_blog_packed}`}>
                        <Image src={Image03} width={420} height={260} alt="" />
                        <div className={`${styles.bg_blog_text}`}>
                            <span>15 de Setembro, 2022  |  1 Comentários</span>
                            <h3>The Best Trip</h3>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.bg_blog_card}`}>
                    <div className={`${styles.bg_blog_packed}`}>
                        <Image src={Image01} width={420} height={260} alt="" />
                        <div className={`${styles.bg_blog_text}`}>
                            <span>01 de Julho, 2022  |  5 Comentários</span>
                            <h3>The Best Trip</h3>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.bg_blog_card}`}>
                    <div className={`${styles.bg_blog_packed}`}>
                        <Image src={Image02} width={420} height={260} alt="" />
                        <div className={`${styles.bg_blog_text}`}>
                            <span>20 de Agosto, 2022  |  2 Comentários</span>
                            <h3>The Best Trip</h3>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.bg_blog_card}`}>
                    <div className={`${styles.bg_blog_packed}`}>
                        <Image src={Image03} width={420} height={260} alt="" />
                        <div className={`${styles.bg_blog_text}`}>
                            <span>15 de Setembro, 2022  |  1 Comentários</span>
                            <h3>The Best Trip</h3>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Blog;