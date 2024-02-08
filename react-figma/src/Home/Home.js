
import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Boyreact from '../Images/boyprof.jpg'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { FaRegBell } from "react-icons/fa";
import { SiKhanacademy } from "react-icons/si";
import Row from 'react-bootstrap/Row';
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import Academy3 from '../Images/academy (1).png'





const Home = () => {
  return (
    
      
        
<div className='nav-ers-23'>
      <Navbar expand="lg" className="bg-body-tertiary ">
        
        
        <Nav.Link href="#link"  className='academy'>
        
          </Nav.Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#link" ><SiKhanacademy className='SiKhanacademy-s' /> </Nav.Link>
            <Nav.Link href="#link" ><img src={Academy3}></img> </Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home" className="ms-3 h-50 ">
                Teach</Nav.Link>
               
                <Nav.Link  className="ms-3" href="#home"  >ContactUs</Nav.Link>
              <Nav.Link  className="ms-3" href="#home"  >AboutUs</Nav.Link>
              <Nav.Link href="#home">
              <InputGroup className="ms-5 h-50 ">
        <Form.Control
          placeholder="Search Anything"
          aria-label="Username"                        
          aria-describedby="basic-addon1"
        />
                <InputGroup.Text id="basic-addon1"><CiSearch /></InputGroup.Text>

      </InputGroup>
      </Nav.Link>
                               
      {/* <Nav.Link  className="ms-5" href="#home">
        <div className='boy-esr-98'>
        <img src={Boyreact} alt='text' width={"15%"} />
    Behzad pashaei<br />
   ui & ux designer
        </div>
         </Nav.Link> */}
            <Col className='boy-esr-98'><img src={Boyreact} className='boy-res-45 ml-3' /><div className='bes-hza'>Behzadpashaei
   ui&uxdesigner </div> </Col>
       <Col className='mt-3'>  <FaBell className='fabell-33 pr-3' /> </Col>
      
      
            </Nav>
           

            

            
          </Navbar.Collapse>
          
        
      </Navbar>
      </div>
      
    
  );
}

export default Home;

