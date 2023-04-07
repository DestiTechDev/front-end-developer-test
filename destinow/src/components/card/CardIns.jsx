import Card from 'react-bootstrap/Card';
import "./CardIns.css"

function CardIns(props) {
    return (
        <Card className='card-container'>
            <Card.Img className='card-img' src={props.src} />
            <Card.Body className='card-body'>
                <Card.Title className='card-title'>{props.titulo}</Card.Title>
                <Card.Text className='card-text'>
                    {props.texto}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardIns
    