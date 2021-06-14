import React, { useState, useEffect} from 'react';
import * as Styles from './styledComponents.js';

const Thumbnails = ({ styleImages, mainImageIndex, changeMainImage }) => {

  return (
    <Styles.Thumbnails id="thumbnails">
      {styleImages.map((stylePhoto, index) => {
        return <Styles.GalleryThumbnail
          selected={index === mainImageIndex}
          src={stylePhoto.thumbnail_url}
          key={stylePhoto.thumbnail_url}
          onClick={() => changeMainImage(index) }
        />;
      })}
    </Styles.Thumbnails>
  );

};

export default Thumbnails;
