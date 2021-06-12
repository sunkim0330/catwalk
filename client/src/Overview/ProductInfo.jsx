import React from 'react';
import * as Styles from './styledComponents.js';

const ProductInfo = ({ product, style, rating, reviewCount }) => {

  let priceDisplay, ratingDisplay;

  if (style.sale_price) {
    priceDisplay = <div id="priceDisplay"><Styles.Price>{style.sale_price}</Styles.Price><Styles.Price>
      <del>{product.default_price}</del></Styles.Price></div>;
  } else {
    priceDisplay = <Styles.Price>{product.default_price}</Styles.Price>;
  }

  if (reviewCount) {
    ratingDisplay = <Styles.RatingDisplay>{rating} <a href="#container">{`Read all ${reviewCount} reviews`}</a></Styles.RatingDisplay>;
  }

  return (
    <Styles.ProductInfo>
      {ratingDisplay}
      <Styles.Category>{product.category}</Styles.Category>
      <Styles.Name>{product.name}</Styles.Name>
      {priceDisplay}
    </Styles.ProductInfo>
  );

};

export default ProductInfo;
