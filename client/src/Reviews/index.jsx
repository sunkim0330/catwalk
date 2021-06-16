import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddReview from './AddReview.jsx';
import Breakdown from './Breakdown.jsx';
import Characteristics from './Characteristics.jsx';
import Review from './Review';
import Stars from '../Shared/Star.jsx';
import Dropdown from './Dropdown.jsx';
import * as Styles from './Styles.js';

const Reviews = ({ product, meta, averageRating, totalReviews, setDateFormat }) => {
  const [reviews, setReviews] = useState([]); // all reviews
  const [reviewsList, setReviewsList] = useState([]); // manipulable list for sorting/filtering
  const [currentReviews, setCurrentReviews] = useState([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(2);
  const [chars, setChars] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [sort, setSort] = useState('Relevant');

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
    // update sort method
    setSort(order);

    if (order === 'Relevant') {
      let relevantSort = reviewsList.sort((a, b) => {
        return b.helpfulness - a.helpfulness
        || new Date(b.date) - new Date(a.date);
      });
      setReviewsList(relevantSort);
    }

    if (order === 'Helpful') {
      let helpfulSort = reviewsList.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      });
      setReviewsList(helpfulSort);
    }

    if (order === 'Newest') {
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

  const handleShowForm = () => {
    setShowForm(true);
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

  // update chars array
  useEffect(() => {
    let newChars = [];
    for (let char in meta.characteristics) {
      newChars.push(char);
    }
    setChars(newChars);
  }, [meta]);

  useEffect(() => {
    sortReviewsList(sort);
  }, [sort]);


  return (
    <>
      <Styles.Grid id="reviews-container">
        {/* container for average rating, reviews breakdown, recommends, characteristics */}
        {/* <div id="ratings-breakdown"> */}
        <Styles.TitleBlock>
          <Styles.title>RATINGS & REVIEWS</Styles.title>
        </Styles.TitleBlock>
        <Styles.Summary>
          <Styles.overall>{averageRating}</Styles.overall>
          <Stars
            rating={averageRating}
            width='50%'
            padding='10px 10px 0 5px'
            margin='10px 5px'
          />
        </Styles.Summary>


        <Breakdown reviews={reviews} reviewsList={reviewsList} setReviewsList={setReviewsList} meta={meta} sort={sort} sortReviewsList={sortReviewsList} />
        <Characteristics chars={chars} ratings={meta.characteristics} />

        {/* </div> */}

        {/* container for sort dropdown, reviews, add review button */}

        <Styles.Sort>
          <Styles.flexContainerLong>
            <Styles.textMain>{reviews.length} reviews</Styles.textMain>
            <Dropdown
              sort={sort}
              setSort={setSort}
              sortReviewsList={sortReviewsList}
              setCurrentReviews={setCurrentReviews}
              currentReviewIndex={currentReviewIndex}
              reviewsList={reviewsList}
            />
          </Styles.flexContainerLong>
        </Styles.Sort>
        <Styles.ReviewList>
          {currentReviews.map((review, index) => {
            return <Review key={index} review={review} />;
          })}
          <Styles.flexFit>
            {currentReviews.length === reviewsList.length
              ? null
              : <Styles.button onClick={handleLoadMoreReviews}>More reviews</Styles.button>
            }
            <Styles.button onClick={handleShowForm}>Add a review</Styles.button>
          </Styles.flexFit>
        </Styles.ReviewList>


      </Styles.Grid>

      {showForm ? (
        <AddReview product={product} chars={chars} ratings={meta.characteristics} setShowForm={setShowForm} />
      ) : (
        null
      )}

    </>
  );
};

export default Reviews;
