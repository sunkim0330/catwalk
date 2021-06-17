import React, {useState, useEffect} from 'react';
import {DeleteButton} from './ActionButtons.jsx';
import {CardDiv, LabelDiv, NameText, SecondaryText} from './styled.js';
import Stars from '../Shared/Star.jsx';
import placeholder from './assets/Image-Coming-Soon.jpg';


const OutfitCard = (props) => {
  let image = props.piece.style.photos[0].thumbnail_url || placeholder;

  let handleClick = () => {
    props.setCurrentProduct(props.piece.product);
  };

  return (
    <CardDiv image={image} grid={props.grid}>
      <DeleteButton name={props.piece.product.name} updateCloset={props.updateCloset} />
      <LabelDiv onClick={handleClick}>
        <SecondaryText>{props.piece.product.category}</SecondaryText>
        <NameText>{props.piece.product.name}</NameText>
        {props.piece.style.sale_price ? <div><strike>${props.piece.style.original_price}</strike><style color='red'>${props.piece.style.sale_price}</style></div> : <div>${props.piece.style.original_price}</div>}
        {props.piece.rating !== 0 ? <Stars rating={props.piece.rating} width={'25%'}></Stars> : null}
      </LabelDiv>
    </CardDiv>
  );
};


export default OutfitCard;