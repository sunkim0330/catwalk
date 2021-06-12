import React from 'react';
import * as Styles from './styledComponents.js';

const StyleSelector = ({ styles, setCurrentStyle, currentStyle }) => {

  return (
    <Styles.StyleSelector>
      <Styles.StyleName className="styleTitle">{'Style Name > '}{currentStyle.name}</Styles.StyleName>
      {styles.map((style, index) => {
        let classNames = 'style';
        return <div id={style.name}><Styles.Style className={classNames} id={style.name} src={style.photos[0].thumbnail_url} alt={style.name + 'Style'} key={index} onClick={() => {
          document.getElementById(style.name).style.backgroundImage = 'url(./images/checkmark.png)';
          document.getElementById(style.name).style.zIndex = 1;
          document.getElementById(currentStyle.name).style.backgroundImage = null;
          setCurrentStyle(index);
        } }/></div>;
      })}
    </Styles.StyleSelector>
  );

};

export default StyleSelector;
