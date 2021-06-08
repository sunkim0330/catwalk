import React from 'react';

const ProductDescription = ({ slogan, description, features }) => {

  if (features) {

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
        <div id="socials">
          <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false" target="_blank"><button>Tweet Product</button></a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
      </div>
    );

  }

  return (<div></div>);
};

export default ProductDescription;
