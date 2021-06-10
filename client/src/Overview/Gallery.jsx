import React, { useState, useEffect } from 'react';
import Thumbnails from './Thumbnails.jsx';
import * as Styles from './styledComponents.js';

const Gallery = ({ images }) => {

  const [mainImageIndex, setMainImageIndex] = useState(0);

  return (
    <Styles.Gallery>
      <Styles.MainImage src={images[mainImageIndex].url} alt="An image of the currently selected style"/>
      <Thumbnails styleThumbnails={images} changeMainImage={setMainImageIndex}/>
    </Styles.Gallery>
  );

};

export default Gallery;
