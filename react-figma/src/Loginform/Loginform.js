import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Loginform.css'

const Loginform = () => {
  return (
    <Container>
        <Card>
       <Row> 
        <Col className='customer ml-2'>
        Customer information
        <Col className=''></Col>

        </Col>
       </Row>
       </Card>



    </Container>
  )
}

export default Loginform