import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/index.css';

const Item=({name,price,category,color,description,image,id})=>{
    return(
        <div class="mb-3">
            
        <Card style={{ width: '25rem', height:'35rem' }}>
        <Card.Img style={{height:'10rem'}} variant="top" src={image} />
        <Card.Body>
          {/* {image} */}
        <Card.Title>{name}</Card.Title>
        <br/>
        <Card.Text>
          <b>Description:</b>{description}
        </Card.Text>
        <Card.Text><b>Category: </b>{category}</Card.Text>
        <Card.Text><b>Color: </b>{color}</Card.Text>
        <Card.Text><b>Price: </b>{price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
        </div>

    );

}
export default Item;