import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { TbHomeRibbon } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import { BsGift } from 'react-icons/bs';
import './Security.css'
import Carousel from 'react-bootstrap/Carousel';
import CardIns from '../../card/CardIns';

function Insurance() {

  const [iconSize, setIconSize] = useState(120);

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 768 ? setIconSize(130) : setIconSize(100);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // alterar o tamanho do react-icon


  return (
    <Container className='container-ins' fluid>

      <Row className="firstRow">

        <div className="firstRow-div">
          <TbHomeRibbon size={iconSize} color='#4688F2' />
          <div className="rowFirstCard">
            <h6>MAIS DE 20 LOJAS</h6>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
          </div>
        </div>
        <div className="firstRow-div">
          <MdSecurity size={iconSize} color='#4688F2' />
          <div className="rowFirstCard">
            <h6>SEGURANÇA</h6>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
          </div>
        </div>
        <div className="firstRow-div">
          <BsGift size={iconSize} color='#4688F2' />
          <div className="rowFirstCard">
            <h6>OS MELHORES PREÇOS</h6>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
          </div>
        </div>

      </Row>

      <Row className='2ndRow'>
        <h5 className='2ndRow-title'>BLOG</h5>

        <Carousel>

          <Carousel.Item>
            <CardIns src=""/>
          </Carousel.Item>

          <Carousel.Item>
            <CardIns />
          </Carousel.Item>

          <Carousel.Item>
            <CardIns />
          </Carousel.Item>

        </Carousel>
      </Row>

      <Row>

      </Row>
    </Container>
  );
}

export default Insurance;