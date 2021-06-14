import React, {useState, useEffect} from 'react';
import {DeleteButton} from './ActionButtons.jsx';
import {CardDiv, LabelDiv, NameText, SecondaryText} from './styled.js';
import Stars from '../Shared/Star.jsx';
import placeholder from './assets/file.png';


const OutfitCard = (props) => {
  let image = props.piece.style.photos[0].thumbnail_url || placeholder;

  return (
    <CardDiv image={image} grid={props.grid}>
      <DeleteButton name={props.piece.product.name} updateCloset={props.updateCloset} />
      <LabelDiv>
        <SecondaryText>{props.piece.product.category}</SecondaryText>
        <NameText>{props.piece.product.name}</NameText>
        {props.piece.rating !== 'NaN' ? <Stars rating={props.piece.rating} width={'30%'}></Stars> : null}
        {props.piece.style.sale_price ? <div><strike>{props.piece.style.original_price}</strike><style color='red'>{props.piece.style.sale_price}</style></div> : <div>{props.piece.style.original_price}</div>}
      </LabelDiv>
    </CardDiv>
  );
};


export default OutfitCard;