import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddReview from './AddReview.jsx';
import Breakdown from './Breakdown.jsx';
import Characteristics from './Characteristics.jsx';
import Review from './Review';
import * as Styles from './Styles.js';

const Reviews = ({ product, meta, averageRating, totalReviews, setDateFormat }) => {
  const [reviews, setReviews] = useState([]); // all reviews
  const [reviewsList, setReviewsList] = useState([]); // manipulable list for sorting/filtering
  const [currentReviews, setCurrentReviews] = useState([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(2);
  const [chars, setChars] = useState(() => {
    let newChars = [];
    for (let char in meta.characteristics) {
      newChars.push(char);
    }
    return newChars;
  });

  const getReviews = () => {
    axios.get(`/reviews?count=100&sort=relevant&product_id=${product.id}`)
      .then((results) => {
        let newReviews = results.data.results;
        setDateFormat(newReviews);
        setReviews(newReviews);
        setReviewsList(newReviews);
        setCurrentReviews(newReviews.slice(0, 2));
      });
  };

  const sortReviewsList = (order) => {

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
    sortReviewsList(e.target.value);
    setCurrentReviews(reviewsList.slice(0, currentReviewIndex));
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
    }
  }, [product.id]);

  // load the next couple of reviews
  useEffect(() => {
    setCurrentReviews(reviewsList.slice(0, currentReviewIndex));
  }, [currentReviewIndex, reviewsList]);

  return (
    <Styles.Grid>
      {/* container for average rating, reviews breakdown, recommends, characteristics */}
      {/* <div id="ratings-breakdown"> */}
      <Styles.TitleBlock>
        <Styles.title>RATINGS & REVIEWS</Styles.title>
      </Styles.TitleBlock>
      <Styles.Summary>
        <Styles.overall>{averageRating}</Styles.overall>
        <div>stars go here</div>
      </Styles.Summary>


      <Breakdown reviews={reviews} reviewsList={reviewsList} setReviewsList={setReviewsList} meta={meta}/>
      <Characteristics chars={chars} ratings={meta.characteristics} />

      {/* </div> */}

      {/* container for sort dropdown, reviews, add review button */}
      {/* <Styles.Review> */}
      <Styles.Sort>
        <Styles.total>{reviews.length} reviews</Styles.total>
        <select id="sort" onChange={handleSort}>
          <option value="relevant">Relevant</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
      </Styles.Sort>
      <Styles.ReviewList>
        {currentReviews.map((review, index) => {
          return <Review key={index} review={review} />;
        })}
        {currentReviews.length === reviewsList.length
          ? null
          : <button onClick={handleLoadMoreReviews}>More Reviews</button>
        }
        <button>add a review</button>
      </Styles.ReviewList>
      {/* </Styles.Review> */}

      {/* <AddReview product={product} chars={chars} ratings={meta.characteristics}/> */}
    </Styles.Grid>
  );
};

export default Reviews;
