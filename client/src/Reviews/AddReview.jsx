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
  const [imageURLs, setImageURLs] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleBodyChange = (e) => {
    //let newBody = e.target.value.length;
    setBody(e.target.value);
    setminRequiredChars(() => {
      var chars = e.target.value.length;
      return chars < 50 ? 50 - chars : 0;
    });
  };

  const handleImageInput = (e) => {
    let files = [...e.currentTarget.files];

    // Should prevent more than 5 images, doesn't work yet
    // if (files.length > 5) {
    //   e.preventDefault();
    //   console.log(files);
    //   alert('Cannot upload more the 5 files');
    //   return;
    // }
    let newFiles = [];
    files.forEach(file => {
      newFiles.push(URL.createObjectURL(file));
    });

    setImageURLs(prev => [...prev, ...newFiles]);
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
                    value={attribute}

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



  const thumbnail = {
    border: '1px solid black',
    padding: '5px',
    width: '150px'
  };
  const xbutton = {
    position: 'absolute',
    right: '0',
    zIndex: '1'
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
              required
            />
            <div>
             Minimum required characters left: {minRequiredChars}
            </div>
          </div>


          <div>
            {imageURLs.length >= 5 ? null
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
              {imageURLs.map((image, index) => {
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
              value={name}
              onChange={e => setName(e.target.value)}
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
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddReview;
