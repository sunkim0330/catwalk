import React from 'react';
import Thumbnails from './Thumbnails.jsx';
import * as Styles from './styledComponents.js';

const Gallery = ({ images }) => {

  return (
    <Styles.Gallery>
      <Styles.MainImage src={images.photos[0].url} alt="An image of the currently selected style"/>
      <Thumbnails styleThumbnails={images.photos}/>
    </Styles.Gallery>
  );

};

export default Gallery;
