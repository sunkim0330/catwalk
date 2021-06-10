import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Submit = ({ reviewInfo }) => {
  // const [errorMessage, setErrorMessage] = useState('You must enter the following:\n');
  // const [hasError, setHasError] = useState(false);
  // const [isMounted, setIsMounted] = useState(false);


  // const checkErrors = () => {

  //   if (!reviewInfo.rating) {
  //     setErrorMessage(prev => prev += 'Overall rating\n');
  //     setHasError(true);
  //   }

  //   for (let char in reviewInfo.characteristics) {
  //     if (!reviewInfo.characteristics[char]) {
  //       setErrorMessage(prev => prev += `${[char]} rating\n`);
  //       setHasError(true);
  //     }
  //   }

  //   if (reviewInfo.body.length < 50) {
  //     setErrorMessage(prev => prev += 'Review must be at least 50 characters\n');
  //     setHasError(true);
  //   }

  //   if (!reviewInfo.name) {
  //     setErrorMessage(prev => prev += 'Nickname\n');
  //     setHasError(true);

  //   }

  //   if (!reviewInfo.email) {
  //     setErrorMessage(prev => prev += 'Email\n');
  //     setHasError(true);
  //   }

  // };

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

      // need to get the char name
      for (let char in reviewInfo.characteristics) {
        if (!reviewInfo.characteristics[char]) {
          errorMessage += `${char} rating\n`;
          hasError = true;
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
    }

  };

  // useEffect(() => {

  //   // this conditional makes sure it doesn't send the post request on the initial rendering
  //   if (!isMounted) {
  //     setIsMounted(true);
  //     return;
  //   }

  //   if (hasError) {
  //     alert(errorMessage);
  //     setErrorMessage('You must enter the following:\n');
  //     setHasError(false);
  //     return;
  //   } else {
  //     console.log('no errors');
  //   }
  // }, [hasError]);

  return (
    <div>
      <button onClick={handleSubmit}>Submit review</button>
    </div>
  );
};

export default Submit;
