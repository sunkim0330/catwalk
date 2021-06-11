import React, { useState, useEffect } from 'react';
import * as Styles from './Styles.js';

const Breakdown = ({ reviews, reviewsList, setReviewsList, meta }) => {
  const [ratings, setRatings] = useState({});
  const [ratingsPct, setRatingsPct] = useState({});
  const [recommends, setRecommends] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);
  const [filters, setFilters] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const showCurrentFilters = () => {
    let currentFilters = [];
    for (let i in filters) {
      if (filters[i]) {
        currentFilters.push(i);
      }
    }

    return (
      <div>
        Filters currently applied:
        {currentFilters.map((filter, index) => {
          return (
            // need to remove the comma on last item
            <span key={index}>{filter} stars, </span>
          );
        })}
        <div onClick={handleRemoveFilters}>Remove all filters</div>
      </div>
    );
  };

  const handleRemoveFilters = () => {
    setIsFiltered(false);
  };

  const handleFilterClick = (e) => {
    let rating = e.target.innerText.slice(0, 1);
    setFilters((prev) => {
      return {...prev, [rating]: !prev[rating]};
    });
    setIsFiltered(true);
  };

  const filterReviews = () => {
    let allFalse = true;
    for (let rating in filters) {
      if (filters[rating]) {
        allFalse = false;
      }
    }

    if (allFalse) {
      setReviewsList(reviews);
      setIsFiltered(false);
      return;
    }

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
    if (reviews.length) {
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

      let t = Number(meta.recommended.true);
      let f = Number(meta.recommended.false);

      setRecommends(() => {
        return Math.round((f / (t + f)) * 100);
      });
    }
  }, [reviews.length]);

  // update filters
  useEffect(() => {
    filterReviews();
  }, [filters]);

  // get the percentage of each rating, determine the width of the div bar for each rating
  useEffect(() => {
    let newRatingsPct = {};
    for (let rating in ratings) {
      let percentage = Math.round((ratings[rating] / reviews.length) * 100);
      newRatingsPct[rating] = percentage + '%';
    }
    setRatingsPct(newRatingsPct);
  }, [ratings]);

  // refactor using map or loop
  return (
    <Styles.Breakdown>

      <Styles.spacer>{isFiltered ? showCurrentFilters() : null}</Styles.spacer>

      <Styles.ratingContainer>
        <Styles.rating onClick={handleFilterClick}>5 stars</Styles.rating>
        <Styles.bar><Styles.percent width={ratingsPct[5]}></Styles.percent></Styles.bar>
        <Styles.count>({ratings[5]})</Styles.count>
      </Styles.ratingContainer>

      <Styles.ratingContainer>
        <Styles.rating onClick={handleFilterClick}>4 stars</Styles.rating>
        <Styles.bar><Styles.percent width={ratingsPct[4]}></Styles.percent></Styles.bar>
        <Styles.count>({ratings[4]})</Styles.count>
      </Styles.ratingContainer>

      <Styles.ratingContainer>
        <Styles.rating onClick={handleFilterClick}>3 stars</Styles.rating>
        <Styles.bar><Styles.percent width={ratingsPct[3]}></Styles.percent></Styles.bar>
        <Styles.count>({ratings[3]})</Styles.count>
      </Styles.ratingContainer>

      <Styles.ratingContainer>
        <Styles.rating onClick={handleFilterClick}>2 stars</Styles.rating>
        <Styles.bar><Styles.percent width={ratingsPct[2]}></Styles.percent></Styles.bar>
        <Styles.count>({ratings[2]})</Styles.count>
      </Styles.ratingContainer>

      <Styles.ratingContainer>
        <Styles.rating onClick={handleFilterClick}>1 stars</Styles.rating>
        <Styles.bar><Styles.percent width={ratingsPct[1]}></Styles.percent></Styles.bar>
        <Styles.count>({ratings[1]})</Styles.count>
      </Styles.ratingContainer>

      <Styles.rec>{recommends}% of reviews recommend this product</Styles.rec>

    </Styles.Breakdown>
  );
};

export default Breakdown;
