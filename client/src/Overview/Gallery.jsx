import React, { useState, useEffect } from 'react';
import Thumbnails from './Thumbnails.jsx';
import * as Styles from './styledComponents.js';
import leftArrow from './images/chevron-left.png';
import rightArrow from './images/chevron-right.png';

const Gallery = ({ styleImages, productID }) => {

  const [thumbnailsStart, setThumbnailsStart] = useState(0);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [renderedThumbnails, setRenderedThumbnails] = useState([]);

  useEffect(() => {
    let leftArrow = document.querySelector('#leftArrow');
    mainImageIndex === 0 ? leftArrow.setAttribute('hidden', true) : leftArrow.toggleAttribute('hidden', false);
    let rightArrow = document.querySelector('#rightArrow');
    mainImageIndex === styleImages.length - 1 ? rightArrow.setAttribute('hidden', true) : rightArrow.toggleAttribute('hidden', false);
  }, [mainImageIndex]);


  useEffect(() => {
    setMainImageIndex(0);
  }, [productID]);

  useEffect(() => {
    setThumbnailsStart(0);
    setRenderedThumbnails(styleImages.slice(0, 7));
  }, [styleImages[0].url]);

  const scrollLeft = () => {
    if (mainImageIndex > 0) {
      if (mainImageIndex - 1 === thumbnailsStart && thumbnailsStart !== 0) {
        setRenderedThumbnails(styleImages.slice(thumbnailsStart - 1, thumbnailsStart + 6));
        setThumbnailsStart(prev => prev - 1);
      }
      imageSelect(mainImageIndex - 1);
    }
  };

  const scrollRight = () => {
    if (mainImageIndex < styleImages.length - 1) {
      if (mainImageIndex + 1 >= 6 && styleImages[thumbnailsStart + 7] !== undefined) {
        setRenderedThumbnails(styleImages.slice(thumbnailsStart + 1, thumbnailsStart + 8));
        setThumbnailsStart(prev => prev + 1);
      }
      imageSelect(mainImageIndex + 1);
    }
  };

  const imageSelect = (index) => {
    document.getElementById('thumbnail' + index).style.transform = 'scale(1.1)';
    document.getElementById('thumbnail' + mainImageIndex).style.transform = 'scale(0.8)';
    setMainImageIndex(index);
  };

  return (
    <Styles.Gallery>
      <Styles.LeftArrow src={leftArrow} alt="Click here to scroll left" id="leftArrow" onClick={scrollLeft}/>
      <Styles.MainImage src={styleImages[mainImageIndex].url} alt={styleImages[mainImageIndex].name}/>
      <Styles.RightArrow src={rightArrow} alt="Click here to scroll right" id="rightArrow" onClick={scrollRight}/>
      <Thumbnails styleImages={renderedThumbnails} imageIndex={mainImageIndex} changeMainImage={imageSelect}/>
    </Styles.Gallery>
  );

};

export default Gallery;
