import React, {useState, useEffect} from 'react';
import {DeleteButton} from './ActionButtons.jsx';


const OutfitCard = (props) => {
  return (
    <div>
      <DeleteButton name={props.piece.product.name} updateCloset={props.updateCloset} />
      <h3>{props.piece.product.category}</h3>
      <h1>{props.piece.product.name}</h1>
      <h3>Rating: {props.piece.rating !== 'NaN' ? props.piece.rating : 'Be the first to rate'}</h3>
      {props.piece.style.sale_price ? <div><strike>{props.piece.style.original_price}</strike><style color='red'>{props.piece.style.sale_price}</style></div> : <div>{props.piece.style.original_price}</div>}
      <img src={props.piece.style.photos[0].thumbnail_url}></img>
    </div>
  );
};


export default OutfitCard;