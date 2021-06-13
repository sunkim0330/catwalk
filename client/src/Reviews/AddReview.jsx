import React, { useState, useEffect } from 'react';
import Submit from './Submit.jsx';
import Stars from '../Shared/Star.jsx';
import * as Styles from './Styles.js';

const AddReview = ({ product, chars, ratings, setShowForm }) => {
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
  const [selected, setSelected] = useState({});

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

    setSelected(prev => {
      return {...prev, [charName]: scale[charName][value - 1]};
    });
  };

  const displaySelection = () => {

  };

  const renderCharButtons = () => {

    return (
      chars.map(char => {
        return (
          <Styles.charBox key={char}>
            <Styles.flexContainerLong>

              <Styles.textMain>{char}</Styles.textMain>
              <Styles.textSmall>{selected[char]}</Styles.textSmall>

            </Styles.flexContainerLong>

            <Styles.flexContainerLong>
              {scale[char].map((attribute, index) => {
                return (

                  <Styles.charButtons key={index}>
                    <Styles.charbutton
                      type="radio"
                      name={char}
                      value={index + 1}
                      onChange={handleCharChange}
                      required
                    />
                  </Styles.charButtons>

                );
              })}
            </Styles.flexContainerLong>
            <Styles.flexContainerLong key={char}>
              <Styles.textSmall>{scale[char][0]}</Styles.textSmall>
              <Styles.textSmall>{scale[char][4]}</Styles.textSmall>
            </Styles.flexContainerLong>
          </Styles.charBox>
        );
      })
    );

  };

  useEffect(() => {

    let newChars = {};
    chars.forEach(char => {
      newChars[ratings[char].id] = 0;
      setSelected(prev => {
        return {...prev, [char]: null};
      });
    });

    setReviewInfo((prev) => {
      return {...prev, characteristics: newChars};
    });


  }, [chars]);


  const closeReview = () => {
    setShowForm(false);
  };


  return (
    <>
      <Styles.modalOverlay></Styles.modalOverlay>
      <Styles.modal>

        <Styles.formHeader>
          <Styles.textTitle>Write your review</Styles.textTitle>
          <Styles.textSub>About the {product.name}</Styles.textSub>
        </Styles.formHeader>

        <Styles.formContainer>

          <Styles.section>
            <label>
              <Styles.textMain>Overall rating</Styles.textMain>
              <Stars rating={0}
                width='150px'
                cursor='pointer'
                margin='10px 0'
              />
            </label>
          </Styles.section>

          <Styles.section>
            <Styles.textMain>Do you recommend this product?</Styles.textMain>
            <Styles.flexContainerShort>
              <label>
                <Styles.textSmall>Yes</Styles.textSmall>
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
                <Styles.textSmall>No</Styles.textSmall>
                <input
                  type="radio"
                  name="recommend"
                  value="no"
                  onChange={handleRecommendsChange}
                />
              </label>
            </Styles.flexContainerShort>
          </Styles.section>

          <Styles.section>
            <Styles.textMain>Characteristics</Styles.textMain>

            <Styles.section>
              {renderCharButtons()}
            </Styles.section>
          </Styles.section>

          <Styles.section>
            <Styles.flexContainerCol>
              <Styles.textMain>
                Review summary
              </Styles.textMain>
              <Styles.textInput
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
            </Styles.flexContainerCol>

            <Styles.flexContainerCol>
              <Styles.textMain>
                Review
              </Styles.textMain>
              <Styles.textarea
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
              <Styles.textSmall>
              Minimum required characters left: {minRequiredChars}
              </Styles.textSmall>
            </Styles.flexContainerCol>
          </Styles.section>


          <Styles.section>
            {reviewInfo.imageURLs.length >= 5 ? null
              : <Styles.flexContainerCol>
                <Styles.textMain>
                  Share your pics! Up to 5
                </Styles.textMain>
                <input
                  type="file"
                  id="add-review-image"
                  name="add-review-image"
                  accept="image/*"
                  multiple
                  onChange={handleImageInput}
                />
              </Styles.flexContainerCol>
            }
            <Styles.flexContainerCol>
              <Styles.textMain>image preview:</Styles.textMain>
              <Styles.flexFit>
                {reviewInfo.imageURLs.map((image, index) => {
                  return (
                    <div key={index} >
                      <Styles.reviewThumbnail src={image} />
                      {/* <button style={xbutton}>x</button> */}
                    </div>
                  );
                })}
              </Styles.flexFit>
            </Styles.flexContainerCol>
          </Styles.section>

          <Styles.section>
            <Styles.flexContainerCol>
              <Styles.textInput
                type="text"
                id="username"
                name="username"
                placeholder="Example: jackson11!"
                maxLength="60"
                // value={name}
                onChange={handleNameChange}
                required
              />
              <Styles.textSmall>For privacy reasons, do not use your full name or email address</Styles.textSmall>



              <Styles.textInput
                type="email"
                id="email"
                name="email"
                placeholder="Example: jackson11@email.com"
                maxLength="60"
                // value={email}
                onChange={handleEmailChange}
                required
              />
            </Styles.flexContainerCol>
          </Styles.section>

          <Styles.flexContainerShort>
            <Submit reviewInfo={reviewInfo} ratings={ratings} />
            <button onClick={closeReview}>Cancel</button>
          </Styles.flexContainerShort>

        </Styles.formContainer>

      </Styles.modal>
    </>
  );
};

export default AddReview;
