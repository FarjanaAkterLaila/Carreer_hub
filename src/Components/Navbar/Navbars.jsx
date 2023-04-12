import React from 'react';
import './Navbars.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
    return (
        <div className='h-25 bg-light'>
   <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='fw-bolder fs-2 mx-5'>FutureCareer</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             
            <ActiveLink to="/Statistics" >Statistics</ActiveLink>
            <ActiveLink to="/Applied Jobs" >Applied Jobs</ActiveLink>
            <ActiveLink to="/Blog">Blog</ActiveLink> 
            
          </Nav>
          <button className="btnwe fw-bolder fs-5 text-white mx-5">Star Applying</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navbars;