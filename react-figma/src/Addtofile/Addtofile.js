import React from 'react'
import Domlap from '../Images/download.jpg'
import Card from 'react-bootstrap/Card';
import { RiArrowDropRightLine } from "react-icons/ri";
import Score from '../Images/Score.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CgServerless } from "react-icons/cg";
import { MdContactPage } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import Button from 'react-bootstrap/Button';
import { IoMdArrowDropright } from "react-icons/io";

const Addtofile = () => {
  return (
    <div className='add-to-file'>
    
        <Container>
        <Row md={4} className='mt-3' >
        <Col >
        <Card  className='card-view'>
      <Card.Img src={Domlap} alt='text' />
      <Card.Body>
        
        
          <span className='figma-card'>Learn Figma - UI/UX Design Essential Training</span><br />
          <div className='md-contact-page-78'>
          <div className='lesson-s'><CgServerless />Leason:6</div><div className='student-s'><MdContactPage />Student:198</div><div className='beginner-s'><GiTrophyCup />Beginner</div></div><br /><br />
          <div className='le-ss-ons-43'>
          {/* <div className='lessons-2'>Start Course<RiArrowDropRightLine  className='ri-45-ar-34'/></div> */}
          <Button variant="dark" className='variant'>StartCourse<IoMdArrowDropright />
      
       
       </Button>
          <div className='score-2'><img src={Score} alt='text'></img></div>
          </div>
        
        
      </Card.Body></Card></Col>

      <Col >
        <Card  className='card-view'>
      <Card.Img src={Domlap} alt='text' />
      <Card.Body>
        
        
          <span className='figma-card'>Learn Figma - UI/UX Design Essential Training</span><br />
          <div className='md-contact-page-78'>
          <div className='lesson-s'><CgServerless />Leason:6</div><div className='student-s'><MdContactPage />Student:198</div><div className='beginner-s'><GiTrophyCup />Beginner</div></div><br /><br />
          <div className='le-ss-ons-43'>
          {/* <div className='lessons-2'>Start Course<RiArrowDropRightLine  className='ri-45-ar-34'/></div> */}
          <Button variant="dark" className='variant'>StartCourse<IoMdArrowDropright />
      
       
       </Button>
          <div className='score-2'><img src={Score} alt='text'></img></div>
          </div>
        
        
      </Card.Body></Card></Col>
      <Col >
        <Card  className='card-view'>
      <Card.Img src={Domlap} alt='text' />
      <Card.Body>
        
        
          <span className='figma-card'>Learn Figma - UI/UX Design Essential Training</span><br />
          <div className='md-contact-page-78'>
          <div className='lesson-s'><CgServerless />Leason:6</div><div className='student-s'><MdContactPage />Student:198</div><div className='beginner-s'><GiTrophyCup />Beginner</div></div><br /><br />
          <div className='le-ss-ons-43'>
          {/* <div className='lessons-2'>Start Course<RiArrowDropRightLine  className='ri-45-ar-34'/></div> */}
          <Button variant="dark" className='variant'>StartCourse<IoMdArrowDropright />
      
       
       </Button>
          <div className='score-2'><img src={Score} alt='text'></img></div>
          </div>
        
        
      </Card.Body></Card></Col>
        <Col><Card  className='card-view' >
      <Card.Img src={Domlap} alt='text' />
      <Card.Body>
        
      <span className='figma-card'>Learn Figma - UI/UX Design Essential Training</span><br />
          <div className='md-contact-page-78'>
          <div className='lesson-s'><CgServerless />Leason:6</div><div className='student-s'><MdContactPage />Student:198</div><div className='beginner-s'><GiTrophyCup />Beginner</div></div><br /><br />
          <div className='le-ss-ons-43'>
          {/* <div className='lessons-2'>Start Course<RiArrowDropRightLine  className='ri-45-ar-34'/></div> */}
          <Button variant="dark" className='variant'>Start Course<IoMdArrowDropright />
      
       
       </Button>
          <div className='score-2'><img src={Score} alt='text'></img></div>
          </div>
        
        
      </Card.Body></Card></Col>
      </Row>
    
    </Container>
    </div>
    
    )
  }



export default Addtofile