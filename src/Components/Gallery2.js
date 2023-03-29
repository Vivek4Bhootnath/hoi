import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";


function ImageGallery({images}) {
  
  
  
const [activeImage, setActiveImage] = useState(images[0]);


  return (
    <div>
      <img src={activeImage} alt="Active" />
      <div className='grid'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Gallery"
            onClick={() => setActiveImage(image)}
            className={activeImage === image ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
}
export default ImageGallery