import React, { useState, useEffect } from 'react';
import Submit from './Submit.jsx';
import * as Styles from './Styles.js';

const AddReview = ({ product, chars, ratings }) => {
  const [scale, setScale] = useState({
    Size: ['Too small', '\u00B9/\u2082 a size too small', 'Perfect', '\u00B9/\u2082 a size too big', 'Too big'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly loose', 'Runs looose']
  });
  const [minRequiredChars, setminRequiredChars] = useState(50);
  const [reviewInfo, setReviewInfo] = useState({
    'product_id': product.id,
    rating: 0,
    summary: '',
    body: '',
    recommend: true,
    name: '',
    email: '',
    imageURLs: [],
    characteristics: {}
  });

  const handleSummaryChange = (e) => {
    setReviewInfo(prev => {
      return {...prev, summary: e.target.value};
    });
  };

  const handleBodyChange = (e) => {
    let chars = e.target.value;

    setReviewInfo((prev) => {
      return {...prev, body: chars};
    });

    setminRequiredChars(() => {
      return chars.length < 50 ? 50 - chars.length : 0;
    });
  };

  const handleRecommendsChange = (e) => {
    let value = e.target.value === 'yes';

    setReviewInfo(prev => {
      return {...prev, recommend: value};
    });
  };

  const handleNameChange = (e) => {
    setReviewInfo(prev => {
      return {...prev, name: e.target.value};
    });
  };

  const handleEmailChange = (e) => {
    setReviewInfo(prev => {
      return {...prev, email: e.target.value};
    });
  };

  const handleImageInput = (e) => {
    let files = [...e.currentTarget.files];

    if (files.length > 5) { alert('Only 5 images will be uploaded'); }

    files = files.slice(0, 5);


    let newFiles = reviewInfo.imageURLs;
    files.forEach(file => {
      newFiles.push(URL.createObjectURL(file));
    });

    newFiles = newFiles.slice(0, 5);
    setReviewInfo(prev => {
      return {...prev, imageURLs: newFiles};
    });
  };

  const handleCharChange = (e) => {
    let charName = e.target.name;
    let charId = ratings[charName].id;
    let value = Number(e.target.value);
    let newValue = reviewInfo.characteristics;
    newValue[charId] = value;
    setReviewInfo(prev => {
      return {...prev, characteristics: newValue};
    });
  };

  const renderCharButtons = () => {

    return (
      chars.map(char => {
        return (
          <div key={char}>
            <label>
              {char}
            </label>
            {scale[char].map((attribute, index) => {
              return (

                <span key={index}>
                  <input
                    type="radio"
                    name={char}
                    value={index + 1}
                    onChange={handleCharChange}
                    required
                  />
                </span>

              );
            })}
            <div key={char}>
              {scale[char][0]}    {scale[char][4]}
            </div>
          </div>
        );
      })
    );

  };

  useEffect(() => {
    let newChars = {};
    chars.forEach(char => {
      newChars[ratings[char].id] = 0;
    });
    setReviewInfo((prev) => {
      return {...prev, characteristics: newChars};
    });
  }, [chars]);

  const thumbnail = {
    border: '1px solid black',
    padding: '5px',
    width: '150px'
  };


  return (
    <>
      <Styles.modalOverlay></Styles.modalOverlay>
      <Styles.modal>

        <Styles.formHeading>
          Write your review
          About {product.name}
        </Styles.formHeading>
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
                    onChange={handleRecommendsChange}
                    checked
                    required
                  />
                </label>
                <label>
                  No
                  <input
                    type="radio"
                    name="recommend"
                    value="no"
                    onChange={handleRecommendsChange}
                  />
                </label>
              </div>
            </div>

            <div>
              Characteristics
              <div>
                {renderCharButtons()}
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
                // value={summary}
                onChange={handleSummaryChange}
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
                // value={body}
                onChange={handleBodyChange}
                required
              />
              <div>
              Minimum required characters left: {minRequiredChars}
              </div>
            </div>


            <div>
              {reviewInfo.imageURLs.length >= 5 ? null
                : <div>
                  <label>
                    Share an image, up to 5
                  </label>
                  <input
                    type="file"
                    id="add-review-image"
                    name="add-review-image"
                    accept="image/*"
                    multiple
                    onChange={handleImageInput}
                  />
                </div>
              }
              <div>
                  image preview:
                {reviewInfo.imageURLs.map((image, index) => {
                  return (
                    <div key={index} >
                      <img src={image} style={thumbnail}/>
                      {/* <button style={xbutton}>x</button> */}
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Example: jackson11!"
                maxLength="60"
                // value={name}
                onChange={handleNameChange}
                required
              />
              <p>For privacy reasons, do not use your full name or email address</p>
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Example: jackson11@email.com"
                maxLength="60"
                // value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <Submit reviewInfo={reviewInfo} ratings={ratings} />

          </form>
        </div>
      </Styles.modal>
    </>
  );
};

export default AddReview;
