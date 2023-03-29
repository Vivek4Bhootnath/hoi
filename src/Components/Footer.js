import React from 'react';
import './Footer.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Footer() {
  return (
    <div className='footer'>
      <div className='container-fluid footer-top'>
        <div className='container ft-inner'>
          <a href='/'>
            <img className='footer-logo' src='https://websiteonlinedemo.com/hoi/image/catalog/flogo.png' alt='footer-logo' />
          </a>
          <div className="newsbox">
          <InputGroup className="newsletter">
            <Form.Control
              placeholder="Enter Your Email.."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="secondary" id="button-addon2" bg='dark'>
              Subscribe
            </Button>
          </InputGroup>
          </div>
          <div className='ft-link'>
            <a href='/'><ion-icon name="logo-facebook"></ion-icon></a>
            <a href='/'><ion-icon name="logo-instagram"></ion-icon></a>
          </div>
        </div>

        {/* ######## Footer-mid ########### */}


      </div>
      <div className='container footer-mid'>
        <div className='row'>
          <div className='col-sm'>
            <h5>Information</h5>
            <hr />
            <ul>
              <li><a href="/">Our Service</a></li>
            </ul>
          </div>
          <div className='col-sm'>
            <h5>Customer Service</h5>
            <hr />
            <ul>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Site Map</a></li>
            </ul>
          </div>
          <div className='col-sm'>
            <h5>Specials</h5>

            <hr />
            <ul>
              <li><a href="/">Our Service</a></li>
              <li><a href="/">Wish List</a></li>
              <li><a href="/">View Cart</a></li>
            </ul>
          </div>

        </div>
      </div>
      <hr />
      <div className='container footer-bottom'>
        <p className='footer-text'>Developed by <a href='/'> InfiniteItSolution </a> HEART OF INDIA   &copy; {new Date().getFullYear()} </p>
      </div>
    </div>
  )
}

export default Footer
