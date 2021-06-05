import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Overview = ({ product }) => {
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(0);
  const [reviewRatings, setReviewRatings] = useState({});
  const [averageRating, setAverageRating] = useState(5.0);

  const getProductStyles = () => {
    axios.get(`/products/${product.id}/styles`)
      .then((response) => {
        setStyles(response.data);
      });
  };

  const getProductRatings = () => {
    axios.get(`/reviews/meta?product_id=${product.id}`)
      .then((response) => {
        let ratings = response.data.ratings;
        let average = ((Number(ratings['1']) * 1 + Number(ratings['2']) * 2 + Number(ratings['3']) * 3 + Number(ratings['4']) * 4 + Number(ratings['5']) * 5) / (Number(ratings['1']) + Number(ratings['2']) + Number(ratings['3']) + Number(ratings['4']) + Number(ratings['5'])));
        setAverageRating(Number(average.toFixed(1)));
        setReviewRatings(response.data);
      });
  };


  useEffect(() => {
    if (product.id) {
      getProductStyles();
      getProductRatings();
    }
  }, [product]);

  return (
    <div>
      Overview Component
      <div id="gallery">Image Gallery</div>
      <div>Product Info</div>
      <div>Style Selector</div>
      <div>Cart Management</div>
      <div>{product.id}</div>
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
  // should include "Read all X Reviews", which is clickable
  // clicking read all reviews brings you to the reviews section
  // x is the amount of reviews for the product

// price - displayed price is based on currently selected style - updates when a new style is selected
  // if a sale price exists (is not null) display sale price, with original price under it, with a strikethrough

// add to cart - a button that posts the currently selected/displayed product to the user's cart
  // this will either trigger a post request to the card, or save the product to local storage
  // if clicked and no size is selected, the size dropdown is opened, and "Please select size" is displayed above the drop down
  // if no stock is available (by default or upon size selection) add to cart button is hidden

// select size - modifies the size of the product that would be added to the cart
  // this would use the <select> html tag
  // will not allow the user to selet sizes that are not currently stocked

// style selector - a collection of images displaying the different styled available for the product
  // clicking on a style displays the coresponding images for the style in the image gallery

// quantity selector - select the amount of the product that you want added to the card
  // this would use the <select> html tag
  // will not allow the user to pick an amount greater than current stock for currently selected size