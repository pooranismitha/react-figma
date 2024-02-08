import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Newfiles.css'
const Newfiles = () => {
  return (
    <Container>
    <Row className='mt-5 g-2'>
        <div className='sug-try'>
      <Col sm={12} md={7} className='mt-5 new-file-34'> .NEW COURSES</Col>
      <div className='six-fix' >  <Button variant="secondary">AllCourse</Button></div>
      <div className='six-fix'>Design</div>
      <div className='six-fix'>Development</div>
      <div className='six-fix'>Photography</div>
      <div className='six-fix'>Music</div>
      </div>
      {/* <Col sm={12} md={1} className='mt-5 ml-2' >   <Button variant="secondary">AllCourse</Button> </Col>
      <Col sm={12} md={1} className='mt-5 ' >Design</Col>
      <Col sm={12} md={1} className='mt-5 '>Development</Col>
      <Col sm={12} md={1} className='mt-5 '>Photography</Col>
      <Col sm={12} md={1} className='mt-5' >Music</Col> */}
    </Row>
  </Container>
   
  )
}

export default Newfiles