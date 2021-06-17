import React, { useEffect } from 'react';
import * as Styles from './styledComponents.js';

const StyleSelector = ({ styles, setCurrentStyle, currentStyle }) => {

  return (
    <Styles.StyleSelector>

      <Styles.StyleName className="styleTitle">{'Style Name > '}{styles[currentStyle].name}</Styles.StyleName>

      {styles.map((style, index) => {
        return <Styles.StyleContainer key={index}>
          <Styles.Checkmark selected={index === currentStyle} className="fas fa-check checkmark"></Styles.Checkmark>
          <Styles.Style
            className='style'
            src={style.photos[0].thumbnail_url}
            alt={style.name + 'Style'}
            key={style.name}
            onClick={() => setCurrentStyle(index)}
          />
        </Styles.StyleContainer>;
      })}

    </Styles.StyleSelector>
  );

};

export default StyleSelector;
