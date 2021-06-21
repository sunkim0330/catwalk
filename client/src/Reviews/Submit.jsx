import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Theme } from '../App.jsx';
import * as Styles from './Styles.js';

const Submit = ({ reviewInfo, ratings, closeReview, getReviews }) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  const theme = useContext(Theme);

  const submitReview = () => {
    console.log(reviewInfo);
    axios.post('/reviews', reviewInfo)
      .then(res => {
        console.log('submitted', res);
        getReviews(reviewInfo.product_id);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrorMessage = ['You must enter the following:'];

    const checkErrors = () => {
      let hasError = false;

      if (!reviewInfo.rating) {
        newErrorMessage.push('Overall rating');
        hasError = true;
      }

      for (let char in reviewInfo.characteristics) {
        if (!reviewInfo.characteristics[char]) {
          hasError = true;
          for (let key in ratings) {
            if (ratings[key].id === Number(char)) {
              newErrorMessage.push(`${key} rating`);
            }
          }
        }
      }

      if (reviewInfo.body.length < 50) {
        newErrorMessage.push('Review must be at least 50 characters');
        hasError = true;
      }

      if (!reviewInfo.name) {
        newErrorMessage.push('Nickname');
        hasError = true;
      }

      if (!reviewInfo.email) {
        newErrorMessage.push('Email');
        hasError = true;
      }

      return hasError;

    };

    if (checkErrors()) {
      setHasError(true);
      setErrorMessage(newErrorMessage);
      return;
    } else {
      submitReview();
      closeReview();
    }

  };

  const closeError = () => {
    setHasError(false);
    setErrorMessage([]);
  };

  return (
    <>
      <Styles.button
        onClick={handleSubmit}
        shadow={theme.shadow}
        hoverShadow={theme.hoverShadow}
      >Submit review</Styles.button>

      {hasError ? (
        <>
          <Styles.errOverlay></Styles.errOverlay>
          <Styles.errorModal background={theme.background}>
            {errorMessage.map((error, i) => {
              return i === 0 ? (
                <Styles.textMain key={i}>{error}</Styles.textMain>
              ) : (
                <Styles.textSmall key={i}>{error}</Styles.textSmall>
              );
            })}
            <Styles.button
              onClick={closeError}
              shadow={theme.shadow}
              hoverShadow={theme.hoverShadow}
            >Will do!</Styles.button>
          </Styles.errorModal>

        </>
      ) : null
      }
    </>
  );
};

export default Submit;
