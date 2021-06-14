import React, { useState, useEffect } from 'react';

const Dropdown = ({ sort, setSort, sortReviewsList, setCurrentReviews, currentReviewIndex, reviewsList }) => {
  const [hovered, setHovered] = useState(false);
  const [options, setOptions] = useState(['Relevant', 'Helpful', 'Newest']);

  const handleHover = (e) => {
    let type = e.type;

    type === 'mouseenter' ? setHovered(true) : setHovered(false);
  };

  // const handleSort = (e) => {
  //   let method = e.target.innerText;
  //   // console.log(e);
  //   setSort(method);
  // };

  const handleSort = (e) => {
    sortReviewsList(e.target.innerText);
    setCurrentReviews(reviewsList.slice(0, currentReviewIndex));
  };

  return (
    <>
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >{sort}
        <div>
          {hovered ? (
            options.map(option => {
              return <div
                onClick={handleSort}
                key={option}
              >{option}</div>;
            })
          ) : null
          }
        </div>
      </div>
    </>
  );
};

export default Dropdown;