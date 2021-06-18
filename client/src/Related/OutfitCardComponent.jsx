import React, {useState, useEffect, useContext} from 'react';
import {DeleteButton} from './ActionButtons.jsx';
import {CardDiv, LabelDiv, NameText, SecondaryText} from './styled.js';
import Stars from '../Shared/Star.jsx';
import placeholder from './assets/Image-Coming-Soon.jpg';
import {Theme} from '../App.jsx';


const OutfitCard = (props) => {
  let theme = useContext(Theme);
  let image = props.piece.style.photos[0].thumbnail_url || placeholder;

  let handleClick = () => {
    props.setCurrentProduct(props.piece.product);
  };

  return (
    <CardDiv image={image} grid={props.grid} name={props.piece.product.name}>
      <DeleteButton name={props.piece.product.name} updateCloset={props.updateCloset} />
      <LabelDiv onClick={handleClick} background={theme.background}>
        <SecondaryText>{props.piece.product.category}</SecondaryText>
        <NameText>{props.piece.product.name}</NameText>
        {props.piece.style.sale_price ? <div><strike>${props.piece.style.original_price}</strike><style color='red'>${props.piece.style.sale_price}</style></div> : <div>${props.piece.style.original_price}</div>}
        {props.piece.rating !== 0 ? <Stars rating={props.piece.rating} width={'25%'}></Stars> : null}
      </LabelDiv>
    </CardDiv>
  );
};


export default OutfitCard;