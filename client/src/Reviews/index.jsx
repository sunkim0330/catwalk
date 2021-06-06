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
  const [sort, setSort] = useState('relevant');

  const getReviews = () => {
    axios.get(`/reviews/?product_id=${product.id}&count=100`)
      .then((results) => {
        let newReviews = results.data.results;
        setReviews(newReviews);
        setTotalReviews(newReviews.length);
        setAvgRating(getAvg(newReviews));
      });
  };

  const getMeta = () => {
    axios.get(`/reviews/meta/?product_id=${product.id}`)
      .then(results => setMeta(results.data));
  };

  const getAvg = (reviews) => {
    let total = 0;
    reviews.forEach(review => total += review.rating);
    return (total / reviews.length).toFixed(1);
  };

  useEffect(() => {
    if (product.id) {
      getReviews();
      getMeta();
    }
  }, [product.id]);

  const sortReviews = (order) => {
    const calculateRelevance = (review) => {

    };

    if (order === 'relevant') {

    }

    if (order === 'helpful') {
      let helpfulSort = reviews.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      });
      setReviews(helpfulSort);
    }

    if (order === 'newest') {
      let newSort = reviews.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      setReviews(newSort);
    }
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    sortReviews(e.target.value);
  };

  // Will also need this in Q and A section
  const setDateFormat = () => {
    reviews.forEach((review) => {
      review.date = new Date(review.date).toLocaleDateString({}, {month: 'long', day: '2-digit', year: 'numeric'});
    });
  };


  return (
    <div id="container">

      {/* container for average rating, reviews breakdown, recommends, characteristics */}
      <div id="ratings-breakdown">
        <div>
          <span>RATINGS & REVIEWS</span>
          <div>
            {avgRating}
          </div>
          <div>
            stars go here
          </div>
        </div>

        {/* move breakdown and char divs to their components? */}
        <div id="breakdown">
          <Breakdown />
        </div>

        <div id="characteristics">
          <Characteristics />
        </div>

      </div>

      {/* container for sort dropdown, reviews, add review button */}
      <div id="reviews">
        <div>
          <span>{reviews.length}</span>
          <select id="sort" value={sort} onChange={handleSort}>
            <option value="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

    </div>
  );
};

export default Reviews;