import React, { useContext } from 'react';
import FeaturesList from './FeaturesList.jsx';
import * as Styles from './styledComponents.js';
import { Theme } from '../App.jsx';

const ProductDescription = ({ slogan, description, features }) => {

  const theme = useContext(Theme);

  return (
    <Styles.ProductDescription>
      <FeaturesList features={features}/>
      <Styles.Slogan>{slogan}</Styles.Slogan>
      <Styles.Description>{description}</Styles.Description>
    </Styles.ProductDescription>
  );

};

export default ProductDescription;
