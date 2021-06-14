import React, { useState, useEffect } from 'react';
import * as Styles from './Styles.js';

const Characteristics = ({ chars, ratings }) => {
  const [scale, setScale] = useState({
    Size: ['Too small', 'Perfect', 'Too big'],
    Width: ['Too narrow', 'Perfect', 'Too wide'],
    Comfort: ['Uncomfortable', 'Ok', 'Perfect'],
    Quality: ['Poor', 'What I expected', 'Perfect'],
    Length: ['Runs short', 'Perfect', 'Runs long'],
    Fit: ['Runs tight', 'Perfect', 'Runs loose']
  });
  const [ratingsPct, setRatingsPct] = useState('');

  const getNewRatings = () => {
    let newRatings = {};
    for (let key in ratings) {
      let percentage = Math.round((ratings[key].value / 5) * 100);
      // over 95% screws up my css marker
      percentage > 95 ? percentage = 95 : percentage = percentage;
      newRatings[key] = percentage + '%';
    }
    setRatingsPct(newRatings);
  };

  useEffect(() => {
    getNewRatings();
  }, [ratings]);

  const renderChars = () => {
    return (
      <Styles.Characteristics>
        {chars.map((char) => {
          return (
            <Styles.charContainer key={char}>
              <Styles.charName>{char}</Styles.charName>
              <Styles.scale>
                <Styles.marker margin-left={ratingsPct[char]}></Styles.marker>
              </Styles.scale>
              <Styles.attBox>
                {scale[char].map((attribute, index) => {
                  return (
                    <Styles.attribute key={index}>{attribute}</Styles.attribute>
                  );
                })}
              </Styles.attBox>
            </Styles.charContainer>
          );
        })}
      </Styles.Characteristics>
    );
  };

  useEffect(() => {
    renderChars();
  }, [chars]);

  return (
    renderChars()
  );
};

export default Characteristics;
