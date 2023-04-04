import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const TopCarousal = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./images/offer1.jpg"
        alt="First slide"
        width={400} height={400}
      />
      {/* <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block  w-100 "
        src="./images/laptop1.jpg"
        alt="Second slide"
         height={400}
      />

      <Carousel.Caption>
        <h3 style={{color:"black", fontFamily:"cursive"}}>Best Offers on Laptop</h3>
        <p>Flat 20 - 30% off on your dream laptop.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./images/cloth.jpg"
        alt="Third slide"
        width={400} height={400}
      />

      <Carousel.Caption>
      <h3 style={{color:"black", fontFamily:"cursive"}}>Best Offers on Clothes</h3>
      <p>Flat 10 - 20% off on your favorite clothes.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default TopCarousal