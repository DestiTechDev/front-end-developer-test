import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Products.css'
import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import Cards from '../../card/Card';
import { Slide, Fade } from "react-awesome-reveal";

function Products() {

    return (
        <Container className="prod-container">
            <Row className="prod-row">

                <h1 className='titulo'>NOSSOS PACOTES</h1>
                <hr/>
                <Fade duration={2500}>
                    <Col className="prod-col">
                        <Carousel variant="dark" className="prod-carousel">
                            <Carousel.Item interval={1000} className="prod-car-item">
                                <CardGroup className="prod-card">
                                    <Cards src="./assets/card1.png" title="Salvador - BA" price="R$800,00" />
                                    <Cards src="./assets/card2.png" title="Angra dos Reis - RJ" price="R$640,00" />
                                    <Cards src="./assets/card3.png" title="São Paulo - SP" price="R$240,00" />
                                </CardGroup>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Fade>
            </Row>

            <Row className="prod-row">
                <h1 className='titulo-dois'>NOSSAS ATIVIDADES</h1>
                <hr/>
                <Fade><div className="prodDivImg">
                    <img src="./assets/img1.png" className='img' />
                    <img src="./assets/img2.png" className='img' />
                    <img src="./assets/img3.png" className='img' />
                    <img src="./assets/img4.png" className='img' />
                </div></Fade>
            </Row>
        </Container>
    );
}

export default Products;