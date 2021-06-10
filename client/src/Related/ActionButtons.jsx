import React, {useState, useEffect} from 'react';
import ModalViewComponent from './ModalViewComponent';


export const HeartButton = (props) => {
  const [modalView, setModalView] = useState(false);

  useEffect(() => {
    setModalView(false);
  }, [props.currentChar]);

  const handleClick = () => {
    setModalView(!modalView);
  };

  return (
    <div>
      {modalView ? <ModalViewComponent currentName={props.currentName} currentChar={props.currentChar} relatedName={props.relatedName} relatedChar={props.relatedChar}/> : null}
      <button onClick={handleClick}></button>
    </div>
  );
};

export const DeleteButton = (props) => {
  const handleDelete = () => {
    console.log('Delete Clicked');
  };

  return (
    <div>
      <button onClick={handleDelete} ></button>
    </div>
  );
};
