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

    currentFilters.sort((a, b) => { return b - a; });

    return (
      <Styles.spacer>
        <Styles.filter>
          Filtered by:
          {currentFilters.map((filter, index) => {
            return (
              // need to remove the comma on last item
              // 1 star instead of stars
              <span key={index}> {filter} stars, </span>
            );
          })}
        </Styles.filter>
        <Styles.remove onClick={handleRemoveFilters}>Remove all filters</Styles.remove>
      </Styles.spacer>
    );
  };

  const handleRemoveFilters = () => {
    setIsFiltered(false);
    setFilters(prev => {
      for (let rating in prev) {
        prev[rating] = false;
      }
      return prev;
    });
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

  const renderCharacteristics = () => {
    let charRating = [5, 4, 3, 2, 1];

    return charRating.map((rating) => {
      return (
        <Styles.ratingContainer key={rating}>
          <Styles.rating onClick={handleFilterClick}>{rating} {rating === 1 ? 'star' : 'stars'}</Styles.rating>
          <Styles.bar><Styles.percent width={ratingsPct[rating]}></Styles.percent></Styles.bar>
          <Styles.count>({ratings[rating]})</Styles.count>
        </Styles.ratingContainer>
      );
    });
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

    let t = Number(meta.recommended.true);
    let f = Number(meta.recommended.false);

    setRecommends(() => {
      return Math.round((f / (t + f)) * 100);
    });
  }, [reviews]);

  // update filters
  useEffect(() => {
    filterReviews();
  }, [filters]);

  // get the percentage of each rating, determine the width of the div bar for each rating
  useEffect(() => {
    let newRatingsPct = {};
    for (let rating in ratings) {
      let percentage;
      // for products with no reviews
      ratings[rating] === 0 ? (
        percentage = 0
      ) : (
        percentage = Math.round((ratings[rating] / reviews.length) * 100)
      );

      newRatingsPct[rating] = percentage + '%';
    }
    setRatingsPct(newRatingsPct);
  }, [ratings]);

  // refactor using map or loop
  return (
    <Styles.Breakdown>

      {isFiltered ? (
        showCurrentFilters()
      ) : (
        <Styles.spacer>
          <Styles.filter>Filtered by: none</Styles.filter>
        </Styles.spacer>
      )
      }

      {renderCharacteristics()}

      <Styles.rec>{recommends}% of reviews recommend this product</Styles.rec>

    </Styles.Breakdown>
  );
};

export default Breakdown;
