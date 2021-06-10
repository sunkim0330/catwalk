import React, {useState, useEffect} from 'react';
import {DeleteButton} from './ActionButtons.jsx';


const OutfitCard = (props) => {
  return (
    <div>
      <DeleteButton />
      {props.piece.product.name}
    </div>
  );
};


export default OutfitCard;