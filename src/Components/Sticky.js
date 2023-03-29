import React from 'react';
import Cart from './Cartbox';
import './Sticky.css';
import { NavLink } from "react-router-dom";

function Sticky() {
  return (
    
        <div className='container-fluid sticky'>
               <div className=" header-bottom">
                    <div className='container inner-bottom'>
                       <NavLink to='/Show'> <button className='header-button'>View Our Menu</button></NavLink>
                        <div className="header-bottom-nums">
                        <a href="tel:661-885-8210" class="links-item">Call for Takeaway Orders - 661-885-8210, </a>
                        <a href="tel:661-836-0100" class="links-item"> 661-836-0100</a>
                       
                    </div>
                     <Cart/>
                    </div>
                </div>
         </div>
  )
}

export default Sticky
