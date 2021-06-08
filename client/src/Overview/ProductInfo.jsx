import React from 'react';

const ProductInfo = ({ name, category, reviewAverage, price}) => {

  return (
    <div id="productInfo">
      <h3>Product Info</h3>
      <ul>
        <li>Jump To Reviews</li>
        <li>Name</li>
        <li>Category</li>
        <li>Price</li>
      </ul>
    </div>
  );

};

export default ProductInfo;