import React, { useEffect, useState } from "react";
// import Sticky from './Sticky';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import './Product.css';
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ADD} from "../redux/actions/action";
import axios from 'axios';
// import ImageGallery from 'react-image-gallery';
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageGallery from "./Gallery1";




function Product() {


    const { id } = useParams();
    const dispatch = useDispatch();
    const [ele, setData] = useState([]);

    const HandleAddCart = (data) => {   
        dispatch(ADD(data));   
        toast.success("This item is added to cart!");
      };


    useEffect(() => {
        const axiosPosts = async () => {
        const response = await axios(`https://websiteonlinedemo.com/hoi/index.php?route=api/productcategory/${id}`);
        setData(response.data);
        };
    axiosPosts();

      },[id]);

    //   console.log(ele);


      
       
   



    return (
        <div>
            {/* <Sticky /> */}
            <div className='container product'>          
                <div className='row' key={id}>
                    <div className='col-lg image-box'>
                        {/* <img className='product-img' src={ele.thumbnail} alt='product' /> */}



      {/* <ImageGallery 
      images={['https://picsum.photos/id/1018/1000/600/', 'https://picsum.photos/id/1015/1000/600/', 'https://picsum.photos/id/1019/1000/600/']} /> */}


       {/* <ImageGallery  id={id} /> */}


        <ImageGallery  /> 


                    </div>
                    <div className='col-lg detail-box'>
                        <div className='product-head'>
                            <img className='cetagory' src='https://websiteonlinedemo.com/hoi/image/cache/catalog/beverages/non-veg.png' alt='category' />
                            <h2>{ele.title}</h2>
                        </div>
                        <p>{ele.discription}</p>
                        <p className='price'><b>Price :₹ {ele.price}</b> </p>
                        <Form>
                            <Form.Label as="legend" column sm={4}><strong>
                                Spice level : </strong>
                            </Form.Label>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check inline label="Mild" name="group1" type={type} id={`inline-${type}-1`} />
                                    <Form.Check inline label="Medium" name="group1" type={type} id={`inline-${type}-2`} />
                                    <Form.Check inline name="group1" label="Spicy" type={type} id={`inline-${type}-3`} />
                                    <Form.Check inline name="group1" label="Extra Spicy" type={type} id={`inline-${type}-4`} />
                                </div>
                            ))}
                        </Form>

                        <InputGroup className='textarea'>
                            <InputGroup.Text>Special Instruction</InputGroup.Text>
                            <Form.Control as="textarea" aria-label="With textarea" />
                        </InputGroup>


                        {/* <ButtonGroup aria-label="Basic example">
                            <Button onClick={() => HandleAddCart(ele)} variant="primary">+</Button>
                            <p className='quantity'>{ele.qnty}</p>
                            <Button onClick={ele.qnty <= 1 ? () => handleDelete(ele.id) : () => removeOne(ele)} variant="primary">-</Button>
                        </ButtonGroup> */}
                        
                        <Button className='atc' variant="primary"  onClick={() => HandleAddCart(ele)} >Add to Cart</Button>

                    
                        <h5>Note :</h5>
                        <p>Now you can order on Phone

                            Call for takeaway- <a href='/'>(661) 885-8210,</a> <a href='/'>(661) 836-0100</a></p>

                    </div>
                   

                </div>
 

            </div>
        </div>
    )
}

export default Product
