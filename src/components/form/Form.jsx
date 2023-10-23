import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import BackgroundImg from '../../images/Rectangle27.png';
import './Form.css';

const ContactForm = () => {
    const [validated, setValidated] = useState(false);

    const handleOnSubmit = (e) => {
        const form = e.currentTarget;

        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container fluid className='contact-container' style={{ backgroundImage: `url(${BackgroundImg})` }}>
            <Row>
                <Form 
                    fluid 
                    noValidate 
                    validated={validated} 
                    onSubmit={handleOnSubmit} 
                    className='form-container'
                >
                    <Fade duration={1500}>
                        <h3 className='form-h3'>ENTRE EM CONTATO CONOSCO</h3>
                        <hr/>
                        <Row className="mb-1">
                            <Form.Group className="mb-3" controlId="validationCustom01">
                                <Form.Control required type="text" placeholder="Seu nome" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="Email">
                                <Form.Control type="email" placeholder="Seu email" />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="Telefone">
                                <Form.Control type="tel" placeholder="Telefone" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group className="mb-3" controlId="Textarea">
                                <Form.Control as="textarea" rows={3} placeholder='Escreva sua mensagem (opcional)' />
                            </Form.Group>
                        </Row>
                        <Button type="submit">ENVIAR MENSAGEM</Button>
                    </Fade>
                </Form>
            </Row>
        </Container>
    );
}

export default ContactForm;
