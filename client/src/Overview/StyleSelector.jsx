import React, { useEffect } from 'react';
import * as Styles from './styledComponents.js';

const StyleSelector = ({ styles, setCurrentStyle, currentStyle }) => {

  useEffect(() => {
    if (styles[0]) {
      let checkMark = document.querySelector('.checkmark');
      let style = document.querySelectorAll('.style')[0];
      checkMark.style.left = style.offsetLeft + 20 + 'px';
      checkMark.style.top = style.offsetTop + 20 + 'px';
    }
  }, [styles]);

  const updateSelectedStyle = (index, event) => {
    let newStyleIcon = event.target.getBoundingClientRect();
    console.log(newStyleIcon);
    let checkMark = document.querySelector('.checkmark');
    checkMark.style.left = newStyleIcon.x + 20 + 'px';
    checkMark.style.top = newStyleIcon.top + 20 + 'px';
    setCurrentStyle(index);
  };

  return (
    <Styles.StyleSelector>

      <Styles.Checkmark className="fas fa-check checkmark"></Styles.Checkmark>

      <Styles.StyleName className="styleTitle">{'Style Name > '}{currentStyle.name}</Styles.StyleName>

      {styles.map((style, index) => {
        return <Styles.Style
          className='style'
          id={style.name}
          src={style.photos[0].thumbnail_url}
          alt={style.name + 'Style'}
          key={style.name}
          onClick={(event) => updateSelectedStyle(index, event)}
        />;
      })}

    </Styles.StyleSelector>
  );

};

export default StyleSelector;
