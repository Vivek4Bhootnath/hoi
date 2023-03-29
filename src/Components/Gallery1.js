import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Product.css';
import { useParams } from "react-router-dom";


function ImageGallery() {
  
  const { id } = useParams();

  const [xyz, setXyz] = useState([]);

  const [activeImage, setActiveImage] = useState();

  useEffect(() => {
    const axiosP = async () => {
      const resp = await axios.get(`https://dummyjson.com/products/${id}`);
      const data = resp.data;
      if (data.images) {
        const ImageZ = data.images[0].length > 0 ? data.images[0] : null;
        setXyz(data.images);
       
        setActiveImage(ImageZ); 
        
      }
    };
    axiosP();
  }, [id]);

  const images1 = xyz;
  
  return (
    <div>
      <img className="activeimg" src={activeImage} alt="Active" />
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

export default ImageGallery;
