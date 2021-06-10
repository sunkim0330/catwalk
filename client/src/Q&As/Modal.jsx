import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const Modal = ({title, subTitle }) => {
  const [show, setShow] = useState(false);

  const showModal = (e) => {
    setShow(true);
  };

  /*
  <div><button onClick={(e) => { showModal(); }}>Add a question</button></div>
  */

  return (
    <div className="qanda-modal">
      <div className="qanda-modal-content">
        <div className="qanda-modal-header">
          <h4>{title}</h4>
          <h2>{subTitle}</h2>
        </div>
        <div className="qanda-modal-body">
          This is the body, form goes in here
        </div>
        <div className="qanda-modal-footer">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};



export default Modal;