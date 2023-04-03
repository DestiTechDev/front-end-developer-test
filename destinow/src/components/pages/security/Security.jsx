import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { TbHomeRibbon } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import { BsGift } from 'react-icons/bs';
import './Security.css'
import Carousel from 'react-bootstrap/Carousel';
import CardIns from '../../card/CardIns';
import CardGroup from 'react-bootstrap/CardGroup';
import { Slide, Fade } from "react-awesome-reveal";

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

      <Slide direction='left'>
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
      </Slide>

      <Fade duration={2500}>
        <Row className='SndRow'>
          <div className="title">
            <h3 className='SndRow-title'>BLOG</h3>
            <hr/>
          </div>
          <Carousel variant="dark" className='SndRow-carousel'>
            <Carousel.Item className='SndRow-card'>
              <CardGroup className='SndRow-CG'>
                <CardIns src="assets/rec1.png" titulo="The Best Trip" texto="The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal" />
                <CardIns src="assets/rec2.png" titulo="The Best Trip" texto="The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal" />
                <CardIns src="assets/rec3.png" titulo="The Best Trip" texto="The point of using Lorem Ipsum is that it has a more-or-less normal. The point of using Lorem Ipsum is that it has a more-or-less normal" />
              </CardGroup>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Fade>

      <Row>
      <Fade duration={2500}>
        <Row className='thdRow'>
          <Carousel variant="dark" className='thdRow-carousel'>
            <Carousel.Item className='thdRow-card'>
              <CardGroup className='thdRow-CG'>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </CardGroup>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Fade>
      </Row>
    </Container>
  );
}

export default Insurance;