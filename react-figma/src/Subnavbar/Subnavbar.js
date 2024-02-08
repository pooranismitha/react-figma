import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LuChevronsLeftRight } from "react-icons/lu";
import { CiPen } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { RiArrowDropRightLine } from "react-icons/ri";

import './Subnavbar.css'
const Subnavbar = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={12} className='md-3' >
          <Button  style={ 
                        { backgroundColor: "#EBFAF5",  
                          borderColor: "#EBFAF5" }} ><LuChevronsLeftRight style={ 
                            { backgroundColor: "#009E68",  
                              borderColor: "#009E68", 
                              }}/></Button>
          <Button className='bu-tt-on-43' variant="light">Python</Button>
          <Button className='bu-tt-on-43' variant="light">React</Button>
          <Button className='bu-tt-on-43'variant="light">Unity</Button>
          <Button className='bu-tt-on-43' variant="light"><CiPen  className='ci-pen-89'/></Button>
          <Button className='bu-tt-on-43' variant="light">UI&UX</Button>
          <Button className='bu-tt-on-43' variant="light">Vector</Button>
          <Button className='bu-tt-on-43'  style={ 
                        { backgroundColor: "#FFF5F5",  
                          borderColor: "#FFF5F5" }}><IoVideocamOutline className='IoVideocamOutline' /></Button>
          <Button className='bu-tt-on-43'variant="light">After Effects</Button>
          <Button className='bu-tt-on-43' variant="light">Lightroom</Button>
          <Button  className='bu-tt-on-43'variant="light">Photography</Button>
          <RiArrowDropRightLine className='r-ar-aow-'/>
          
          
          </Col>
        </Row>




      </Container>


    </div>
  )
}

export default Subnavbar