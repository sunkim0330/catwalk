import React from 'react';

const ProductDescription = ({ slogan, description, features }) => {

  if (features !== undefined) {

    return (
      <div id="productDescription">
        <h3>Product Description</h3>
        <h3>{slogan}</h3>
        <p>{description}</p>
        <ul>
          {features.map((feature, index) => {
            return <li key={index}>{feature.feature}: {feature.value}</li>;
          })}
        </ul>
      </div>
    );

  }

  return (<div></div>);
};

export default ProductDescription;
