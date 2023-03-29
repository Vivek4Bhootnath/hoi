// import React from 'react';
import './Cartbox.css';
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
    <div>
      

<Badge
          badgeContent={getData.length}
          color="primary"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <img className='cart' href='/'
                            src='https://img.icons8.com/external-icongeek26-glyph-icongeek26/512/external-cart-user-interface-icongeek26-glyph-icongeek26.png'
                            alt='cart'/>
        </Badge>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getData.length ? (
            <div className="card_details" style={{ width: "24rem", padding: 10 }}>
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Item Name</th>
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
                          <p className='tbl-data' >Price :₹ {e.price}</p>
                          <p className='tbl-data' >Quantity :{e.qnty}</p>
                          <p className='tbl-data'>
                            Total :₹ {e.price * e.qnty}
                          </p>
                         


                          <p onClick={() => handleDelete(e.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}>
                            <i className="fas fa-trash smalltrash"></i>
                          </p>
                        </td>
                        <td style={{ color: "red", fontSize: 20, cursor: "pointer", textAlign:'center' }}  className="mt-5">
                        <ion-icon  onClick={() => handleDelete(e.id)} name="trash-outline"></ion-icon>
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
                      </tr>
                    );
                  })}
<td>
                  <p className="text-center">Total: ₹ {price}</p>
                  </td>

                  <td className='cartbox-footer'>

                  <NavLink onClick={handleClose} to='/Cart'><Button className='main-atc' variant="dark" size="sm">View Cart</Button></NavLink>
                  
                  </td> 
                  <td>
                  <NavLink onClick={handleClose} to='/Checkout'> <Button className='main-atc' variant="dark" size="sm">Check Out</Button></NavLink>

                  </td>
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
              <img className="emptycart_img" style={{ width: "5rem", padding: 10 }} src="./cart.gif" alt="cart"></img>
            </div>
          )}
          </Menu>




    </div>
  )
}

export default Cart
