import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Forms from '../../form/Form';
import './Contact.css'

function Contact() {
  return (
    <Container fluid contact className='contact-container' >
      <Row>
        <Forms />
      </Row>
    </Container>
  );
}

export default Contact;