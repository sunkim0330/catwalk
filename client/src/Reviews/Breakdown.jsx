import React, { useState, useEffect } from 'react';

const Breakdown = ({ reviews, reviewsList, setReviewsList }) => {
  const [ratings, setRatings] = useState({});
  const [filters, setFilters] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const handleFilterClick = (e) => {
    let rating = e.target.innerText.slice(0, 1);
    setFilters((prev) => {
      return {...prev, [rating]: !prev[rating]};
    });
  };

  const filterReviews = () => {
    let newReviewsList = [];

    reviews.forEach((review) => {
      if (filters[review.rating]) {
        newReviewsList.push(review);
      }
    });

    setReviewsList(newReviewsList);
  };

  // get number of reviews for each rating
  useEffect(() => {
    let newRatings = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    };
    reviews.forEach((review) => {
      newRatings[review.rating] += 1;
    });
    setRatings(newRatings);
  }, [reviews.length]);

  // update filters
  useEffect(() => {
    filterReviews();
  }, [filters]);

  return (
    <div id="ratings-breakdown">

      <div className="left">
        <div onClick={handleFilterClick}>5 stars</div>
      </div>
      <div className="middle">
        <div className="bar">
          <div className="bar-5"></div>
        </div>
      </div>
      <div className="right">
        <div>{ratings[5]}</div>
      </div>

      <div className="left">
        <div onClick={handleFilterClick}>4 stars</div>
      </div>
      <div className="middle">
        <div className="bar">
          <div className="bar-4"></div>
        </div>
      </div>
      <div className="right">
        <div>{ratings[4]}</div>
      </div>

      <div className="left">
        <div onClick={handleFilterClick}>3 stars</div>
      </div>
      <div className="middle">
        <div className="bar">
          <div className="bar-3"></div>
        </div>
      </div>
      <div className="right">
        <div>{ratings[3]}</div>
      </div>

      <div className="left">
        <div onClick={handleFilterClick}>2 stars</div>
      </div>
      <div className="middle">
        <div className="bar">
          <div className="bar-2"></div>
        </div>
      </div>
      <div className="right">
        <div >{ratings[2]}</div>
      </div>

      <div className="left">
        <div onClick={handleFilterClick}>1 stars</div>
      </div>
      <div className="middle">
        <div className="bar">
          <div className="bar-1"></div>
        </div>
      </div>
      <div className="right">
        <div>{ratings[1]}</div>
      </div>

    </div>
  );
};

export default Breakdown;