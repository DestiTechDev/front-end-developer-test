import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Packages.css'
import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import Cards from '../card/Card';
import { Fade } from "react-awesome-reveal";

import Packges1 from '../../images/packges1.png';
import Packges2 from '../../images/packges2.png';
import Packges3 from '../../images/packges3.png';

import Rectangle22 from '../../images/image22.png';
import Rectangle24 from '../../images/image24.png';
import Rectangle25 from '../../images/image25.png';
import Rectangle26 from '../../images/image26.png';

function Packages() {
    const [groupedCards, setGroupedCards] = useState([]);

    const cardsData = [
        { src: Packges1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna tellus, tristique in mi non, volutpat molestie nibh.", title: "Salvador - BA", price: "R$800,00" },
        { src: Packges2, description: "Sed condimentum justo enim, ut feugiat arcu aliquet id. Praesent auctor leo porta, tempus lacus sed, euismod elit. Ut tristique mollis massa et mattis.", title: "Angra dos Reis - RJ", price: "R$640,00" },
        { src: Packges3, description: "Etiam molestie scelerisque odio, in ultrices metus venenatis a. Phasellus accumsan, nisl ut vulputate consectetur, sapien metus luctus enim, sed interdum nulla est vitae risus.", title: "São Paulo - SP", price: "R$240,00"},
        { src: Packges1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna tellus, tristique in mi non, volutpat molestie nibh.", title: "Salvador - BA", price: "R$800,00" },
        { src: Packges2, description: "Sed condimentum justo enim, ut feugiat arcu aliquet id. Praesent auctor leo porta, tempus lacus sed, euismod elit. Ut tristique mollis massa et mattis.", title: "Angra dos Reis - RJ", price: "R$640,00" },
        { src: Packges3, description: "Etiam molestie scelerisque odio, in ultrices metus venenatis a. Phasellus accumsan, nisl ut vulputate consectetur, sapien metus luctus enim, sed interdum nulla est vitae risus.", title: "São Paulo - SP", price: "R$240,00" },
    ];

    // Hook de efeito para lidar com o redimensionamento da janela
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                const newGroupSize = 1;
                const newGroupedCards = [];
                for(let i = 0; i < cardsData.length; i += newGroupSize) {
                    newGroupedCards.push(cardsData.slice(i, i + newGroupSize));
                }
                setGroupedCards(newGroupedCards);
            } else {
                const newGroupSize = 3;
                const newGroupedCards = [];
                for(let i = 0; i < cardsData.length; i += newGroupSize) {
                    newGroupedCards.push(cardsData.slice(i, i + newGroupSize));
                }
                setGroupedCards(newGroupedCards);
            }
        }

        // Adicionando o listener de redimensionamento
        window.addEventListener('resize', handleResize);
        handleResize();

        // Limpa o listener no desmonte do componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container className="prod-container">
            <Row className="prod-row">
                <h1 className='titulo'>NOSSOS PACOTES</h1>
                <hr/>
                <Fade duration={2500}>
                    <Col className="prod-col">
                        <Carousel variant="dark" className="prod-carousel">
                            {groupedCards.map((group, index) => (
                                <Carousel.Item interval={5000} className="prod-car-item" key={index}>
                                    <CardGroup className="prod-card">
                                        {group.map((card, cardIndex) => (
                                            <Cards key={cardIndex} src={card.src} description={card.description} title={card.title} price={card.price} />
                                        ))}
                                    </CardGroup>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Fade>
            </Row>

            <Row className="prod-row">
                <h1 className='titulo-dois'>NOSSAS ATIVIDADES</h1>
                <hr/>
                <Fade>
                    <div className="prodDivImg">
                        <img src={Rectangle22} alt="Imagem 22" className="img" />
                        <img src={Rectangle24} alt="Imagem 24" className="img" />
                        <img src={Rectangle25} alt="Imagem 25" className="img" />
                        <img src={Rectangle26} alt="Imagem 25" className="img" />
                    </div>
                </Fade>
            </Row>
        </Container>
    );
}

export default Packages;
