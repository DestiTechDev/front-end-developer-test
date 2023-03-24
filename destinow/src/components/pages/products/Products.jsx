import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Products.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Products() {
    return (
        <Container className="prod-container">
            <Row className="prod-row">

                <h1>NOSSOS PACOTES</h1>
                <Col className="prod-col">
                    <Carousel className="prod-carousel">
                        <Carousel.Item interval={1000} className="prod-car-item">
                            <CardGroup className="prod-card">
                                <Card className="prod-card-item">
                    
                                    <Card.Img className="prod-card-img" variant="top" src=".\src\assets\card1.png" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card className="prod-card-item">
                                    <Card.Img className="prod-card-img" variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This card has supporting text below as a natural lead-in to
                                            additional content.{' '}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>

                                <Card className="prod-card-item">
                                    <Card.Img className="prod-card-img" variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This card has even longer content than the
                                            first to show that equal height action.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
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