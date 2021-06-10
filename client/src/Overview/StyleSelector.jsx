import React from 'react';
import * as Styles from './styledComponents.js';

const StyleSelector = ({ styles, setCurrentStyle, currentStyle }) => {

  return (
    <Styles.StyleSelector>
      <Styles.StyleName className="styleTitle">{'Style Name > '}{currentStyle.name}</Styles.StyleName>
      {styles.map((style, index) => {
        return <Styles.Style className="style" src={style.photos[0].thumbnail_url} alt={style.name + 'Style'} key={index} onClick={() => setCurrentStyle(index)}/>;
      })}
    </Styles.StyleSelector>
  );

};

export default StyleSelector;
