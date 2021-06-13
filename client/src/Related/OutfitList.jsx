import React, {useState, useEffect} from 'react';
import OutfitCard from './OutfitCardComponent';
import {RelatedListDiv, AddToOutfitButton, SecondaryTextTitle} from './styled.js';


const OutfitList = (props) => {
  let newStorage = window.localStorage;

  const [closet, setCloset] = useState(null);

  useEffect(() => {
    let localCloset = newStorage.getItem('closet');
    setCloset(JSON.parse(localCloset));

  }, []);

  const handleAdd = () => {
    // structure data for card
    let productCard = {};
    productCard.product = props.product;
    productCard.style = props.style;
    productCard.rating = props.rating;


    // if closet exists, add to the front of it. Otherwise, create the list
    if (newStorage.getItem('closet')) {
      let localCloset = JSON.parse(newStorage.getItem('closet'));

      // Checking for repeated items
      let alreadyExists = false;
      localCloset.forEach(item => {
        if (item.product.name === props.product.name) {
          alreadyExists = true;
        }
      });

      if (!alreadyExists) {
        localCloset.unshift(productCard);
        newStorage.setItem('closet', JSON.stringify(localCloset));
        updateCloset();
      } else {
        console.log('Already in the Outfit');
      }

    } else {
      let newCloset = [];
      newCloset.push(productCard);
      newStorage.setItem('closet', JSON.stringify(newCloset));
      updateCloset();
    }
  };

  const updateCloset = () => {
    let updatedCloset = newStorage.getItem('closet');
    setCloset(JSON.parse(updatedCloset));
    console.log(closet.length);
  };

  if (closet !== null) {
    return (
      <div>
        <SecondaryTextTitle>Your Outfit</SecondaryTextTitle>
        <RelatedListDiv listLength={closet.length + 1}>
          <AddToOutfitButton onClick={handleAdd}>Add To Outfit</AddToOutfitButton>
          {closet ? closet.map((piece, i) => { return <OutfitCard piece={piece} key={i} grid={i + 1} updateCloset={updateCloset} />; }) : null}
        </RelatedListDiv>
      </div>
    );
  } else {
    return null;
  }
};

export default OutfitList;
