import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import { Button } from '../../button/Button';

function Home() {
    return (
        <Container className='home-container'>
            <Row className='home-row'>
                <Col className='home-col'>
                    <Carousel className="home-carrossel">
                        <Carousel.Item interval={1500} className='home-car-item'>
                            <img
                                className="d-block w-100"
                                src="https://travelness.com.br/wp-content/uploads/2017/05/66142-turismo-na-tailandia-5-razoes-conhecer-o-pais-em-2017.jpg"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item interval={1500} className='home-car-item'>
                            <img
                                className="d-block w-100"
                                src="https://www.vounajanela.com/wp-content/uploads/2020/04/chicken-krabi-tailandia.jpg"
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item interval={1500} className='home-car-item'>
                            <img
                                className="d-block w-100"
                                src="https://www.gov.br/turismo/pt-br/assuntos/noticias/municipios-devem-renovar-o-cadastro-para-continuar-participando-do-mapa-do-turismo/PortalMTur3.png/@@images/6f108e71-788b-4d13-9787-87f0e3e2cd79.png"
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
                                <option disabled selected>Destino</option>
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