import React from 'react';

const ProductInfo = ({ product, style, rating }) => {

  let priceDisplay;

  if (style.sale_price) {
    priceDisplay = <div id="priceDisplay"><div>{style.sale_price}</div><div>
      <del>{product.default_price}</del></div></div>;
  } else {
    priceDisplay = <div>{product.default_price}</div>;
  }

  return (
    <div id="productInfo">
      <div>{rating}</div>
      <div>{product.category}</div>
      <div>{product.name}</div>
      {priceDisplay}
    </div>
  );

};

export default ProductInfo;