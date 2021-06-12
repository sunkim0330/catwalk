import React from 'react';
import styled from 'styled-components';
import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';


const Related = (props) => {

  const getClickedElement = (event) => {
    const module = 'Related Items and Comparison';
    axios.post('/interactions', {element: event.target.localName, widget: module, time: new Date() })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    // <div onClick={getClickedElement}>
    <div>
      <RelatedList product={props.product} setCurrentProduct={props.setProduct} currentStyle={props.defaultStyle} currentChar={props.currentChar}/>
      <OutfitList product={props.product} style={props.defaultStyle} rating={props.rating} />
    </div>
  );
};

export default Related;
