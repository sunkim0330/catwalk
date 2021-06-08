import React from 'react';

const StyleSelector = ({ styles, setCurrentStyle, currentStyle }) => {

  return (
    <div id="styleSelector">
      <div>{'Style Name > '}{currentStyle.name}</div>
      {styles.map((style, index) => {
        return <img src={style.photos[0].thumbnail_url} alt={style.name + 'Style'} key={index} onClick={() => setCurrentStyle(index)}/>;
      })}
    </div>
  );

};

export default StyleSelector;
