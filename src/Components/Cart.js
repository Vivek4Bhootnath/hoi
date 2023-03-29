// import React from 'react';
import './Cartbox.css';
import './Cart.css';
// import Button from 'react-bootstrap/Button';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Popover from 'react-bootstrap/Popover';
import React, { useEffect, useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Badge from "@mui/material/Badge";
import Button from 'react-bootstrap/Button';
// import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ADD, DELETE, REMOVE } from "../redux/actions/action";
// import { textAlign } from '@mui/system';


function Cart() {



  // const navigate = useNavigate();
 

  // console.log("data:", data);
const savedItems = JSON.parse(localStorage.getItem('cart'));

// console.log(savedItems);

const [data, setData] = useState(savedItems);

  const { id } = useParams();
 


 
  const getData = useSelector((state) => state.cartR.carts);
  const dispatch = useDispatch();
// console.log(getData);

  useEffect(() => {
  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id === Number(id);
    });
    setData(compareData);
    localStorage.setItem('cart', JSON.stringify(getData));
  };
  compare();
}, [getData]);

 



  const [price, setPrice] = useState(0);
  // console.log('price:', price)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const HandleAddCart = (data) => {   
    dispatch(ADD(data));   
    
  };

  const removeOne = (Data) => {
    dispatch(REMOVE(Data));
  };

  const handleDelete = (id) => {
    dispatch(DELETE(id));
    // navigate("/");
    
  };
  const total = () => {
    let price = 0;
    getData.map((ele) => {
      return price = (ele.price*ele.qnty) + price;
    },[total])
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);
   


  return (
    <div className='cart-page'>
    <div className='row '>
      
       <div className='col-md-8'>
          {getData.length ? (
            <div className="card_details" style={{ width: "100%", padding: 10 }}>
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Item Name</th>
                    <th>Details</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((e, id) => {
                    return (
                      <tr key={id}>
                        <td>
                          <NavLink onClick={handleClose} to={`/details/${e.id}`}>
                            <img style={{ width: "5rem", height: "5rem" }} src={e.thumbnail} alt="img"></img>
                          </NavLink>
                        </td>
                        <td className='cart-tbl'> 
                          <p className='tbl-data' ><strong>{e.title}</strong></p>

                        </td>
                        <td>
                          <p className='tbl-data' >Price :₹ {e.price}</p>
                          <p className='tbl-data' >Quantity :{e.qnty}</p>
                          <p className='tbl-data'>
                            Total :₹ {e.price * e.qnty}
                          </p>
                         


                         
                        </td>
                        <td style={{ color: "red", fontSize: 20, cursor: "pointer", textAlign:'center' }}  className="mt-5">
                        
                          <div
                            className="mt-3 d-flex justify-content-between align-items-center"
                            style={{ width: 90, cursor: "pointer", background:"#ddd", color: "#111", borderRadius:'5px', margin:'0px' }}
                          >
                            <span className='qnty-btn' style={{ fontSize: 26 }} onClick={e.qnty <= 1 ? () => handleDelete(e.id) : () => removeOne(e)}>
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{e.qnty}</span>
                            <span className='qnty-btn' style={{ fontSize: 24 }} onClick={() => HandleAddCart(e)}>
                              +
                            </span>
                          </div>
                        </td>
                        <td style={{ color: "red", fontSize: 20, cursor: "pointer", textAlign:'center' }}  className="mt-5">

                        <p onClick={() => handleDelete(e.id)} style={{ color: "red", fontSize: 20, cursor: "pointer", alignItems:'center', }}>
                            <i className="fas fa-trash smalltrash"></i>
                          </p><ion-icon  onClick={() => handleDelete(e.id)} name="trash-outline"></ion-icon>

                        </td>
                      </tr>
                    );
                  })}

                
                  {/* <Button className='main-atc' variant="success" 
                                            size="sm">Check Out</Button> */}
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}
                onClick={handleClose}
              ></i>
              <p style={{ fontSize: 22 }}>Your Cart Is Empty</p>
              <img className="emptycart_img" style={{ width: "5rem", padding: 10 }} src="../Components/cart.png" alt="cart"></img>
            </div>
          )}
          {/* </Menu> */}
          </div>




          <div className='col-md-4 Shippingbox'>
          <h4>Shipping & Taxes</h4>
            <Table>
               
            <thead>
                  <tr>
                    <th>Sub-Total</th>
                    <th>Total</th>
                  </tr>
            </thead>
            <tbody>
              <td>  <h4 className="text-center">₹ {price}</h4>
            </td>
              <td>  <h4 className="text-center">₹ {price}</h4>
            </td>
            </tbody>
            <tbody>
         <td><NavLink to='/Show'><Button className='cart-btn' variant="dark" size="sm">Continue Shopping</Button></NavLink></td>
         <td><NavLink to='/Checkout'><Button className="cart-btn" variant="dark" size="sm">Checkout</Button></NavLink></td>
            </tbody>


            </Table>
          </div>
          </div>
    </div>
  )
}

export default Cart
