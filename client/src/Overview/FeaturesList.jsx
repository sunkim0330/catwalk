import React, { useContext } from 'react';
import * as Styles from './styledComponents.js';
import { Theme } from '../App.jsx';

const FeaturesList = ({ features }) => {

  const theme = useContext(Theme);

  return (
    <Styles.Features>
      <Styles.FeaturesHeader>Product Features</Styles.FeaturesHeader>
      {features.map((feature, index) => {
        return <Styles.FeaturesItem key={index}>{feature.feature}: {feature.value}</Styles.FeaturesItem>;
      })}
    </Styles.Features>
  );

};

export default FeaturesList;
