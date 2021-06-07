import React, { useState, useEffect } from 'react';

const Breakdown = ({ reviewsList, setReviewsList }) => {
  const [ratings, setRatings] = useState({});
  const [filters, setFilters] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const filterReviews = (e) => {
    let rating = e.target.value;
    if (ratings[rating]) {

    }
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
    reviewsList.forEach((review) => {
      newRatings[review.rating] += 1;
    });
    setRatings(newRatings);
  }, [reviewsList.length]);

  return (
    <div>

    </div>
  );
};

export default Breakdown;