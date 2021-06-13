import React, {useState, useEffect} from 'react';
import {DeleteButton} from './ActionButtons.jsx';
import {CardDiv, LabelDiv, NameText, SecondaryText} from './styled.js';
import {Stars, StarsDiv} from '../Shared/Star.jsx';


const OutfitCard = (props) => {
  return (
    <CardDiv image={props.piece.style.photos[0].thumbnail_url} grid={props.grid}>
      <DeleteButton name={props.piece.product.name} updateCloset={props.updateCloset} />
      <LabelDiv>
        <SecondaryText>{props.piece.product.category}</SecondaryText>
        <NameText>{props.piece.product.name}</NameText>
        {props.piece.rating !== 'NaN' ? <StarsDiv scale='30%'><Stars rating={props.piece.rating}></Stars></StarsDiv> : null}
        {props.piece.style.sale_price ? <div><strike>{props.piece.style.original_price}</strike><style color='red'>{props.piece.style.sale_price}</style></div> : <div>{props.piece.style.original_price}</div>}
      </LabelDiv>
    </CardDiv>
  );
};


export default OutfitCard;