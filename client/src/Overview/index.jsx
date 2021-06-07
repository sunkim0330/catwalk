import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Gallery from './Gallery.jsx';
import ProductDescription from './Description.jsx';
import ProductInfo from './ProductInfo.jsx';
import CartManagement from './CartManagement.jsx';
import StyleSelector from './StyleSelector.jsx';

import { defaultProduct, defaultStyles, defaultRatings } from './dummyData.js';

const Overview = ({ product }) => {

  // product.id === undefined ? product = defaultProduct : null;

  const [styles, setStyles] = useState(defaultStyles);
  const [currentStyle, setCurrentStyle] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  // algorithim found here https://stackoverflow.com/questions/10196579/algorithm-used-to-calculate-5-star-ratings/38378697
  const getProductStyles = () => {
    axios.get(`/products/${product.id}/styles`)
      .then((response) => {
        let newStyles = response.data.results;
        setStyles(newStyles);
        for (let i = 0; i < newStyles; i++) {
          if (newStyles[i]['default?'] === true) {
            setCurrentStyle(i);
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
      <StyleSelector styles={styles} styleSelector={setCurrentStyle}/>
      <CartManagement styleInventory={styles[currentStyle].skus}/>
      <ProductDescription slogan={product.slogan} description={product.description} features={product.features}/>
    </div>
  );

};

export default Overview;

/*
Required state...
  current product (through props)
  current product styles
    - provides style thumbnails, and coresponding images
    - provides prices
    - provides available sizes, and quanity available
  current product reviews/meta for average review rating

*/

/* IMAGE GALLERY */
/*
  default view...
  - shows currently selected product style's images
  - updates when a new style is selected
  - can cycle between images (left/right)
  - can pan the image after zooming in
  - should have an expanded view
  - current image should be remembered when selecting new style
  - highlight currently selected thumbnail overlay
  - 7 images at most displayed in thumbnail overlay, additional images should be shown upon scroll
  - overlay should scroll with main display, if needed
  - arrows are hidden on ends of list

  expanded view...
  - temporarily covers item details (style selector, product name, category, add to cart, etc)
  - activates when the user clicks on the image
  - lets users zoom in on the image - 2.5x zoooooom - mouse should become + on hover in expanded view
  - when zoomed in, nothing is overlayed, mouse is a minus sign, and clicking returns the user to normal expanded view
  */


// ratings - this component will display the average rating of the product through stars
//   should include "Read all X Reviews", which is clickable
//   clicking read all reviews brings you to the reviews section
//   x is the amount of reviews for the product

// price - displayed price is based on currently selected style - updates when a new style is selected
//   if a sale price exists (is not null) display sale price, with original price under it, with a strikethrough

// add to cart - a button that posts the currently selected/displayed product to the user's cart
//   this will either trigger a post request to the card, or save the product to local storage
//   if clicked and no size is selected, the size dropdown is opened, and "Please select size" is displayed above the drop down
//   if no stock is available (by default or upon size selection) add to cart button is hidden

// select size - modifies the size of the product that would be added to the cart
//   this would use the <select> html tag
//   will not allow the user to selet sizes that are not currently stocked

// style selector - a collection of images displaying the different styled available for the product
//   clicking on a style displays the coresponding images for the style in the image gallery

// quantity selector - select the amount of the product that you want added to the card
//   this would use the <select> html tag
//   will not allow the user to pick an amount greater than current stock for currently selected size
