import React, { useState, useEffect} from 'react';
import * as Styles from './styledComponents.js';

const Thumbnails = ({ styleImages, imageIndex, changeMainImage }) => {

  return (
    <Styles.Thumbnails>
      {styleImages.map((stylePhoto, index) => {
        return <Styles.GalleryThumbnail
          src={stylePhoto.thumbnail_url}
          key={stylePhoto.thumbnail_url}
          id={'thumbnail' + index}
          onClick={() => changeMainImage(index) }
        />;
      })}
    </Styles.Thumbnails>
  );

};

export default Thumbnails;
