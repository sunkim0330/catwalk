import React from 'react';
import * as Styles from './styledComponents.js';
import Stars from '../Shared/Star.jsx';

const ProductInfo = ({ product, style, rating, reviewCount }) => {

  let priceDisplay, ratingDisplay;

  if (style.sale_price) {
    priceDisplay = (
      <>
        <Styles.Price color={'red'}>
          <del>${product.default_price}</del>
        </Styles.Price>
        <Styles.Price>${style.sale_price}</Styles.Price>
      </>
    );
  } else {
    priceDisplay = <Styles.Price>${product.default_price}</Styles.Price>;
  }

  if (reviewCount) {
    ratingDisplay = (
      <Styles.RatingDisplay>
        <Stars rating={rating} width={'100px'} left={'24px'} position={'relative'}/>
        <Styles.LinkToReviews href="#container">{`Read all ${reviewCount} reviews`}</Styles.LinkToReviews>
      </Styles.RatingDisplay>
    );
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
