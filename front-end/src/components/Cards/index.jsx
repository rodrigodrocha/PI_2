
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./styles.css";

function Cards({imgs, title, preco}) {
    return (
        <Card>
            <img
            className="d-block w-100 carouselImg2"
            src={imgs}
            alt="Produto"
          />
            <Card.Body>
                <div className='descricao-produto'>
                <Card.Title className='title'>{title}</Card.Title>
                <Card.Text className='preco'> {preco}</Card.Text>
                </div>
                <div className='buttons'>
                <Button variant="primary" className='text'>adicionar ao carrinho</Button>
                <Button variant="primary" className='text'>Comprar</Button>
                </div>

            </Card.Body>
        </Card>
    );
}

export default Cards;