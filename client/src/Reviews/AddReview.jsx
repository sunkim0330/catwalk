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
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [minRequiredChars, setminRequiredChars] = useState(50);

  const handleBodyChange = (e) => {
    //let newBody = e.target.value.length;
    setBody(e.target.value);
    setminRequiredChars(() => {
      var chars = e.target.value.length;
      return chars < 50 ? 50 - chars : 0;
    });
  };

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

          <div>
            <label>
              Review summary
            </label>
            <input
              type="text"
              id="add-review-summary"
              name="add-review-summary"
              maxLength="60"
              placeholder="Example: Best purchase ever!"
              size="30"
              value={summary}
              onChange={e => setSummary(e.target.value)}
              required
            />
          </div>

          <div>
            <label>
              Review
            </label>
            <textarea
              id="add-review-body"
              name="add-review-body"
              rows="5"
              columns="30"
              minLength="50"
              maxLength="1000"
              placeholder="Why did you like the product or not?"
              value={body}
              onChange={handleBodyChange}
            />
            <div>
             Minimum required characters left: {minRequiredChars}
            </div>
          </div>


        </form>
      </div>
    </div>
  );
};

export default AddReview;
