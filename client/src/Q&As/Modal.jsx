import React from 'react';

const Modal = ({title, subTitle }) => {
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