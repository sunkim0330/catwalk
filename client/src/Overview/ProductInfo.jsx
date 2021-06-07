import React from 'react';

const ProductInfo = ({ product, style, rating, reviewCount }) => {

  let priceDisplay, ratingDisplay;

  if (style.sale_price) {
    priceDisplay = <div id="priceDisplay"><div>{style.sale_price}</div><div>
      <del>{product.default_price}</del></div></div>;
  } else {
    priceDisplay = <div>{product.default_price}</div>;
  }

  reviewCount !== 0 ? ratingDisplay = <div>{`${rating} Read all ${reviewCount} <a>reviews<a>`}</div> : null;

  return (
    <div id="productInfo">
      {ratingDisplay}
      <div>{product.category}</div>
      <div>{product.name}</div>
      {priceDisplay}
    </div>
  );

};

export default ProductInfo;
