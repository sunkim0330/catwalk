import React from 'react';

const StyleSelector = ({ styles, styleSelector }) => {

  return (
    <div id="styleSelector">
      <h3>Style Selector</h3>
      {styles.map((style, index) => {
        return <img src={style.photos[0].thumbnail_url} alt={style.name + 'Style'} key={index} onClick={() => styleSelector(index)}/>;
      })}
    </div>
  );

};

export default StyleSelector;
