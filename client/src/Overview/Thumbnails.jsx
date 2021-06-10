import React, { useState, useEffect} from 'react';
import * as Styles from './styledComponents.js';

const Thumbnails = ({ styleThumbnails, imageIndex, changeMainImage }) => {

  const [renderedThumbnails, setRenderedThumbnails] = useState(styleThumbnails.slice(0, 7));

  const updateRenderedThumbnails = () => {

  };

  useEffect(() => {

  }, [imageIndex]);

  return (
    <Styles.Thumbnails>
      {styleThumbnails.map((stylePhoto, index) => {
        return <Styles.GalleryThumbnail src={stylePhoto.thumbnail_url} key={stylePhoto.thumbnail_url} onClick={() => changeMainImage(index)}/>;
      })}
    </Styles.Thumbnails>
  );

};

export default Thumbnails;
