import React, {useState, useEffect} from 'react';
import ModalViewComponent from './ModalViewComponent';


const HeartButton = (props) => {
  const [modalView, setModalView] = useState(false);

  const handleClick = () => {
    setModalView(!modalView);
  };

  return (
    <div>
      {modalView ? <ModalViewComponent /> : null}
      <button onClick={handleClick}></button>
    </div>
  );
};

export default HeartButton;