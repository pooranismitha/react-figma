import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Glass3 from '../Images/background (3).png'
import './Dropdown.css'


const Dropdown = () => {
  return (
    <Container fluid>
  
    <Row className=''>
      <div className='easy-23'>
  <div className='mt-5' sm={12} >
   
    <Col  className='la-te-srt'></Col>
  <div className='fi-nds-we'>Find Out About The Latest Courses With The<br /> <span className='aca-rds'>Academy </span>Newsletter</div>
  <div className='ball'>
  <input className='emailinput' placeholder='Email Address....' />
  <button className='mall'>Submit</button>

</div>
  </div>
  </div>
 
  <Col></Col>
    </Row>
    </Container>
  
    
  )
}

export default Dropdown
 {/* <img className='la-te-srt' src={Glass3} alt='text' width={"96%"} ></img> */}