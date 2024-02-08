
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'; 
import {Container } from 'react-bootstrap';


const Mapfunction = () => {
  const listingCards = [
    { id: "1", image: "girlred.jpg" },
    { id: "2", image: "girlpink.jpg" },
    { id: "3", image: "girlco.jpg" },
    { id: "4", image: "girlred.jpg" },
    { id: "5", image: "girlpink.jpg" },
    { id: "6", image: "girlco.jpg" }
  ];

  const CustomCard = ({ image, id }) => (
    <Col md={4} key={id}>
      <Card style={{ width: '15rem' }}>
        <Card.Img src={require(`../Images/${image}`)} alt='text' />
        <Card.Body>
          <Card.Text>
            <span>Jon Kantner</span>
            <span>designer</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <Container>
    <div>
      <Row>
        {listingCards.slice(0, 3).map(({ image, id }) => (
          <CustomCard key={id} image={image} />
        ))}
      </Row>
      <Row>
        {listingCards.slice(3, 6).map(({ image, id }) => (
          <CustomCard key={id} image={image} />
        ))}
      </Row>
    </div>
    </Container>
  );
};

export default Mapfunction;


      
