import React, { useContext } from 'react';
import * as Styles from './styledComponents.js';
import Stars from '../Shared/Star.jsx';
import { Theme } from '../App.jsx';

const ProductInfo = ({ product, style, rating, reviewCount }) => {

  const theme = useContext(Theme);
  let priceDisplay, ratingDisplay;

  if (style.sale_price) {
    priceDisplay = (
      <>
        <Styles.Price color={'red'}>
          <del>${product.default_price}</del>
        </Styles.Price>
        <Styles.Price theme={theme}>${style.sale_price}</Styles.Price>
      </>
    );
  } else {
    priceDisplay = <Styles.Price>${product.default_price}</Styles.Price>;
  }

  if (reviewCount) {
    ratingDisplay = (
      <Styles.RatingDisplay>
        <Stars rating={rating} width={'100px'} left={'24px'} position={'relative'}/>
        <Styles.LinkToReviews theme={theme} href="#reviews-container">{`Read all ${reviewCount} reviews`}</Styles.LinkToReviews>
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
