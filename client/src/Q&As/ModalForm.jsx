/* eslint-disable camelcase */
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import * as Styles from './Styles.js';

const ModalForm = ({origin, title, placeholder, productId}) => {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    body: '',
    email: '',
    product_id: productId
  });

  const [charCount, setCharCount] = useState(() => {
    return {
      body_char: 0,
      name_char: 0,
      email_char: 0
    };
  });


  const formValidation = () => {
    let newErrors = {};
    if (formData.body === '') {
      newErrors.body = 'Please fill out this part';
    }
    if (formData.name === '') {
      newErrors.name = 'Please fill out your username';
    }
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (formData.email === '') {
      newErrors.email = 'Please fill out your email';
    }

    setErrors(newErrors);
  };

  const handleBodyChange = (e) => {
    setFormData({
      ...formData,
      body: e.target.value
    });
    let char_limit = 1000;
    let char = e.target.value.length;
    setCharCount({
      body_char: char_limit - char
    });

  };

  const handleNameChange = (e) => {
    setFormData({
      ...formData,
      name: e.target.value
    });

    let char_limit = 60;
    let char = e.target.value.length;
    setCharCount({
      name_char: char_limit - char
    });

  };

  const handleEmailChange = (e) => {
    setFormData({
      ...formData,
      email: e.target.value
    });
    let char_limit = 60;
    let char = e.target.value.length;
    setCharCount({
      email_char: char_limit - char
    });

  };

  const askQuestion = () => {
    if (title === 'Ask Your Question') {
      setFormData({
        ...formData,
        product_id: productId
      });
    } else {
      return;
    }
  };

  const sendRequest = () => {
    axios({
      method: 'post',
      url: `/qa/questions/${origin}`,
      data: formData
    })
      .then ((response) => {
        alert('Thank you for submitting your form');
      })
      .catch(() => {
        console.log('There was an error. Couldnt submit the form');
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setIsValid(true);
    }
    if (Object.keys(errors).length === 0 && isValid === true) {
      sendRequest();
    }
  }, [errors]);

  const handleClick = (e) => {
    formValidation();
  };

  return (
    <form>
      <Styles.modalLabel>{title}: </Styles.modalLabel>
      <Styles.textarea type="text" name="body" onChange={handleBodyChange} placeholder={placeholder} required>
      </Styles.textarea>
      <Styles.charCount>{charCount.body_char} / 1000</Styles.charCount>
      {errors.body && ( <Styles.Auth>{errors.body}</Styles.Auth>)}
      <label>What is your username: </label>
      <input type="text" name="name" onChange={handleNameChange} placeholder="please enter your nickname" required/>
      <Styles.charCount>{charCount.name_char} / 60</Styles.charCount>
      {errors.name && ( <Styles.Auth>{errors.name}</Styles.Auth>)}
      <label>Your email: </label>
      <input type="text" name="email" onChange={handleEmailChange} placeholder="please enter your email" value = {formData.email} required/>
      <Styles.charCount>{charCount.email_char} / 60</Styles.charCount>
      <Styles.emailAuth>For authentication reasons, you will not be emailed</Styles.emailAuth>
      {errors.email && ( <Styles.Auth>{errors.email}</Styles.Auth>)}
      <Styles.modalButtons type="button" onClick={handleClick}>Submit</Styles.modalButtons>
    </form>
  );
};

export default ModalForm;

/*
<-- tried to use useReducer, maybe I'll use it later but not right now, keeping it in here for now -->
const reducer = (state, action) => {
    switch (action.type) {
    case 'answerer_name':
      return {
        ...state,
        answerer_name: action.payload
      };
    case 'body':
      return {
        ...state,
        body: action.payload
      };
    case 'email':
      return {
        ...state,
        email: action.payload
      };
    default:
      alert('Please fill out the form completly');
    }
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  const handleChange = (e) => dispatch({
    type: e.target.name,
    payload: e.target.value.trim() // triming asny whitespaces
  });

   // const [content, setContent] = useState(value.slice(0, maxLength));

  // const setFormattedContent = useCallback(
  //   text => {
  //     setContent(text.slice(0, maxLength));
  //   },
  //   [maxLength, setContent]
  // );
*/
