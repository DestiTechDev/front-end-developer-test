import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';import './Form.css'
import { Button } from '../button/Button';
import { Fade } from "react-awesome-reveal";

function Forms() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
            <Form fluid noValidate validated={validated} onSubmit={handleSubmit} className='form-container'>
                <Fade duration={1500}>
                    <h3 className='form-h3'>ENTRE EM CONTATO CONOSCO</h3>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Seu nome"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Seu email" />
                        </Form.Group>
                    
                        <Form.Group as={Col} md="6" controlId="formBasicTelefone">
                            <Form.Control type="tel" placeholder="Telefone" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder='Escreva sua mensagem (opcional)' />
                        </Form.Group>
                    </Row>
                    <Button type="submit" buttonStyle={'meu-btn--primary-border'} buttonSize={'meu-btn--medium'}>ENVIAR MENSAGEM</Button>
                </Fade>
            </Form>
    );
}

export default Forms