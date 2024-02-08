import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Design from '../Images/1-removebg 1.png'
import Round from '../Images/Ellipse 5.png'
import './Navbar.css'
import Button from 'react-bootstrap/Button';
import { IoMdArrowDropright } from "react-icons/io";


import { RiArrowDropRightLine } from "react-icons/ri";


const Navbar = () => {
  return (
    <Container>
    <Row className='title mt-5'>
    
      <Col md={6}><div className='course'>
  🙌 Hello Friends <br />I Am Sofia And We Want To Start A <span className='web'>Web Design</span> Course Together.<br />Do You Like It Too 😍 ?<br /><br />
 {/* <span className='startcourse'>Start Course Now<RiArrowDropRightLine /></span> */}
 <Button variant="dark" className='variant'>Start Course<IoMdArrowDropright />
      
       
       </Button>
</div></Col> 

      <Col md={6}> 
         <span className='laptop'> <img src={Design} alt='text' width="75%"></img></span>
         <span className='design'><img src={Round} alt='text' width="62%"></img></span>
        </Col>
        
        
    </Row>
  </Container>
  )
}

export default Navbar