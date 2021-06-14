import React, {useEffect, useState} from 'react';
import {HeartButton} from './ActionButtons';
import {CardDiv, ImageDiv, LabelDiv, NameText, SecondaryText} from './styled.js';
import Stars from '../Shared/Star.jsx';
import placeholder from './assets/file.png';

const Card = (props) => {

  if (props.style && props.metaData) {

    let averageRating;

    if (props.metaData.ratings) {
      let rating = 0;
      let amountOfRatings = 0;
      for (var key in props.metaData.ratings) {
        amountOfRatings += Number(props.metaData.ratings[key]);
        rating += (key * Number(props.metaData.ratings[key]));
      }
      averageRating = rating / amountOfRatings;
    }

    let handleClick = () => {
      props.setCurrentProduct(props.product);
    };


    let image = props.style.photos[0].thumbnail_url || placeholder;

    return (

      <CardDiv grid={props.grid} image={image} >
        <HeartButton currentName={props.currentName} currentChar={props.currentChar} relatedName={props.product.name} relatedChar={props.product.features}/>
        <LabelDiv onClick={handleClick}>
          <SecondaryText>{props.product.category}</SecondaryText>
          <NameText>{props.product.name}</NameText>
          {props.style.sale_price ? <div><strike>${props.style.original_price}</strike><style color='red'>${props.style.sale_price}</style></div> : <div>${props.style.original_price}</div>}
          {averageRating ? <Stars rating={averageRating.toFixed(1)} width={'30%'}/> : null}
        </LabelDiv>
      </CardDiv >

    );
  } else {
    return ('Loading...');
  }
};


export default Card;

/*
Product Category
Product Name
Price - As the price is not actually derived from the product, the price displayed should be that for the default style. Sale prices should be reflected.  If the style is currently discounted, then the sale price should appear in red, followed by the original price which is struckthrough.
Star Rating (# of Reviews) - Each product has an average rating based on its reviews.  The average rating of the product will be displayed in the format of solid or outlined stars, where the solid stars represents the review score. A total of 5 stars should always appear, and the amount filled in should correspond to the average score.

*/
