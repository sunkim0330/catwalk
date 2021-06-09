import React, { useState, useEffect } from 'react';

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
        <div className="review-body">{review.body}</div>
      );
    } else if (!showMore) {
      return (
        <div className="review-body">
          {review.body.slice(0, 250)}...
          <br></br>
          <a onClick={handleShowMore}>Show more</a>
        </div>
      );
    } else {
      return (
        <div className="review-body">
          {review.body}
          <br></br>
          <a onClick={handleShowMore}>Show less</a>
        </div>
      );
    }
  };

  const style = { // just to help visualize for now
    border: '1px solid black'
  };

  return (
    <div style={style} className="review-tile">
      <div>
        <span className="stars">stars go here</span>
        {/* don't think it's possible to reference sales with the API */}
        <span>verified purchase goes here</span>
        <span>{review.reviewer_name}, {review.date}</span>
        <div className="review-summary">{review.summary}</div>
        <div>
          {checkReviewLength()}
          <div className="review-images">images go here if exist</div>
        </div>
        <div>
          {review.recommend ? 'I recommend this product' : null}
        </div>
      </div>
      <div className="review-response">

        {review.response ? <span>Response: {review.response}</span> : null}
      </div>
      <div>
        Helpful?
      </div>
    </div>
  );
};

export default Review;
