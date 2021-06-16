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
    let order = e.target.innerText;

    setHovered(false);

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

  const displayDefault = () => {
    return (
      <Styles.dropdown>
        <Styles.currentSort
          onMouseEnter={handleHover}

        >
          {options[0]}
        </Styles.currentSort>
      </Styles.dropdown>
    );
  };

  const displayList = () => {
    return (
      <Styles.list onMouseLeave={handleHover}>
        {options.map((option, i) => {
          return (
            i === 0 ? (
              <Styles.currentSort
                key={option}
                // onClick={handleSort}
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
    );
  };


  return (
    <>
      <Styles.list>
        {options.map((option, i) => {
          return (
            i === 0 ? (
              <Styles.currentSort
                key={option}
                // onClick={handleSort}
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

      {/* {hovered ? displayList() : displayDefault()} */}

      {/* {hovered ? (
        <Styles.sortMethods onMouseLeave={handleHover}>
          {options.map(option => {
            return (
              <Styles.sortOption
                onClick={handleSort}
                key={option}
              >{option}</Styles.sortOption>
            );
          })}
        </Styles.sortMethods>
      ) : (
        <Styles.currentSort
          onMouseEnter={handleHover}

        >
          {sort} <Styles.arrow></Styles.arrow>
        </Styles.currentSort>
      )} */}

      {/* <Styles.dropdown>
        <Styles.currentSort
          onClick={handleHover}
          // onMouseLeave={handleHover}
        >
          {options[0]}
        </Styles.currentSort>
      </Styles.dropdown> */}

    </>
  );
};

export default Dropdown;

