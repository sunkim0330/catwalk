import React, {useState, useEffect} from 'react';
import OutfitCard from './OutfitCardComponent';


const OutfitList = (props) => {
  let newStorage = window.localStorage;

  const [closet, setCloset] = useState([]);

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
      localCloset.unshift(productCard);
      newStorage.setItem('closet', JSON.stringify(localCloset));
    } else {
      let newCloset = [];
      newCloset.push(productCard);
      newStorage.setItem('closet', JSON.stringify(newCloset));
    }

    let updatedCloset = newStorage.getItem('closet');
    console.log(JSON.parse(updatedCloset));
    setCloset(JSON.parse(updatedCloset));
  };

  return (
    <div>
      <button onClick={handleAdd} ></button>
      {closet ? closet.map((piece, i) => { return <OutfitCard piece={piece} key={i} />; }) : null}
    </div>
  );
};

export default OutfitList;
