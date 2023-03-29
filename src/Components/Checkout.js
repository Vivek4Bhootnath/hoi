// import React from 'react';
import './Cartbox.css';
import './Cart.css';
import './Checkout.css';
// import Button from 'react-bootstrap/Button';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Popover from 'react-bootstrap/Popover';
import React, { useEffect, useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Badge from "@mui/material/Badge";
import Button from 'react-bootstrap/Button';
// import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
// import Menu from "@mui/material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ADD, DELETE, REMOVE } from "../redux/actions/action";



function Checkout() {



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
    }, [id]);





    const [price, setPrice] = useState(0);
    // console.log('price:', price)

    const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
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
            return price = (ele.price * ele.qnty) + price;
        }, [total])
        setPrice(price);
    };

    useEffect(() => {
        total();
    }, [total]);



    return (
        <div className='container'>
        <div className='row Checkout-page'>
            <div className='col-md-5'>
                <div class="checkout-section section-login">
                    <div class="title section-title">
                        Login or Register</div>
                    <div class="section-body">
                        <div class="form-group login-options">
                            <div class="radio"><label>
                                <input type="radio" name="account" value="" />Login</label></div>
                            <div class="radio"><label>
                                <input type="radio" name="account" value="register" />Register</label></div>
                            <div class="radio"><label><input type="radio" name="account" value="guest" />Guest</label></div></div>
                        <div class="login-form"></div>
                    </div>
                </div>





                <div className='Entry-form'>
                {/* <div className='col-md-5 checkout-section'> */}
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">State</label>
                            <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputZip" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="inputZip" />
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                    </form>


                {/* </div> */}
            </div>





            </div>



            <div className='col-md-7'>
                {getData.length ? (
                    <div className="card_details" style={{ width: "100%", padding: 10 }}>
                        <h4 > Order Summery</h4>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Item Name</th>
                                    <th>Unit</th>
                                    <th>Total</th>
                                    <th>remove</th>
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
                                                <p className='tbl-data'  ><strong>{e.title}</strong></p>

                                            </td>
                                            <td>

                                                <p className='tbl-data' >Price :₹ {e.price}</p>

                                                <div
                                                    className="mt-3 d-flex justify-content-between align-items-center"
                                                    style={{
                                                        width: 90,
                                                        height: '30px', cursor: "pointer", background: "#ddd", color: "#111", borderRadius: '5px', margin: '0px'
                                                    }}
                                                >
                                                    <span className='qnty-btn' style={{ fontSize: 26 }} onClick={e.qnty <= 1 ? () => handleDelete(e.id) : () => removeOne(e)}>
                                                        -
                                                    </span>
                                                    <span style={{ fontSize: 18 }}>{e.qnty}</span>
                                                    <span className='qnty-btn' style={{ fontSize: 24 }} onClick={() => HandleAddCart(e)}>
                                                        +
                                                    </span>
                                                </div>



                                            </td>
                                            <td style={{ color: "black", alignItems: 'center', paddingTop: '35px', fontSize: 20, cursor: "pointer", textAlign: 'center' }} className="mt-5">

                                                <p className='tbl-data'>
                                                    ₹ {e.price * e.qnty}
                                                </p>


                                            </td>
                                            <td style={{ color: "red", fontSize: 20, cursor: "pointer", textAlign: 'center' }} className="mt-5">

                                                <p onClick={() => handleDelete(e.id)} style={{ color: "red", fontSize: 20, cursor: "pointer", alignItems: 'center', }}>
                                                    <i className="fas fa-trash smalltrash"></i>
                                                </p><ion-icon onClick={() => handleDelete(e.id)} name="trash-outline"></ion-icon>

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


            



            <div className='col-md-12 Shippingbox'>
                <h4>Payment Summery</h4>
                <Table>

                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>  <h5 className="text-center">Sub-Total:</h5>
                        </td>
                        <td>  <h5 className="text-center">₹ {price}</h5>
                        </td>
                    </tbody>
                    <tbody>
                        <td>  <h5 className="text-center">Delivery:</h5>
                        </td>
                        <td>  <h5 className="text-center">₹ _ _ _</h5>
                        </td>

                    </tbody>
                    <tbody>
                        <td>  <h5 className="text-center">Discount:</h5>
                        </td>
                        <td>  <h5 className="text-center">₹ _ _ _</h5>
                        </td>
                    </tbody>
                    <tbody>
                        <td>  <h5 className="text-center">Total:</h5>
                        </td>
                        <td>  <h5 className="text-center">₹ {price}</h5>
                        </td>
                    </tbody>
                    <tbody>
                        <td><NavLink to='/Show'><Button className='cart-btn' variant="dark" size="sm">Continue Shopping</Button></NavLink></td>
                        <td><NavLink to='/Payment'><Button className="cart-btn" variant="dark" size="sm">Pay Now</Button></NavLink></td>
                    </tbody>

                </Table>
            </div>

            </div>


        </div>
    )
}

export default Checkout
