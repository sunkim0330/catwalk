import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Styles from './Styles.js';

const Submit = ({ reviewInfo, ratings, closeReview }) => {

  const submitReview = () => {
    axios.post('/reviews', reviewInfo)
      .then(res => {
        console.log('submitted', res);
      })
      .catch(err => {
        console.log('error: ', err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errorMessage = 'You must enter the following:\n';

    const checkErrors = () => {
      let hasError = false;

      if (!reviewInfo.rating) {
        errorMessage += 'Overall rating\n';
        hasError = true;
      }

      for (let char in reviewInfo.characteristics) {
        if (!reviewInfo.characteristics[char]) {
          hasError = true;
          for (let key in ratings) {
            if (ratings[key].id === Number(char)) {
              errorMessage += `${key} rating\n`;
            }
          }
        }
      }

      if (reviewInfo.body.length < 50) {
        errorMessage += 'Review must be at least 50 characters\n';
        hasError = true;
      }

      if (!reviewInfo.name) {
        errorMessage += 'Nickname\n';
        hasError = true;
      }

      if (!reviewInfo.email) {
        errorMessage += 'Email\n';
        hasError = true;
      }

      return hasError;

    };

    if (checkErrors()) {
      alert(errorMessage);
      return;
    } else {
      submitReview();
      closeReview();
    }

  };

  return (
    <div>
      <Styles.button onClick={handleSubmit}>Submit review</Styles.button>
    </div>
  );
};

export default Submit;
