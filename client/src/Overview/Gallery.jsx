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
    document.getElementById('thumbnail' + index).style.boxShadow = '0px 0px 0px 5px #808080';
    document.getElementById('thumbnail' + mainImageIndex).style.boxShadow = 'none';
    setMainImageIndex(index);
  };

  const openExpandedView = (event) => {

    let body = document.querySelector('body');
    let html = document.documentElement;
    body.style.margin = '0px';
    body.style.height = '100%';
    body.style.overflow = 'hidden';
    html.style.margin = '0px';
    html.style.height = '100%';
    html.style.overflow = 'hidden';

    let img = document.querySelector('#mainImg');
    let imgStyles = img.style;

    let imgDiv = document.querySelector('#imgWrapper');
    let imgDivStyles = imgDiv.style;

    let thumbnails = document.querySelector('#thumbnails');
    let thumbnailsStyles = thumbnails.style;

    let leftArrow = document.querySelector('#leftArrow');
    let leftArrowStyles = leftArrow.style;

    let rightArrow = document.querySelector('#rightArrow');
    let rightArrowStyles = rightArrow.style;

    imgDivStyles.position = 'fixed';
    imgDivStyles['z-index'] = 2;
    imgDivStyles.height = '100vh';
    imgDivStyles.width = '100vw';
    imgDivStyles.backgroundColor = 'black';
    imgDivStyles.top = '-38px';
    imgDivStyles.left = '0px';

    imgStyles['max-width'] = '90vw';
    imgStyles.height = '80vh';

    thumbnailsStyles['z-index'] = 2;
    thumbnailsStyles['flex-direction'] = 'row';
    thumbnailsStyles.position = 'relative';
    thumbnailsStyles.top = '91%';
    thumbnailsStyles.left = '285%';

    leftArrow['background-color'] = 'white';
    leftArrow['z-index'] = '3px';
    leftArrow['border-radius'] = '5px';
    leftArrow.position = 'fixed';
    leftArrow.top = '802px';
    leftArrow.left = '641px';

  };

  const closeExpandedView = () => {

  };

  const trackMouse = () => {

  };

  return (
    <Styles.Gallery>

      <Styles.LeftArrow src={leftArrow} alt="Click here to scroll left" id="leftArrow" onClick={(event) => scrollLeft(event)}/>

      <Styles.MainImgWrapper id="imgWrapper">

        <Styles.MainImg src={styleImages[mainImageIndex].url} id="mainImg" alt={styleImages[mainImageIndex].name} onClick={openExpandedView}/>

      </Styles.MainImgWrapper>

      <Styles.RightArrow src={rightArrow} alt="Click here to scroll right" id="rightArrow" onClick={scrollRight}/>

      <Thumbnails styleImages={renderedThumbnails} imageIndex={mainImageIndex} changeMainImage={imageSelect}/>

    </Styles.Gallery>
  );

};

export default Gallery;
