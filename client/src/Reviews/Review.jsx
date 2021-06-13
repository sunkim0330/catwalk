import React, { useState, useEffect } from 'react';
import Helpful from '../Shared/Helpful.jsx';
import Stars from '../Shared/Star.jsx';
import * as Styles from './Styles.js';

const Review = ({ review }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  // display first 250 characters of review body
  // refactor have only one div tag
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

  // checks for review images
  // need to set conditional to check for bad urls
  const checkForImages = () => {
    // for (let photos in reviews) {
    //   if (photos.length) {

    //   }
    // }

    return (
      review.photos.length ? (
        <div>
          {review.photos.map((photo, index) => {
            return <Styles.reviewThumbnail key={index} src={photo.url} alt={`${review.reviewer_name} photo ${index}`}></Styles.reviewThumbnail>;
          })}
        </div>
      ) : null
    );
  };

  // just to help visualize for now
  const style = {
    border: '1px solid black'
  };
  const thumbnail = {
    border: '1px solid black',
    padding: '5px',
    width: '100px'
  };

  return (
    <Styles.reviewTile>


      <Styles.topRow>
        <Styles.reviewStars>
          <Stars rating={review.rating} />
        </Styles.reviewStars>
        <Styles.text>{review.reviewer_name}, {review.formattedDate}</Styles.text>
      </Styles.topRow>
      {/* don't think it's possible to reference sales with the API */}
      {/* <span>verified purchase goes here</span> */}

      <Styles.reviewContainer>
        <Styles.summary>{review.summary}</Styles.summary>
        {checkReviewLength()}
        {/* {checkForImages()} */}
        <Styles.text>{review.recommend ? 'I recommend this product' : null}</Styles.text>
        <Styles.response>
          {review.response ? <span>Response: {review.response}</span> : null}
        </Styles.response>
        <Helpful origin='reviews' id={review.review_id} helpCount={review.helpfulness} />
      </Styles.reviewContainer>


    </Styles.reviewTile>
  );
};

export default Review;
