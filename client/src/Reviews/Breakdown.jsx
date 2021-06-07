import React, { useState, useEffect } from 'react';

const Breakdown = ({ reviews }) => {
  const [ratings, setRatings] = useState({});

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

  return (
    <div>

    </div>
  );
};

export default Breakdown;