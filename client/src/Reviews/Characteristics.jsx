import React, { useState, useEffect } from 'react';

const Characteristics = ({ meta }) => {
  const [scale, setScale] = useState({
    Size: ['Too small', 'Perfect', 'Too big'],
    Width: ['Too narrow', 'Perfect', 'Too wide'],
    Comfort: ['Uncomfortable', 'Ok', 'Perfect'],
    Quality: ['Poor', 'What I expected', 'Perfect'],
    Length: ['Runs short', 'Perfect', 'Runs long'],
    Fit: ['Runs tight', 'Perfect', 'Runs long']
  });
  const [chars, setChars] = useState([]);

  const mapAttributes = () => {
    if (chars.length) {

    }
  };

  useEffect(() => {
    if (meta.product_id) {
      let newChars = [];
      for (let char in meta.characteristics) {
        newChars.push(char);
      }
      setChars(newChars);
    }
  }, [meta.product_id]);

  return (
    <div id="characteristics">
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
    </div>
  );
};

export default Characteristics;
