import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Cart from './Cartbox';
import { NavLink } from "react-router-dom";



function Header() {
   
  

    return (
        <div>
            <header class="header" id='header'>
                <div className="container header-top">
                    <div className="header-top-offer">
                        <a href="/" className="links-offer">
                            <span>Heart of India restaurant is only taking phone orders</span>
                        </a>
                    </div>
                    <div className="header-top-nums">
                        <a href="tel:661-885-8210" class="links-item">661-885-8210</a> \
                        <a href="tel:661-836-0100" class="links-item"> 661-836-0100</a>
                    </div>
                </div>

                <hr />


                {/* ///####   HEADER MID    #####//// */}

                <div className='header-mid'>
                    <Navbar collapseOnSelect expand="lg" navbar="light">
                        <Container className='navbar-mid'>
                            <Navbar.Brand href="#home"><img src="https://websiteonlinedemo.com/hoi/image/catalog/flogo.png" title="HEART OF INDIA" alt="HEART OF INDIA" class="img-responsive" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />                         
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <NavLink className='nav-link' to='/' >Home 
                                    </NavLink>
                                    <NavLink className='nav-link' to='/Show'> View Menu </NavLink>
                                    <NavLink className='nav-link' to='/contact'>Contact Us </NavLink>
                                   
                                   
                                </Nav>
                            </Navbar.Collapse>

                          
        {/* <Cart/> */}
     



     

                        </Container>
                    </Navbar>

                </div>
            </header >         
        </div>
    )
}

export default Header
