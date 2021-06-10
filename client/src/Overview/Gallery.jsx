import React, { useState, useEffect } from 'react';
import Thumbnails from './Thumbnails.jsx';
import * as Styles from './styledComponents.js';
import leftArrow from './images/chevron-left.png';
import rightArrow from './images/chevron-right.png';

const Gallery = ({ images, productID }) => {

  const [mainImageIndex, setMainImageIndex] = useState(0);

  useEffect(() => {
    setMainImageIndex(0);
  }, [productID]);

  const scrollLeft = () => {
    if (mainImageIndex !== 0) {
      setMainImageIndex(prev => prev - 1);
    }
  };

  const scrollRight = () => {
    if (mainImageIndex !== images.length - 1) {
      setMainImageIndex(prev => prev + 1);
    }
  };

  return (
    <Styles.Gallery>
      <Styles.LeftArrow src={leftArrow} alt="Click here to scroll left" onClick={scrollLeft}/>
      <Styles.MainImage src={images[mainImageIndex].url} alt="An image of the currently selected style!"/>
      <Styles.RightArrow src={rightArrow} alt="Click here to scroll right" onClick={scrollRight}/>
      <Thumbnails styleThumbnails={images} imageIndex={mainImageIndex} changeMainImage={setMainImageIndex}/>
    </Styles.Gallery>
  );

};

export default Gallery;
