import Card from 'react-bootstrap/Card';
import './css/About.css'
const About = ()=>{
    return(
        <div className="about">
            <h2 style={{textAlign:"center"}}>About Us</h2><br/>
            <div className="details" >
            <Card border="primary" style={{ width: '100%',alignContent:"center" }}>
            <Card.Body style={{fontFamily:"cursive", fontSize:"20px",textAlign:"center"}}><b>Quality service and Commitment to serve our customer is our goal.</b></Card.Body>
      <Card.Body><b><i>Namma nadu kart</i></b> is a E- commerce / website where you can shop the items from anywhere in concept of from sellers to buyer without moving to shop.Best for today's digital era.We supply the products directly from buyers to customer. </Card.Body>
        <Card.Body>Our goal is to make the buyer and seller happy and help local products to get market in national and international level.For agriculture and other related products we supply directly from <i>fields to your home</i>.</Card.Body>
    <Card.Body>Features:<ul><li>Door supply</li><li>Fare Price</li><li>Transperancy</li><li> Best Deals</li></ul></Card.Body>
    </Card>
    
            </div>
            
            
            

        </div>

    );

}
export default About;