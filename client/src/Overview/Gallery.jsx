import React from 'react';
import Thumbnails from './Thumbnails.jsx';

const Gallery = ({ images }) => {

  return (
    <div id="gallery">
      <img src={images.photos[0].thumbnail_url} alt="An image of the currently selected style"/>
      <Thumbnails />
    </div>
  );

};

export default Gallery;
