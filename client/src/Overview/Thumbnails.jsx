import React, { useState, useEffect} from 'react';
import * as Styles from './styledComponents.js';

const Thumbnails = ({ thumbnailsStart, styleImages, mainImageIndex, changeMainImage, extendedView, zoomedIn }) => {

  return (
    <Styles.Thumbnails id="thumbnails" extendedView={extendedView} hidden={zoomedIn}>
      {styleImages.map((stylePhoto, index) => {
        return <Styles.GalleryThumbnail
          selected={index === mainImageIndex - thumbnailsStart}
          src={stylePhoto.thumbnail_url}
          key={stylePhoto.thumbnail_url}
          onClick={() => changeMainImage(index + thumbnailsStart)}
        />;
      })}
    </Styles.Thumbnails>
  );

};

export default Thumbnails;
