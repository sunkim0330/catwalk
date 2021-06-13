import React, {useState, useEffect} from 'react';
import ModalViewComponent from './ModalViewComponent';
import {ModalViewButton} from './styled.js';


export const HeartButton = (props) => {
  const [modalView, setModalView] = useState(false);

  useEffect(() => {
    setModalView(false);
  }, [props.currentChar]);

  const handleClick = () => {
    setModalView(!modalView);
  };

  return (
    <ModalViewButton onClick={handleClick}>
      {modalView ? <ModalViewComponent currentName={props.currentName} currentChar={props.currentChar} relatedName={props.relatedName} relatedChar={props.relatedChar}/> : null}
      {/* <button onClick={handleClick}></button> */}
    </ModalViewButton>
  );
};

export const DeleteButton = (props) => {
  const handleDelete = () => {
    let newStorage = window.localStorage;
    let stringStorage = newStorage.getItem('closet');
    let listStorage = JSON.parse(stringStorage);
    let indexToSplice = 0;
    listStorage.forEach(piece => {
      if (piece.product.name === props.name) {
        indexToSplice = listStorage.indexOf(piece);
      }
    });
    listStorage.splice(indexToSplice, 1);
    newStorage.setItem('closet', JSON.stringify(listStorage));
    props.updateCloset();
  };

  return (
    <ModalViewButton onClick={handleDelete}>
      {/* <button onClick={handleDelete} ></button> */}
    </ModalViewButton>
  );
};
