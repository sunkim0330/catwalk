import React, { useState, useEffect, useContext} from 'react';
import * as Styles from './styledComponents.js';
import { Theme } from '../App.jsx';

const Thumbnails = ({ thumbnailsStart, styleImages, mainImageIndex, changeMainImage, extendedView, zoomedIn }) => {

  const theme = useContext(Theme);

  return (
    <Styles.Thumbnails id="thumbnails" extendedView={extendedView} hidden={zoomedIn}>
      {styleImages.map((stylePhoto, index) => {
        return <Styles.GalleryThumbnail
          theme={theme}
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
