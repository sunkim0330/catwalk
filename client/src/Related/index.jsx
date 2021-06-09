import React from 'react';
import styled from 'styled-components';
import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';


const Related = (props) => {
  return (
    <div>
      <RelatedList product={props.product} setCurrentProduct={props.setProduct} currentStyle={props.defaultStyle} />
      <OutfitList />
    </div>
  );
};

export default Related;