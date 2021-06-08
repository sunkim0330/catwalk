import React, { useState, useEffect } from 'react';

const AddReview = ({ product, chars }) => {
  const [scale, setScale] = useState({
    Size: ['Too small', '\u00B9/\u2082 a size too small', 'Perfect', '\u00B9/\u2082 a size too big', 'Too big'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly loose', 'Runs looose']
  });


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
                  className="radio-btn"
                />
              </label>
              <label>
                No
                <input
                  type="radio"
                  name="recommend"
                  value="no"
                  className="radio-btn"
                />
              </label>
            </div>
          </div>


        </form>
      </div>
    </div>
  );
};

export default AddReview;
