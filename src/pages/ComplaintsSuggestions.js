import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/io';
import {Link} from 'react-router-dom'
import Footer from '../components/Footer';


const ComplaintsSuggestions = () => {
    return (
        <>
            <div>
                <Navbar bg="primary" expand="lg"  variant="dark">
                    <Navbar.Brand href="#home" style={{color:'white'}}><Link to='/mine' style={{ color:'white'}}><IoMdArrowRoundBack/></Link><span style={{marginLeft:'2px'}}>Complaints&Suggestions</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{padding:'20px'}}>
                        <Nav className="me-auto">
                            <Nav.Link  >COMPLETED</Nav.Link>
                            <Nav.Link >WAIT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <Footer/>
        </>
    )
}

export default ComplaintsSuggestions