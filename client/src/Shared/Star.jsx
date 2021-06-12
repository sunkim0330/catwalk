import React from 'react';


const Stars = (props) => {
  return (
    <div>

      <svg viewBox="0 0 1000 200">

        <defs>
          <polygon id="star" points="100,0 131,66 200,76 150,128 162,200 100,166 38,200 50,128 0,76 69,66 "/>

          <clipPath id="stars">
            <use xlinkHref="#star"/>
            <use xlinkHref="#star" x="20%"/>
            <use xlinkHref="#star" x="40%"/>
            <use xlinkHref="#star" x="60%"/>
            <use xlinkHref="#star" x="80%"/>
          </clipPath>
        </defs>



        <rect style={{fill: '#eeeee4', stroke: 'red', strokeWidth: '1px', height: '100%', width: '100%'}} clipPath="url(#stars)"></rect>
        <rect width={(props.rating * 20) + '%'} style={{ fill: '#ECD08C ', height: '100%'}} clipPath="url(#stars)"></rect>

      </svg>
    </div>
  );
};

export default Stars;