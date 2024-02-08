import React from 'react'
import Boywork from '../Images/boyworkimage.jpg'
import { RiArrowDropRightLine } from "react-icons/ri";
import Gift from '../Images/girl3.jpg'
import Yellow from '../Images/points.png'
import { CgServerless } from "react-icons/cg";
import { MdContactPage } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { IoMdArrowDropright } from "react-icons/io";
import Container from 'react-bootstrap/Container';



const Addfilecard= () => {
  return (
    <Container >
<Row className='mt-4' >
  <Col  sm={12}  md={6} >
  <Row className='sub-class g-2'>
  <Col  sm={12}  md={5}>
  <img  src={Boywork} alt='text' className='rounded w-100 h-100'></img>
</Col>
<Col  sm={12}  md={7}>
<div >Google Ads Training 2021:Profit With Pay</div>
<Row>
  <Col sm={12} md={4} className='d-flex align-items-center'>
  <CgServerless />
  Lesson:6
  </Col>
  <Col sm={12} md={4} className='d-flex align-items-center'>
  <MdContactPage />
  Lesson:6
  </Col>
  <Col sm={12} md={4} className='d-flex align-items-center'>
  <GiTrophyCup />
  Lesson:6
  </Col>
</Row>
<img src={Yellow} alt='text' className='poi-nts'></img>
<div className='pai-nts-3'>Paints:75/100
    <div className='days-er'>Days:56</div></div>
    <div className='jon-3'>
      <img src={Gift}alt='text' className='w-25 h-25'>
        </img>
        <div className='kan-te-r'>Jon Kantner<br /> SEO</div>
        <Button className='class-we23' variant="dark">Let'sGo</Button>
     
</div>
</Col>
</Row>
  </Col>
  <Col  sm={12}  md={6}  >
  <Row className='sub-class g-2'>
  <Col  sm={12}  md={5}>
  <img  src={Boywork} alt='text' className='rounded w-100 h-100'></img>
</Col>
<Col  sm={12}  md={7}>
<div >Google Ads Training 2021:Profit With Pay</div>
<Row>
  <Col sm={12} md={4} className='d-flex align-items-center'>
  <CgServerless />
  Lesson:6
  </Col>
  <Col sm={12} md={4} className='d-flex align-items-center'>
  <MdContactPage />
  Lesson:6
  </Col>
  <Col sm={12} md={4} className='d-flex align-items-center'>
  <GiTrophyCup />
  Lesson:6
  </Col>
</Row>
<img src={Yellow} alt='text' className='poi-nts'></img>
<div className='pai-nts-3'>Paints:75/100
    <div className='days-er'>Days:56</div></div>
    <div className='jon-3'>
      <img src={Gift}alt='text' className='w-25 h-25'>
        </img>
        <div className='kan-te-r'>Jon Kantner<br /> SEO</div>
        <Button className='class-we23' variant="dark">Let'sGo</Button>
</div>
</Col>
</Row>
  </Col>
</Row>

    </Container>
    
  )
}
export default Addfilecard