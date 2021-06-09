import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddReview from './AddReview.jsx';
import Breakdown from './Breakdown.jsx';
import Characteristics from './Characteristics.jsx';
import Review from './Review';


const Reviews = ({ product }) => {
  const [reviews, setReviews] = useState([]); // all reviews
  const [reviewsList, setReviewsList] = useState([]); // manipulable list for sorting/filtering
  const [currentReviews, setCurrentReviews] = useState([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(2);
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
        setReviewsList(newReviews);
        setCurrentReviews(newReviews.slice(0, 2));
        setTotalReviews(newReviews.length);
        setAvgRating(getAvg(newReviews));
      });
  };

  const getMeta = () => {
    axios.get(`/reviews/meta?product_id=${product.id}`)
      .then(results => setMeta(results.data));
  };

  const getAvg = (reviews) => {
    let total = 0;
    reviews.forEach(review => total += review.rating);
    return (total / reviews.length).toFixed(1);
  };

  const sortReviewsList = (order) => {
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
      let relevantSort = reviewsList.sort((a, b) => {
        return b.helpfulness - a.helpfulness
        || new Date(b.date) - new Date(a.date);
      });
      setReviewsList(relevantSort);
    }

    if (order === 'helpful') {
      let helpfulSort = reviewsList.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      });
      setReviewsList(helpfulSort);
    }

    if (order === 'newest') {
      let newSort = reviewsList.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      setReviewsList(newSort);
    }
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    sortReviewsList(e.target.value);
    setCurrentReviews(reviewsList.slice(0, currentReviewIndex));
  };

  // Will also need this in Q and A section
  const setDateFormat = () => {
    reviews.forEach((review) => {
      review.date = new Date(review.date).toLocaleDateString({}, {month: 'long', day: '2-digit', year: 'numeric'});
    });
  };

  const handleLoadMoreReviews = () => {

    currentReviewIndex <= reviewsList.length - 2
      ? setCurrentReviewIndex(prev => prev += 2)
      : setCurrentReviewIndex(prev => prev += 1);
  };

  // get review data
  useEffect(() => {
    if (product.id) {
      getReviews();
      getMeta();
    }
  }, [product.id]);

  // load the next couple of reviews
  useEffect(() => {
    setCurrentReviews(reviewsList.slice(0, currentReviewIndex));
  }, [currentReviewIndex, reviewsList]);

  return (
    <div id="container">
      {/* <Helpful origin='qa/answers' id='' type='report' /> */}
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


        <Breakdown reviews={reviews} reviewsList={reviewsList} setReviewsList={setReviewsList}/>
        <Characteristics />

      </div>

      {/* container for sort dropdown, reviews, add review button */}
      <div id="reviews">
        <div>
          <span>{reviews.length} reviews</span>
          <select id="sort" value={sort} onChange={handleSort}>
            <option value="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div id="reviews-list">
          {currentReviews.map((review, index) => {
            return <Review key={index} review={review} />;
          })}
          {currentReviews.length === reviewsList.length
            ? null
            : <button onClick={handleLoadMoreReviews}>More Reviews</button>
          }
        </div>
      </div>

    </div>
  );
};

export default Reviews;
