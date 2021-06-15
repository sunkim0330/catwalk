import React, { useState, useEffect } from 'react';
import Thumbnails from './Thumbnails.jsx';
import * as Styles from './styledComponents.js';
import leftArrow from './images/chevron-left.png';
import rightArrow from './images/chevron-right.png';

const Gallery = ({ styleImages, productID, extendedView, setExtendedView }) => {

  const [thumbnailsStart, setThumbnailsStart] = useState(0);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [renderedThumbnails, setRenderedThumbnails] = useState([]);

  useEffect(() => {
    setMainImageIndex(0);
  }, [productID]);

  useEffect(() => {
    setThumbnailsStart(0);
    setRenderedThumbnails(styleImages.slice(0, 7));
  }, [styleImages[0].url]);

  const scrollLeft = () => {
    if (mainImageIndex > 0) {
      if (mainImageIndex - 1 <= thumbnailsStart && thumbnailsStart !== 0) {
        setRenderedThumbnails(styleImages.slice(thumbnailsStart - 1, thumbnailsStart + 6));
        setThumbnailsStart(prev => prev - 1);
      }
      setMainImageIndex(mainImageIndex - 1);
    }
  };

  const scrollRight = () => {
    if (mainImageIndex < styleImages.length - 1) {
      if (mainImageIndex + 1 >= 6 && styleImages[thumbnailsStart + 7] !== undefined) {
        setRenderedThumbnails(styleImages.slice(thumbnailsStart + 1, thumbnailsStart + 8));
        setThumbnailsStart(prev => prev + 1);
      }
      setMainImageIndex(mainImageIndex + 1);
    }
  };

  const openExpandedView = (event) => {

  };

  const closeExpandedView = () => {

  };

  const trackMouse = () => {

  };
  return (
    <Styles.Gallery extendedView={extendedView}>
      <Styles.LeftArrow src={leftArrow} alt="Click here to scroll left" id="leftArrow" hidden={mainImageIndex === 0} onClick={scrollLeft} extendedView={extendedView}/>

      <Styles.MainImgWrapper id="imgWrapper" extendedView={extendedView}>

        <Styles.MainImg
          src={styleImages[mainImageIndex].url}
          id="mainImg" alt={styleImages[mainImageIndex].name}
          extendedView={extendedView}
          onClick={(event) => {
            setExtendedView((prev) => !prev);
          }}
        />

      </Styles.MainImgWrapper>

      <Styles.RightArrow src={rightArrow} alt="Click here to scroll right" id="rightArrow" hidden={mainImageIndex === styleImages.length - 1} onClick={scrollRight}/>

      <Thumbnails styleImages={renderedThumbnails} mainImageIndex={mainImageIndex} thumbnailsStart={thumbnailsStart} changeMainImage={setMainImageIndex} extendedView={extendedView}/>

    </Styles.Gallery>
  );

};

export default Gallery;
