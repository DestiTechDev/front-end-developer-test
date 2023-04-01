import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CardIns(props) {
    return (
        <Card>
            <Card.Img src={props.src} />
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <Card.Text>
                    {props.texto}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardIns
    ;