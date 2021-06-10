import React from 'react';
import * as Styles from './styledComponents.js';

const Thumbnails = ({ styleThumbnails, changeMainImage }) => {

  return (
    <Styles.Thumbnails>
      {styleThumbnails.map((stylePhoto, index) => {
        return <Styles.GalleryThumbnail src={stylePhoto.thumbnail_url} key={stylePhoto.thumbnail_url} onClick={() => changeMainImage(index)}/>;
      })}
    </Styles.Thumbnails>
  );

};

export default Thumbnails;
