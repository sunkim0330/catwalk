import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Gallery from './Gallery.jsx';
import ProductDescription from './Description.jsx';
import ProductInfo from './ProductInfo.jsx';
import CartManagement from './CartManagement.jsx';
import StyleSelector from './StyleSelector.jsx';

import { defaultProduct, defaultStyles, defaultRatings } from './dummyData.js';

const Overview = ({ product }) => {

  const [styles, setStyles] = useState(defaultStyles);
  const [currentStyle, setCurrentStyle] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  const getProductStyles = () => {
    axios.get(`/products/${product.id}/styles`)
      .then((response) => {
        let productStyles = response.data.results;
        setStyles(productStyles);
        for (let i = 0; i < productStyles; i++) {
          if (productStyles[i]['default?'] === true) {
            setCurrentStyle(i);
            break;
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getProductRatings = () => {
    axios.get(`/reviews/meta?product_id=${product.id}`)
      .then((response) => {
        let ratings = response.data.ratings;
        let ratingAverage = calculateReviewAverage(ratings);
        setAverageRating(ratingAverage);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // algorithim found here
  // https://stackoverflow.com/questions/10196579/algorithm-used-to-calculate-5-star-ratings/38378697
  const calculateReviewAverage = (ratings) => {
    let first = 0;
    let second = 0;
    let reviewCount = 0;
    for (let reviews in ratings) {
      reviewCount += Number(ratings[reviews]);
      first += (Number(reviews) * Number(ratings[reviews]));
      second += Number(ratings[reviews]);
    }
    setTotalReviews(reviewCount);
    let average = first / second;
    return Number(average.toFixed(1));
  };

  useEffect(() => {
    if (product.id) {
      getProductStyles();
      getProductRatings();
    }
  }, [product.id]);

  return (
    <div id="overview">
      <h2>Overview Component</h2>
      <Gallery images={styles[currentStyle]}/>
      <ProductInfo product={product} style={styles[currentStyle]} rating={averageRating} reviewCount={totalReviews}/>
      <StyleSelector styles={styles} setCurrentStyle={setCurrentStyle} currentStyle={styles[currentStyle]}/>
      <CartManagement styleInventory={styles[currentStyle].skus}/>
      <ProductDescription slogan={product.slogan} description={product.description} features={product.features}/>
    </div>
  );

};

export default Overview;
