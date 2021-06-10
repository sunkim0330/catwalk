import React from 'react';
import * as Styles from './styledComponents.js';

const Thumbnails = ({ styleThumbnails }) => {

  return (
    <Styles.Thumbnails>
      {styleThumbnails.map((stylePhoto) => {
        return <Styles.GalleryThumbnail src={stylePhoto.thumbnail_url} key={stylePhoto.thumbnail_url}/>;
      })}
    </Styles.Thumbnails>
  );

};

export default Thumbnails;
