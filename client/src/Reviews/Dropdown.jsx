import React, { useState, useEffect } from 'react';
import * as Styles from './Styles.js';

const Dropdown = ({ sort, setSort, sortReviewsList, setCurrentReviews, currentReviewIndex, reviewsList }) => {
  const [options, setOptions] = useState(['Relevant', 'Helpful', 'Newest']);


  const handleSort = (e) => {
    let order = e.target.innerText;

    setOptions((prev => {
      let temp = prev[0];
      let i = prev.indexOf(order);
      prev[0] = order;
      prev[i] = temp;
      return prev;
    }));

    sortReviewsList(order);
    setCurrentReviews(reviewsList.slice(0, currentReviewIndex));
  };


  return (
    <>
      <Styles.list>
        {options.map((option, i) => {
          return (
            i === 0 ? (
              <Styles.currentSort
                key={option}
              >
                {option}
              </Styles.currentSort>
            ) : (
              <Styles.listItem
                key={option}
                onClick={handleSort}
              >
                {option}
              </Styles.listItem>
            )
          );
        })}
      </Styles.list>

    </>
  );
};

export default Dropdown;

