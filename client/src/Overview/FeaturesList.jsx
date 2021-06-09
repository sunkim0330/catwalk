import React from 'react';

const FeaturesList = ({ features }) => (
  <ul>
    {features.map((feature, index) => {
      return <li key={index}>{feature.feature}: {feature.value}</li>;
    })}
  </ul>
);

export default FeaturesList;
