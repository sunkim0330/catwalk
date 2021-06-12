/* eslint-disable camelcase */
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

const ModalForm = ({origin, title, placeholder}) => {
  const [formData, setFormData] = useState({
    answerer_name: '',
    body: '',
    email: ''
  });

  const [charCount, setCharCount] = useState(() => {
    return {
      body_char: null,
      name_char: null,
      email_char: null
    };
  });

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
      answerer_name: e.target.value
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



  const handleClick = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `/qa/questions/${origin}`,
      data: formData
    })
      .then ((response) => {
        alert('Thank you for submitting your form');
        console.log('success post request for the form', response);
      })
      .catch(() => {
        console.log('There was an error. Couldnt submit the form');
      });

  };

  return (
    <form>
      <label>{title}</label>
      <textarea type="text" name="body" onChange={handleBodyChange} placeholder={placeholder} >
      </textarea>
      <p>{charCount.body_char} / 1000</p>
      <label>What is your nickname: </label>
      <input type="text" name="answerer_name" onChange={handleNameChange} placeholder="please enter your nickname" />
      <p>{charCount.name_char} / 60</p>
      <label>Your email</label>
      <input type="text" name="email" onChange={handleEmailChange} placeholder="please enter your email" />
      <p>{charCount.email_char} / 60</p>
      <p>For authentication reasons, you will not be emailed</p>
      <button onClick={handleClick}>Submit</button>
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
