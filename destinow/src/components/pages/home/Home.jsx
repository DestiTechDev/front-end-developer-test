import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import { Button } from '../../button/Button';
import { RiMapFill } from 'react-icons/ri'


function Home() {

    const destino = (
        <>
          <RiMapFill />
          <span>Destino</span>
        </>
      );

    return (
        <Container className='home-container'>
            <Row className='home-row'>
                <Col className='home-col'>
                    <Carousel className="home-carrossel">
                        <Carousel.Item interval={1500} className='home-car-item'>
                            <img
                                className="d-block w-100"
                                src="https://images.mnstatic.com/f0/41/f041ccf7a92e2ba712b77ca0f701bf25.jpg"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item interval={1500} className='home-car-item'>
                            <img
                                className="d-block w-100"
                                src="https://www.carroaluguel.com/blog/wp-content/uploads/2016/04/turismo-rio-de-janeiro.jpg"
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item interval={1500} className='home-car-item'>
                            <img
                                className="d-block w-100"
                                src="https://marinhoturismobuzios.com.br/wp-content/uploads/2019/02/hoteis1.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel></Col>
            </Row>

            <Row className='home-row dois'>
                
                <Col className='home-col'>
                    <div className='home-select'>
                        <div>
                            <select>
                                <option disabled selected>{destino}</option>
                                <option value="Rio de Janeiro">Rio de Janeiro</option>
                                <option value="São Paulo">São Paulo</option>
                                <option value="Salvador">Salvador</option>
                            </select>
                        </div>
                        <div>
                            <select>
                                <option disabled selected>Atividade</option>
                                <option value="Praia">Praia</option>
                                <option value="Montanha">Montanha</option>
                                <option value="Cidade">Cidade</option>
                            </select>
                        </div>
                        <div>
                            <select>
                                <option disabled selected>Duração</option>
                                <option value="1 semana">1 semana</option>
                                <option value="2 semanas">2 semanas</option>
                                <option value="1 mês">1 mês</option>
                            </select>
                        </div>
                        <div>
                            <select>
                                <option disabled selected>Consulta</option>
                                <option value="Por preço">Por preço</option>
                                <option value="Por popularidade">Por popularidade</option>
                                <option value="Por avaliação">Por avaliação</option>
                            </select>
                        </div>
                        <div className="button-search">
                            <Button buttonStyle={'meu-btn--primary-border'} buttonSize={'meu-btn--medium'}>PESQUISAR</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;