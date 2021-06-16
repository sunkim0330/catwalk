import React, { useState, useEffect } from 'react';
import Thumbnails from './Thumbnails.jsx';
import * as Styles from './styledComponents.js';
import leftArrow from './images/chevron-left.png';
import rightArrow from './images/chevron-right.png';
import close from './images/closeGallery.png';

const Gallery = ({ styleImages, productID, extendedView, setExtendedView }) => {

  const [thumbnailsStart, setThumbnailsStart] = useState(0);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [renderedThumbnails, setRenderedThumbnails] = useState([]);
  const [zoomedIn, setZoomedIn] = useState(false);

  useEffect(() => {
    setMainImageIndex(0);
  }, [productID]);

  useEffect(() => {
    // create references to required elements to get their position/size details
    let image = document.getElementById('mainImage');
    let zoomedImage = document.getElementById('zoomedImage');
    let lens = document.getElementById('lens');
    let containerPositioning = document.getElementById('img-zoom-container').getBoundingClientRect();
    let imagePositioning = image.getBoundingClientRect();
    let cx = zoomedImage.offsetWidth / lens.offsetWidth;
    let cy = zoomedImage.offsetHeight / lens.offsetHeight;
    // set background image of zoomedImage display and scale accordingly
    zoomedImage.style.backgroundImage = 'url("' + mainImage.src + '")';
    zoomedImage.style.backgroundSize = (image.width * cx) + 'px ' + (image.height * cy) + 'px';
    zoomedImage.style.width = image.width + 'px';
    zoomedImage.style.height = image.height + 'px';
    // place result at correct y axis - x asix is dealt with automatically
    // getBoundingClientRect returns an elements x and y (top/left) based upon relation to viewport
    // need to get the difference between the container's distance from the top of the page
    // and the image's distance from the top of the page to position an absolute div accordingly
    zoomedImage.style.top = (imagePositioning.top - containerPositioning.top) + 'px';
  }, [zoomedIn]);

  useEffect(() => {
    setThumbnailsStart(0);
    setRenderedThumbnails(styleImages.slice(0, 7));
  }, [styleImages[0].url]);

  const scrollLeft = () => {
    setZoomedIn(false);
    if (mainImageIndex > 0) {
      if (mainImageIndex - 1 <= thumbnailsStart && thumbnailsStart !== 0) {
        setRenderedThumbnails(styleImages.slice(thumbnailsStart - 1, thumbnailsStart + 6));
        setThumbnailsStart(prev => prev - 1);
      }
      setMainImageIndex(mainImageIndex - 1);
    }
  };

  const scrollRight = () => {
    setZoomedIn(false);
    if (mainImageIndex < styleImages.length - 1) {
      if (mainImageIndex + 1 >= 6 && styleImages[thumbnailsStart + 7] !== undefined) {
        setRenderedThumbnails(styleImages.slice(thumbnailsStart + 1, thumbnailsStart + 8));
        setThumbnailsStart(prev => prev + 1);
      }
      setMainImageIndex(mainImageIndex + 1);
    }
  };

  const manageGalleryView = () => {
    if (!extendedView) {
      setExtendedView(true);
    } else if (extendedView && !zoomedIn) {
      setZoomedIn(true);
    } else if (extendedView && zoomedIn) {
      setZoomedIn(false);
    }
  };

  const getCursorPos = (event) => {
    let img = document.getElementById('mainImage');
    var a;
    var x = 0;
    var y = 0;
    event = event || window.event;
    a = img.getBoundingClientRect();
    x = event.pageX - a.left;
    y = event.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x: x, y: y};
  };

  const moveLens = (event) => {
    event.preventDefault();
    let img = document.getElementById('mainImage');
    let result = document.getElementById('zoomedImage');
    let lens = document.getElementById('lens');
    let cx = result.offsetWidth / lens.offsetWidth;
    let cy = result.offsetHeight / lens.offsetHeight;
    let pos = getCursorPos(event);
    let x = pos.x - (lens.offsetWidth / 2);
    let y = pos.y - (lens.offsetHeight / 2);
    if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
    if (x < 0) { x = 0; }
    if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
    if (y < 0) { y = 0; }
    lens.style.left = x + 'px';
    lens.style.top = y + 'px';
    result.style.backgroundPosition = '-' + (x * cx) + 'px -' + (y * cy) + 'px';
  };

  return (
    <Styles.Gallery extendedView={extendedView}>
      <Styles.CloseExtended
        className="fas fa-times fa-5x"
        onClick={() => { setZoomedIn(false); setExtendedView(false); }}
        extendedView={extendedView}
        src={close}>
      </Styles.CloseExtended>

      <Styles.LeftArrow
        className="fas fa-chevron-left fa-4x"
        alt="Click here to scroll left"
        id="leftArrow"
        hidden={mainImageIndex === 0 || zoomedIn}
        onClick={scrollLeft}
        extendedView={extendedView}>
      </Styles.LeftArrow>

      <Styles.MainImgWrapper id="img-zoom-container" extendedView={extendedView}>

        <Styles.Lens id="lens" className="img-zoom-lens" onMouseMove={(event) => moveLens(event)} zoomedIn={zoomedIn}></Styles.Lens>

        <Styles.MainImg
          src={styleImages[mainImageIndex].url}
          id="mainImage" alt={styleImages[mainImageIndex].name}
          extendedView={extendedView}
          zoomedIn={zoomedIn}
          onMouseMove={(event) => moveLens(event)}
          onClick={(event) => {
            manageGalleryView();
          }}
        />

        <Styles.ZoomedImage
          zoomedIn={zoomedIn}
          id="zoomedImage"
          onClick={(event) => {
            manageGalleryView();
          }}
          onMouseMove={(event) => {
            moveLens(event);
          }}
          className="img-zoom-result">
        </Styles.ZoomedImage>

      </Styles.MainImgWrapper>

      <Styles.RightArrow
        className="fas fa-chevron-right fa-4x"
        alt="Click here to scroll right"
        id="rightArrow"
        hidden={mainImageIndex === styleImages.length - 1 || zoomedIn}
        onClick={scrollRight}>
      </Styles.RightArrow>

      <Thumbnails styleImages={renderedThumbnails} mainImageIndex={mainImageIndex} thumbnailsStart={thumbnailsStart} changeMainImage={setMainImageIndex} extendedView={extendedView} zoomedIn={zoomedIn}/>

    </Styles.Gallery>
  );

};

export default Gallery;
