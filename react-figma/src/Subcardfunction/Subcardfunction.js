
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Subcardfunction.css';
import Button from 'react-bootstrap/Button';
import { IoMdArrowDropright } from 'react-icons/io';
import Line from '../Images/background (2).png';
import Card from 'react-bootstrap/Card';
import Boyline from '../Images/boypen.jpg'
import Girlpink from '../Images/girlpink.jpg'




const Subcardfunction = () => {
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
      <Card style={{ width: '15rem', position:'relative' ,marginLeft:'60px' ,Gap:'26'}}>
        <Card.Img src={require(`../Images/${image}`)} alt='text' />
        <Card.Body>
          <Card.Text>
            <span>Jon Kantner</span>
            <span className='de-ytw-qw'>designer</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
  
 

  

  return (
    <Container>
      <Row className='mt-5'>
        <Col xl={3} className='best mt-5'>
          Best Instructors
          <Col className='academy'>At The Academy , We Strive To Bring Together The Best <br />Professors For The Best Courses</Col>
          <Button variant="dark" className='variant'>
            All Instructors<IoMdArrowDropright />
          </Button>
        </Col>
        <Col xl={9} className='mt-5'>
          <img src={Line} alt='text' style={{position:'absolute', marginTop:'80px', width:'65%'}}/>
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
         
        </Col>
      </Row>
    </Container>
  );
};

export default Subcardfunction;