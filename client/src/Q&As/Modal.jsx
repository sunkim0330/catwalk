/* eslint-disable camelcase */
import React, {useState, useEffect, useReducer} from 'react';
import * as Styles from './Styles.js';
import axios from 'axios';
import ModalForm from './ModalForm.jsx';

const Modal = ({title, subTitle, questionBody, onClose, show, id, productId}) => {
  const [origin, setOrigin] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [isItAnswer, setIsItAnswer] = useState(() => {
    return title === 'Submit Your Answer';
  });


  const displayQuestionBody = () => {
    if (isItAnswer) {
      return <h2>{subTitle} : {questionBody}</h2>;
    } else {
      return <h2>{subTitle}</h2>;
    }
  };

  useEffect(() => {
    if (isItAnswer) {
      setOrigin(`${id}/answers`);
      setPlaceholder('Please enter your answer');
    } else {
      setOrigin('');
      setPlaceholder('Please enter your question');
    }
  }, [isItAnswer]);


  if (!show) {
    return null;
  }

  return (
    <div>
      <Styles.ModalContainer>
        <Styles.ModalContent>
          <Styles.ModalHeaderFooter>
            <h4>{title}</h4>
            {displayQuestionBody()}
          </Styles.ModalHeaderFooter>
          <Styles.ModalBody>
            <ModalForm origin={origin} title={title} placeholder={placeholder} productId={productId}/>
          </Styles.ModalBody>
          <Styles.ModalHeaderFooter>
            <button onClick={onClose}>Close</button>
          </Styles.ModalHeaderFooter>
        </Styles.ModalContent>
      </Styles.ModalContainer>
    </div>
  );


};


export default Modal;


