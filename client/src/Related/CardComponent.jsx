import React, {useEffect, useState} from 'react';

const Card = (props) => {

  if (props.style) {
    return (
      <div>
        {props.product.name}
        {props.style.name}
      </div>
    );
  } else {
    return (null);
  }
};


export default Card;

/*
Product Category
Product Name
Price - As the price is not actually derived from the product, the price displayed should be that for the default style. Sale prices should be reflected.  If the style is currently discounted, then the sale price should appear in red, followed by the original price which is struckthrough.
Star Rating (# of Reviews) - Each product has an average rating based on its reviews.  The average rating of the product will be displayed in the format of solid or outlined stars, where the solid stars represents the review score. A total of 5 stars should always appear, and the amount filled in should correspond to the average score.

*/