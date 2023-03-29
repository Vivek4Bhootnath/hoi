import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Product.css';
import { useParams } from "react-router-dom";


function ImageGallery() {
  
 
  const { id } = useParams();


  const [xyz, setXyz] = useState({});
  

// console.log(id);

  useEffect(() => {

    const axiosP = async () => {
      const resp = await axios(`https://dummyjson.com/products/${id}`);
      setXyz(resp.data);
  };
  axiosP();

    },[id]);

    // const images1=(xyz.images);
    const images1=xyz.images;
    
    
    const [activeImage, setActiveImage] = useState(images1);
    // console.log(images1[1]);
    // console.log(xyz.images);
  
// console.log(images1);




  return (
    <div>
      <img src={activeImage} alt="Active" />
      <div className='grid'>
        {images1 && images1.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Gallery"
            onClick={() => setActiveImage(image)}
            className={activeImage === image ? 'active' :''}
          />
        ))}

      </div>
    </div>
  );
}
export default ImageGallery