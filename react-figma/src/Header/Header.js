import React from 'react'
import { Container } from 'react-bootstrap'
import { IoSearchSharp } from "react-icons/io5";
import './Header.css'
import Button from 'react-bootstrap/Button';
import { CiSearch } from "react-icons/ci";
import Form from 'react-bootstrap/Form';

const Header = () => {
  return (
    <div>
      <Container>
    <div>
        <div>
            <div className='subnav'>Search Among <span className='subcontent'>58340</span> Courses And<br />Find Your Favorite Course</div>
        </div>
        <div className='navcontent'>
        <Button className='da-ius' variant="dark">Categories</Button>
        <div className="ms-3 h-50 pic-kage ">
        <Form.Control
          placeholder="Search Anything"
          aria-label="Username"                        
          aria-describedby="basic-addon1"
          
        />
                <div  className='ci-sea-r-ch'id="basic-addon1"><CiSearch /></div>
            
        </div>
        
       
          



    </div> 
    </div>
    </Container>
        

    </div>
  )
}

export default Header
 {/* <Button className="group-23"variant="light">
           <Button className='da-ius' variant="dark">Categories</Button>
           <span className='dark-12-3'>Search Anything</span>
           <CiSearch  className='light-32-23'/>
           
           </Button> */}
           {/* <div className='nav'><span className='navigation'>Categories</span><span className='box'>Search Anything</span><IoSearchSharp  className='sharp'/></div> */}
