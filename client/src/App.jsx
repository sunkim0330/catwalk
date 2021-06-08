import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './Overview';
import Related from './Related';
import QandAs from './Q&As';
import Reviews from './Reviews';


const App = () => {

  const [currentProduct, setCurrentProduct] = useState({});
  const [reviewMetaData, setReviewMetaData] = useState({});
  const [averageRating, setAverageRating] = useState(5);
  const [currentStyles, setCurrentStyles] = useState();
  const [totalReviewCount, setTotalReviewCount] = useState(0);

  const getProductRatingsAndStyles = () => {
    axios.get(`/reviews/meta?product_id=${currentProduct.id}`)
      .then((response) => {
        console.log(response.data);
        let ratings = response.data.ratings;
        calculateReviewAverage(ratings);
        setReviewMetaData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const calculateReviewAverage = (ratings) => {
    let first = 0;
    let second = 0;
    for (let reviews in ratings) {
      first += (Number(reviews) * Number(ratings[reviews]));
      second += Number(ratings[reviews]);
    }
    setTotalReviewCount(second);
    let average = first / second;
    setAverageRating(average.toFixed(1));
  };

  useEffect(() => {
    axios.get('/products/19089')
      .then((response) => {
        setCurrentProduct(response.data);
      });
  }, []);

  useEffect(() => {
    if (currentProduct.id) {
      getProductRatings();
    }
  }, [currentProduct.id]);

  return (
    <div>
      Super Fun Shopping Experience
      <Overview product={currentProduct}/>
      <Related product={currentProduct}/>
      <QandAs product={currentProduct}/>
      <Reviews product={currentProduct}/>
    </div>
  );
};


export default App;