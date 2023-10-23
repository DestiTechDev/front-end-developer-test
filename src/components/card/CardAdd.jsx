import Card from 'react-bootstrap/Card';
import "./CardAdd.css";

function CardAdd({ src, subtitulo, titulo, texto }) {
    return (
        <Card className='card-container'>
            <Card.Img className='card-img' src={src} />
            <Card.Body className='card-body'>
                <Card.Text className='card-subtitle'>{subtitulo}</Card.Text>
                <Card.Title className='card-title'>{titulo}</Card.Title>
                <Card.Text className='card-text'>
                    {texto}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardAdd;
