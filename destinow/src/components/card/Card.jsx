import Card from 'react-bootstrap/Card';
import { CiLocationOn } from 'react-icons/ci';
import './Card.css'

function Cards(props) {
    return (
        <>
            <Card className="prod-card-item">

                <Card.Img className="prod-card-img" variant="top" src={props.src} />
                <Card.Body>
                    <Card.Title>Salvador - BA</Card.Title>
                    <Card.Text className='prod-cardText'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna tellus, tristique in mi non, volutpat molestie nibh.

                        <ul className="prod-cardList">
                            <li className="cardList-item">Cras urna dui</li>
                            <li className="cardList-item">Scelerisque aliquam felis in</li>
                            <li className="cardList-item">Aliquet efficitur neque</li>
                            <li className="cardList-item">Proin eget rutrum mi</li>
                            <li className="cardList-item">Donec tincidunt nunc nec lorem efficitur iaculi</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='prod-cardFooter'>
                    <p className="text-muted">
                        <small className='smallLocal'><CiLocationOn />Brasil</small>

                        <small className='smallPrice'>{props.price}</small>
                    </p>
                </Card.Footer>
            </Card>
       </>
    );
}

export default Cards;