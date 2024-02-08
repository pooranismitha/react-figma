import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCaretSquareLeft } from "react-icons/fa";
import { FaCaretSquareRight } from "react-icons/fa";
import './Topcourse.css'

const Topcourse = () => {
  return (
    <Container>   <Row className='mt-5'>
        <Col sm={12} md={11}className='mt-5 topcourse-1'>.TOP COURSES
        </Col>
        <Col xss={12} sm={1} className='mt-5'><FaCaretSquareLeft /><FaCaretSquareRight /></Col>
    </Row>
    
    </Container>
    
 
  )
}

export default Topcourse