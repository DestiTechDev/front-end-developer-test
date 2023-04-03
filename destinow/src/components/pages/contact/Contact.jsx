import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Forms from '../../form/Form';
import './Contact.css'

function Contact() {
  return (
    <Container fluid contact className='contact-container' style={{backgroundImage: "url('/assets/rio40graus.jpg')"}} >
        <Row>
          <Forms />
        </Row>
    </Container>
  );
}

export default Contact;