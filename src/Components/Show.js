import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Show.css'
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { ADD } from "../redux/actions/action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Show() {



    // const { id } = useParams();
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    //   const [posts, setPosts] = useState([]);

    useEffect(() => {
        const axiosPosts = async () => {
            // const response = await axios('https://dummyjson.com/products');
            const response = await axios('https://websiteonlinedemo.com/hoi/index.php?route=api/productcategory');
            // setData(response.data.products);
            setData(response.data.categories);
            // console.log(response.data.categories);
        };
        axiosPosts();
    }, []);
    console.log(data);
    //   console.log("hwllo");





    const HandleAddCart = (data) => {

        dispatch(ADD(data));
        toast.success("This item is added to cart!");
    };
    return (


        <div className='container main-page'>
            <div className='heading-bar'>
                <h5>Our Menu</h5>
                <a className='heading-link' href='/'><ion-icon name="home-outline"></ion-icon>
                    / Our Menu</a>
            </div >

            <div className='menu'>
                <Container>
                    <Row>
                        <Col sm><a href='#popular eles'>Heart of India Popular items</a></Col>
                        <Col sm><a href='#Beverages'>Beverages</a></Col>
                        <Col sm><a href='#Breads'>Breads</a></Col>
                        <Col sm><a href='#Breakfast' >Breakfast</a></Col>
                        <Col sm><a href='#Burgers'>Burgers</a></Col>
                        <Col sm>
                            <Nav>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="More"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>\assessments
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav></Col>
                    </Row>
                </Container>



                <section id='Popular items'>
                    <h5 className='menu-heading'>Heart of India Popular items</h5>
                    <hr className='hr2' />
                    <div className='row features-box'>

                        {data.filter(data => data.category_id === '89').map((ele, index) => {

                            return (
                                <>
                                    {ele.products.map((pro, index) => {
                                        return (

                                            <div key={index} className='col-lg-5 features-item' href="https://websiteonlinedemo.com/hoi/index.php?route=product/quick_view&product_id=42">

                                                <NavLink to={`/details/${ele.id}`}> <img className='feature-img' src={pro.thumb} alt='...' /></NavLink>
                                                <div className='description' key={index}>
                                                    <NavLink to={`/details/${pro.id}`} ><h6 key={ele.index} className='quickbox'><b> {pro.name}</b></h6>
                                                        <p>{pro.description}</p>  </NavLink>
                                                    <div className='box-footer'>
                                                        <p className='price'>Price : ₹ {pro.price} </p>


                                                        <Button className='main-atc' variant="success"
                                                            onClick={() => HandleAddCart(ele)}
                                                            size="sm">Add to Cart</Button>

                                                    </div>
                                                </div>



                                            </div>


                                        )
                                    })}
                                </>
                            )
                        }
                        )}

                    </div>
                </section>

                <section id='Beverages'>
                    <h5 className='menu-heading'>Beverages</h5>
                    <hr className='hr2' />
                    <div className='row features-box'>

                        {data.filter(data => data.category_id === '74').map((ele, index) => {

                            return (
                                <>
                                    {ele.products.map((pro, index) => {
                                        return (


                                            <div key={index} className='col-lg-5 features-item' href="https://websiteonlinedemo.com/hoi/index.php?route=product/quick_view&product_id=42">




                                                <NavLink to={`/details/${ele.id}`}> <img className='feature-img' src={pro.thumb} alt='...' /></NavLink>
                                                <div className='description' key={index}>
                                                    <NavLink to={`/details/${pro.id}`} ><h6 key={ele.index} className='quickbox'><b> {pro.name}</b></h6>
                                                        <p>{pro.description}</p>  </NavLink>
                                                    <div className='box-footer'>
                                                        <p className='price'>Price : ₹ {pro.price} </p>


                                                        <Button className='main-atc' variant="success"
                                                            onClick={() => HandleAddCart(ele)}
                                                            size="sm">Add to Cart</Button>

                                                    </div>
                                                </div>



                                            </div>


                                        )
                                    })}
                                </>
                            )
                        }
                        )}

                    </div>
                </section>

                <section id='Breads'>
                    <h5 className='menu-heading'>Breads</h5>
                    <hr className='hr2' />
                    <div className='row features-box'>

                        {data.filter(data => data.category_id === '82').map((ele, index) => {

                            return (
                                <>
                                    {ele.products.map((pro, index) => {
                                        return (


                                            <div key={index} className='col-lg-5 features-item' href="https://websiteonlinedemo.com/hoi/index.php?route=product/quick_view&product_id=42">




                                                <NavLink to={`/details/${ele.id}`}> <img className='feature-img' src={pro.thumb} alt='...' /></NavLink>
                                                <div className='description' key={index}>
                                                    <NavLink to={`/details/${pro.id}`} ><h6 key={ele.index} className='quickbox'><b> {pro.name}</b></h6>
                                                        <p>{pro.description}</p>  </NavLink>
                                                    <div className='box-footer'>
                                                        <p className='price'>Price : ₹ {pro.price} </p>


                                                        <Button className='main-atc' variant="success"
                                                            onClick={() => HandleAddCart(ele)}
                                                            size="sm">Add to Cart</Button>

                                                    </div>
                                                </div>



                                            </div>


                                        )
                                    })}
                                </>
                            )
                        }
                        )}

                    </div>
                </section>

                <section id='Breakfast'>
                    <h5 className='menu-heading'>Breakfast</h5>
                    <hr className='hr2' />
                    <div className='row features-box'>

                        {data.filter(data => data.category_id === '88').map((ele, index) => {

                            return (
                                <>
                                    {ele.products.map((pro, index) => {
                                        return (


                                            <div key={index} className='col-lg-5 features-item' href="https://websiteonlinedemo.com/hoi/index.php?route=product/quick_view&product_id=42">




                                                <NavLink to={`/details/${ele.id}`}> <img className='feature-img' src={pro.thumb} alt='...' /></NavLink>
                                                <div className='description' key={index}>
                                                    <NavLink to={`/details/${pro.id}`} ><h6 key={ele.index} className='quickbox'><b> {pro.name}</b></h6>
                                                        <p>{pro.description}</p>  </NavLink>
                                                    <div className='box-footer'>
                                                        <p className='price'>Price : ₹ {pro.price} </p>


                                                        <Button className='main-atc' variant="success"
                                                            onClick={() => HandleAddCart(ele)}
                                                            size="sm">Add to Cart</Button>

                                                    </div>
                                                </div>



                                            </div>


                                        )
                                    })}
                                </>
                            )
                        }
                        )}

                    </div>
                </section>

                <section id='Burgers'>
                    <h5 className='menu-heading'>Burgers</h5>
                    <hr className='hr2' />
                    <div className='row features-box'>

                        {data.filter(data => data.category_id === '77').map((ele, index) => {

                            return (
                                <>
                                    {ele.products.map((pro, index) => {
                                        return (


                                            <div key={index} className='col-lg-5 features-item' href="https://websiteonlinedemo.com/hoi/index.php?route=product/quick_view&product_id=42">




                                                <NavLink to={`/details/${ele.id}`}> <img className='feature-img' src={pro.thumb} alt='...' /></NavLink>
                                                <div className='description' key={index}>
                                                    <NavLink to={`/details/${pro.id}`} ><h6 key={ele.index} className='quickbox'><b> {pro.name}</b></h6>
                                                        <p>{pro.description}</p>  </NavLink>
                                                    <div className='box-footer'>
                                                        <p className='price'>Price : ₹ {pro.price} </p>


                                                        <Button className='main-atc' variant="success"
                                                            onClick={() => HandleAddCart(ele)}
                                                            size="sm">Add to Cart</Button>

                                                    </div>
                                                </div>



                                            </div>


                                        )
                                    })}
                                </>
                            )
                        }
                        )}

                    </div>
                </section>

                <section id='Chaat Corner'>
                    <h5 className='menu-heading'>Chaat Corner</h5>
                    <hr className='hr2' />
                    <div className='row features-box'>

                        {data.filter(data => data.category_id === '57').map((ele, index) => {

                            return (
                                <>
                                    {ele.products.map((pro, index) => {
                                        return (


                                            <div key={index} className='col-lg-5 features-item' href="https://websiteonlinedemo.com/hoi/index.php?route=product/quick_view&product_id=42">




                                                <NavLink to={`/details/${ele.id}`}> <img className='feature-img' src={pro.thumb} alt='...' /></NavLink>
                                                <div className='description' key={index}>
                                                    <NavLink to={`/details/${pro.id}`} ><h6 key={ele.index} className='quickbox'><b> {pro.name}</b></h6>
                                                        <p>{pro.description}</p>  </NavLink>
                                                    <div className='box-footer'>
                                                        <p className='price'>Price : ₹ {pro.price} </p>


                                                        <Button className='main-atc' variant="success"
                                                            onClick={() => HandleAddCart(ele)}
                                                            size="sm">Add to Cart</Button>

                                                    </div>
                                                </div>



                                            </div>


                                        )
                                    })}
                                </>
                            )
                        }
                        )}

                    </div>
                </section>



            </div>
        </div>



    );


}

export default Show
