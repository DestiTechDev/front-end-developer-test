import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import  Button  from '../button/Button';

import './Home.css';
import Image from '../../images/headerImage.png';
import ImageDestino from '../../images/destination 1.png'; 
import ImageAtividade from '../../images/activities 1.png'; 
import ImageDuracao from '../../images/duration 1.png'; 
import ImageConsulta from '../../images/budget 1.png';

const CAROUSEL_IMAGES = [Image, Image, Image];

const DropdownOption = ({ id, image, altText, text, items }) => (
  <div>
    <Dropdown className="custom-dropdown">
      <Dropdown.Toggle variant="custom-select" id={id}>
        <img src={image} alt={altText} /> <span className="custom-text">{text}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className={id === 'dropdown-consulta' ? 'wide-dropdown' : ''}>
        {items.map(item => <Dropdown.Item key={item}>{item}</Dropdown.Item>)}
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

function Home() {
  return (
    <Container fluid className="home-container">
      
      <Row className="home-row">
        <Col className="home-col">
          <Carousel className="home-carrossel" indicators={false}>
            {CAROUSEL_IMAGES.map((img, idx) => (
              <Carousel.Item key={idx} interval={1500} className="home-car-item">
                <img className="d-block" src={img} alt={`Slide ${idx + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      <Row className="home-row dois">
        <Col className="home-col">
          <div className="home-select">
            
            <DropdownOption
              id="dropdown-destino"
              image={ImageDestino}
              altText="Destino"
              text="Destino"
              items={['Rio de Janeiro', 'São Paulo', 'Salvador']}
            />
            
            <DropdownOption
              id="dropdown-atividade"
              image={ImageAtividade}
              altText="Atividade"
              text="Atividade"
              items={['Praia', 'Montanha', 'Cidade']}
            />

            <DropdownOption
              id="dropdown-duracao"
              image={ImageDuracao}
              altText="Duração"
              text="Duração"
              items={['1 semana', '2 semanas', '1 mês']}
            />

            <DropdownOption
              id="dropdown-consulta"
              image={ImageConsulta}
              altText="Consulta"
              text="Consulta"
              items={['Por preço', 'Por popularidade', 'Por avaliação']}
            />

            <div className="button-search">
              <Button buttonStyle={'meu-btn--primary-border'} buttonSize={'meu-btn--medium'}>
                PESQUISAR
              </Button>
            </div>

          </div>
        </Col>
      </Row>
      
    </Container>
  );
}

export default Home;
