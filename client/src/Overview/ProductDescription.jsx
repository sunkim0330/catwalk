import React from 'react';
import FeaturesList from './FeaturesList.jsx';
import * as Styles from './styledComponents.js';

const ProductDescription = ({ slogan, description, features }) => {

  return (
    <Styles.ProductDescription>
      <FeaturesList features={features}/>
      <Styles.Slogan>{slogan}</Styles.Slogan>
      <Styles.Description>{description}</Styles.Description>
    </Styles.ProductDescription>
  );

};

export default ProductDescription;
