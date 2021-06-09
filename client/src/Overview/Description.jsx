import React from 'react';
import FeaturesList from './FeaturesList.jsx';

const ProductDescription = ({ slogan, description, features }) => {

  return (
    <div id="productDescription">
      <h3>{slogan}</h3>
      <p>{description}</p>
      <FeaturesList features={features}/>
      <div id="socials">
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false" target="_blank"><button>Tweet Product</button></a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>
    </div>
  );

};

export default ProductDescription;
