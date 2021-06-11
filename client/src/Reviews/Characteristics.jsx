import React, { useState, useEffect } from 'react';
import * as Styles from './Styles.js';

const Characteristics = ({ chars }) => {
  const [scale, setScale] = useState({
    Size: ['Too small', 'Perfect', 'Too big'],
    Width: ['Too narrow', 'Perfect', 'Too wide'],
    Comfort: ['Uncomfortable', 'Ok', 'Perfect'],
    Quality: ['Poor', 'What I expected', 'Perfect'],
    Length: ['Runs short', 'Perfect', 'Runs long'],
    Fit: ['Runs tight', 'Perfect', 'Runs loose']
  });

  const mapAttributes = () => {
    if (chars.length) {

    }
  };

  return (
    <Styles.Characteristics>
      {chars.map((char) => {
        return (
          <div className="char" key={char}>
            <div>{char}</div>
            <div className="scale">
              <div className="marker"></div>
            </div>
            <div className="attributes">
              {scale[char].map((attribute, index) => {
                return (
                  <div key={index}>{attribute}</div>
                );
              })}
            </div>
          </div>
        );
      })}
    </Styles.Characteristics>
  );
};

export default Characteristics;
