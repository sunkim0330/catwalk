import React, { useState, useEffect } from 'react';

const Review = ({ review }) => {

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
        <div className="review-body">
          {review.body}
          <div className="review-images">images go here if exist</div>
        </div>
        <div>
          {review.recommend ? 'I recommend this product' : null}
        </div>
      </div>
      <div className="review-response">

        {review.response ? <span>Respons: {review.response}</span> : null}
      </div>
      <div>
        Helpful?
      </div>
    </div>
  );
};

export default Review;