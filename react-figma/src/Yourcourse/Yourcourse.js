import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import'./Yourcourse.css'
import Button from 'react-bootstrap/Button';

const Yourcourse = () => {
  return (
    <Container>
    <Row className='mt-5'>
      <Col sm={12} md={10}className='mt-5 your-se'>YOURCOURSE</Col>
      <Col xs={12} sm={2} className='mt-5'><Button variant="secondary" className='se-cd-23'>See all</Button>{' '}</Col>
    </Row>
  </Container>
    
  )
}

export default Yourcourse