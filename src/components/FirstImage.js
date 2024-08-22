import React from 'react';
import FirstImagesrc from '../assets/img1.jpg'; // Adjust the path based on your folder structure

function FirstImage() {
  return (
    <div> 
    <img
        src={FirstImagesrc}
        className="img-fluid"
        alt="Descriptive Alt Text"
        style={{ padding: '200px' }} // Adjust padding as needed
      />
    </div>
  );
}

export default FirstImage;
