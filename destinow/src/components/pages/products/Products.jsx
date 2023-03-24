import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Products.css'
import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import Cards from '../../card/Card';

function Products() {
    return (
        <Container className="prod-container">
            <Row className="prod-row">

                <h1>NOSSOS PACOTES</h1>
                <Col className="prod-col">
                    <Carousel variant="dark" className="prod-carousel">
                        <Carousel.Item interval={1000} className="prod-car-item">
                            <CardGroup className="prod-card">
                                <Cards src=".\src\assets\card1.png" price="R$800,00" />
                                <Cards src=".\src\assets\card2.png" price="R$640,00"/>
                                <Cards src=".\src\assets\card3.png" price="R$240,00"/>
                            </CardGroup>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row className="prod-row">
                <Col className="prod-col">1 of 3</Col>
                <Col className="prod-col" xs={5}>2 of 3 (wider)</Col>
                <Col className="prod-col" >3 of 3</Col>
            </Row>
        </Container>
    );
}

export default Products;