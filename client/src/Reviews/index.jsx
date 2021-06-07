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
    axios.get(`/reviews?count=100&sort=relevant&product_id=${product.id}`)
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

      // well after figuring this out I realized that the API simply sorts by helpfulness, then by date if helpfulness is equal

      var d = 1000000000; // new Date difference is a huge number, use this number to get a decimal
      var age = (new Date(review.date) - new Date()) / d; // call a new Date obj to allow subtraction
      return age + review.helpfulness; // this is the relevance score;

      // if a review has a high helpfulness number (e.g. 20) it will be at the top
      // if a review has a low helpfulness number, but is newer it will be closer to the top
      // e.g. helpfulness = 2, age = 3 months; helpfulness = 1, age = 2 weeks will be first
    };

    if (order === 'relevant') {
      let relevantSort = reviews.sort((a, b) => {
        return b.helpfulness - a.helpfulness
        || new Date(b.date) - new Date(a.date);
      });
      setReviews(relevantSort);
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