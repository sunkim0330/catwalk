import React, { useState, useEffect } from 'react';

const AddReview = ({ product, chars, ratings }) => {
  const [scale, setScale] = useState({
    Size: ['Too small', '\u00B9/\u2082 a size too small', 'Perfect', '\u00B9/\u2082 a size too big', 'Too big'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly loose', 'Runs looose']
  });

  const renderCharButtons = (char) => {
    return (
      <div key={char}>
        <label>
          {char}
        </label>
        {scale[char].map((attribute, index) => {
          return (

            <span>
              <input
                type="radio"
                name={char}
                value={attribute}
                key={index}
                required
              />
            </span>

          );
        })}
        <div>
          {scale[char][0]}    {scale[char][4]}
        </div>
      </div>
    );
  };


  return (
    <div className="modal">
      <div>
        Write your review
        About {product}
      </div>
      <div>
        <form>

          <div>
            <label>
              Overall rating
              {/* star buttons go here */}
            </label>
          </div>

          <div>
            Do you recommend this product?
            <div>
              <label>
                Yes
                <input
                  type="radio"
                  name="recommend"
                  value="yes"
                  required
                />
              </label>
              <label>
                No
                <input
                  type="radio"
                  name="recommend"
                  value="no"
                />
              </label>
            </div>
          </div>

          <div>
            Characteristics
            <div>
              {chars.map((char) => {
                return (renderCharButtons(char));
              })}
            </div>
          </div>


        </form>
      </div>
    </div>
  );
};

export default AddReview;
