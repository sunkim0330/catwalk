import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddReview from './AddReview.jsx';
import Breakdown from './Breakdown.jsx';
import Characteristics from './Characteristics.jsx';
import Review from './Review';

const Reviews = ({ product }) => {
  const [reviews, setReviews] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [avgRating, setAvgRating] = useState(0);
  const [meta, setMeta] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const getReviews = (productId) => {
    return productId !== undefined
      ? axios.get(`/reviews/?product_id=${productId}&count=100`)
        .then((results) => {
          let newReviews = results.data.results;
          setReviews(newReviews);
          setTotalReviews(newReviews.length);
          setAvgRating(getAvg(newReviews));
        })

      : null;
  };

  const getMeta = (productId) => {
    return productId !== undefined
      ? axios.get(`/reviews/meta/?product_id=${productId}`)
        .then(results => setMeta(results.data))

      : null;
  };

  const getAvg = (reviews) => {
    let total = 0;
    reviews.forEach(review => total += review.rating);
    return (total / reviews.length).toFixed(1);
  };

  useEffect(() => {
    getReviews(product.id);
    getMeta(product.id);
  }, [product]);



  return (
    <div>
      Reviews
    </div>
  );
};

export default Reviews;