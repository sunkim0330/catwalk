import React, { useState, useEffect } from 'react';
import Helpful from '../Shared/Helpful.jsx';
import Stars from '../Shared/Star.jsx';
import * as Styles from './Styles.js';

const Review = ({ review }) => {
  const [showMore, setShowMore] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const checkReviewLength = () => {
    if (review.body.length <= 250) {
      return (
        <Styles.bodyContainer>
          <Styles.reviewBody>
            {review.body}
          </Styles.reviewBody>
          {checkForImages()}
        </Styles.bodyContainer>
      );
    } else if (!showMore) {
      return (
        <Styles.bodyContainer>
          <Styles.reviewBody>
            {review.body.slice(0, 250)}...
            <Styles.more onClick={handleShowMore}>Show more</Styles.more>
          </Styles.reviewBody>
          {checkForImages()}
        </Styles.bodyContainer>
      );
    } else {
      return (
        <Styles.bodyContainer>
          <Styles.reviewBody>
            {review.body}
            <Styles.more onClick={handleShowMore}>Show less</Styles.more>
          </Styles.reviewBody>
          {checkForImages()}
        </Styles.bodyContainer>
      );
    }
  };


  const checkForImages = () => {

    return (
      review.photos.length ? (
        <div>
          {review.photos.map((photo, index) => {
            return (
              <div key={`${review.reviewer_name} photo ${index}`}>
                <Styles.reviewThumbnail
                  key={index}
                  src={photo.url}
                  alt={`${review.reviewer_name} photo ${index}`}
                  onClick={() => handleImageClick()}
                ></Styles.reviewThumbnail>

                {showImage ? (
                  <div key ={index}>
                    <Styles.modalOverlay key={index} onClick={() => setShowImage(false)}>
                    </Styles.modalOverlay>
                    <Styles.fullImage src={photo.url}
                      alt={`${review.reviewer_name} photo ${index}`}
                      key={index}></Styles.fullImage>
                  </div>
                ) : null
                }
              </div>);
          })}
        </div>
      ) : null
    );
  };

  const handleImageClick = () => {
    setShowImage(true);
  };


  return (
    <Styles.reviewTile>


      <Styles.topRow>
        <Styles.reviewStars>
          <Stars rating={review.rating} />
        </Styles.reviewStars>
        <Styles.text>{review.reviewer_name}, {review.formattedDate}</Styles.text>
      </Styles.topRow>

      <Styles.reviewContainer>
        <Styles.summary>{review.summary}</Styles.summary>
        {checkReviewLength()}
        <Styles.text>{review.recommend ? 'I recommend this product' : null}</Styles.text>
        <Styles.response>
          {review.response ? <span>Response: {review.response}</span> : null}
        </Styles.response>
        <Helpful origin='reviews' id={review.review_id} helpCount={review.helpfulness} />
      </Styles.reviewContainer>

      <Styles.bottomBorder></Styles.bottomBorder>


    </Styles.reviewTile>
  );
};

export default Review;
