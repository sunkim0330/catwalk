import React from 'react';
import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';

const Related = (props) => {
  return (
    <div>
      <RelatedList product={props.product}/>
      <OutfitList />
    </div>
  );
};

export default Related;