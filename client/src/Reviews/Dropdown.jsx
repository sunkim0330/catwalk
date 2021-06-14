import React, { useState, useEffect } from 'react';
import * as Styles from './Styles.js';

const Dropdown = ({ sort, setSort, sortReviewsList, setCurrentReviews, currentReviewIndex, reviewsList }) => {
  const [hovered, setHovered] = useState(false);
  const [options, setOptions] = useState(['Relevant', 'Helpful', 'Newest']);

  const handleHover = (e) => {
    let type = e.type;

    type === 'mouseenter' ? setHovered(true) : setHovered(false);
  };

  const handleSort = (e) => {
    setHovered(false);
    sortReviewsList(e.target.innerText);
    setCurrentReviews(reviewsList.slice(0, currentReviewIndex));
  };

  return (
    <>

      {hovered ? (
        <div onMouseLeave={handleHover}>
          {options.map(option => {
            return (
              <Styles.textMain
                onClick={handleSort}
                key={option}
              >{option}</Styles.textMain>
            );
          })}
        </div>
      ) : (
        <Styles.currentSort
          onMouseEnter={handleHover}

        >
          {sort} <Styles.arrow></Styles.arrow>
        </Styles.currentSort>
      )}

    </>
  );
};

export default Dropdown;

