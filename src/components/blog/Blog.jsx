import { useState, useEffect, useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Blog.css';
import Carousel from 'react-bootstrap/Carousel';
import CardAdd from '../card/CardAdd';
import CardGroup from 'react-bootstrap/CardGroup';
import { Fade } from "react-awesome-reveal";

import SecurityImg from '../../images/icons/securtity.svg';
import HomeImg from '../../images/icons/home.svg';
import GifImg from '../../images/icons/gif.svg';

import BlogImg1 from '../../images/blogImg1.png';
import BlogImg2 from '../../images/blogImg2.png';
import BlogImg3 from '../../images/blogImg3.png';

import BrandIcon1 from '../../images/icons/brand1.svg';
import BrandIcon2 from '../../images/icons/brand2.svg';
import BrandIcon3 from '../../images/icons/brand3.svg';
import BrandIcon4 from '../../images/icons/brand4.svg';
import BrandIcon5 from '../../images/icons/brand5.svg';

function Blog() {
  const [iconSize, setIconSize] = useState(120);
  const [groupedCards, setGroupedCards] = useState([]);

  const firstRowData = [
    { src: HomeImg, alt: "Home", title: "MAIS DE 20 LOJAS", text: "Contrary to popular belief, Lorem Ipsum is not simply random text." },
    { src: SecurityImg, alt: "Security", title: "SEGURANÇA", text: "Contrary to popular belief, Lorem Ipsum is not simply random text." },
    { src: GifImg, alt: "Gif", title: "OS MELHORES PREÇOS", text: "Contrary to popular belief, Lorem Ipsum is not simply random text." }
  ];

  const cardsData = useMemo(() =>[
    { src: BlogImg1, titulo: "The Best Trip", subtitulo: "01 de Julho, 2022 | 5 Comentários", texto: "The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal" },
    { src: BlogImg2, titulo: "The Best Trip", subtitulo: "20 de Agosto, 2022 | 2 Comentários", texto: "The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal" },
    { src: BlogImg3, titulo: "The Best Trip", subtitulo: "5 de Setembro, 2022 | 1 Comentários", texto: "The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal" },
    { src: BlogImg1, titulo: "The Best Trip", subtitulo: "01 de Julho, 2022 | 5 Comentários", texto: "The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal" },
    { src: BlogImg2, titulo: "The Best Trip", subtitulo: "20 de Agosto, 2022 | 2 Comentários", texto: "The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal" },
    { src: BlogImg3, titulo: "The Best Trip", subtitulo: "5 de Setembro, 2022 | 1 Comentários", texto: "The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal" }
  ], []);

  // Efeito para ajustar o tamanho dos ícones e agrupar cards conforme o tamanho da tela
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIconSize(130);

        const newGroupSize = 1;
        const newGroupedCards = [];
        for(let i = 0; i < cardsData.length; i += newGroupSize) {
          newGroupedCards.push(cardsData.slice(i, i + newGroupSize));
        }
        setGroupedCards(newGroupedCards);
      } else {
        setIconSize(100);

        const newGroupSize = 3;
        const newGroupedCards = [];
        for(let i = 0; i < cardsData.length; i += newGroupSize) {
          newGroupedCards.push(cardsData.slice(i, i + newGroupSize));
        }
        setGroupedCards(newGroupedCards);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    
 // Limpeza do evento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [cardsData]);

  return (
    <Container className='container-ins' fluid>
      <Fade>
        <Row className="firstRow">
          {firstRowData.map((item, index) => (
            <div className="firstRow-div" key={index}>
              <img width={iconSize} color='#4688F2' src={item.src} alt={item.alt} />
              <div className="rowFirstCard">
                <h6>{item.title}</h6>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </Row>
      </Fade>

      <Fade duration={2500}>
        <Row className='SndRow'>
          <div className="title">
            <h3 className='SndRow-title'>BLOG</h3>
            <hr />
          </div>
          <Carousel variant="dark" className='SndRow-carousel' indicators={false}>
            {groupedCards.map((group, index) => (
              <Carousel.Item className='SndRow-card' key={index}>
                <CardGroup className='SndRow-CG'>
                  {group.map((card, cardIndex) => (
                    <CardAdd key={cardIndex} src={card.src} titulo={card.titulo} subtitulo={card.subtitulo} texto={card.texto} />
                  ))}
                </CardGroup>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
      </Fade>

      <Fade>
        <Row className='thdRow'>
          <Carousel variant="dark" className='thdRow-carousel'>
            <Carousel.Item className='thdRow-card'>
              <CardGroup className='thdRow-CG'>
                <img src={BrandIcon1} alt="Brand Icon 1" />
                <img src={BrandIcon2} alt="Brand Icon 2" />
                <img src={BrandIcon3} alt="Brand Icon 3" />
                <img src={BrandIcon4} alt="Brand Icon 4" />
                <img src={BrandIcon5} alt="Brand Icon 5" />
              </CardGroup>
            </Carousel.Item>
            <Carousel.Item className='thdRow-card'>
              <CardGroup className='thdRow-CG'>
                <img src={BrandIcon1} alt="Brand Icon 1" />
                <img src={BrandIcon2} alt="Brand Icon 2" />
                <img src={BrandIcon3} alt="Brand Icon 3" />
                <img src={BrandIcon4} alt="Brand Icon 4" />
                <img src={BrandIcon5} alt="Brand Icon 5" />
              </CardGroup>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Fade>
    </Container>
  );
}

export default Blog;
