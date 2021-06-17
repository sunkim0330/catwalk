import React, { useEffect, useContext } from 'react';
import * as Styles from './styledComponents.js';
import { Theme } from '../App.jsx';

const StyleSelector = ({ styles, setCurrentStyle, currentStyle }) => {

  const theme = useContext(Theme);

  return (
    <Styles.StyleSelector>

      <Styles.StyleName className="styleTitle">{'Style Name > '}{styles[currentStyle].name}</Styles.StyleName>

      {styles.map((style, index) => {
        return <Styles.StyleContainer key={index}>
          <Styles.Checkmark
            theme={theme}
            selected={index === currentStyle}
            className="fas fa-check checkmark">
          </Styles.Checkmark>

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
