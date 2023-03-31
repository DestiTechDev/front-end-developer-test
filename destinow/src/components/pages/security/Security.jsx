import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TbHomeRibbon } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import { BsGift } from 'react-icons/bs';
import './Security.css'

function Insurance() {
  return (
    <Container fluid>

      <Row className="firstRow">
        
        <div className="firstRow-div">
            <TbHomeRibbon size={90} color='#4688F2'/>
            <div className="rowFirstCard">
                <h6>MAIS DE 20 LOJAS</h6>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            </div>
        </div>
        <div className="firstRow-div">
            <MdSecurity size={90} color='#4688F2'/>
            <div className="rowFirstCard">
                <h6>SEGURANÇA</h6>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            </div>
        </div>
        <div className="firstRow-div">
            <BsGift size={90} color='#4688F2'/>
            <div className="rowFirstCard">
                <h6>OS MELHORES PREÇOS</h6>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            </div>
        </div>

      </Row>

      <Row>
        <Col>1 of 1</Col>
      </Row>

      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}

export default Insurance;