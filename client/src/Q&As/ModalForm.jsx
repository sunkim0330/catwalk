/* eslint-disable camelcase */
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

const ModalForm = ({origin, title, placeholder}) => {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
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


  const formValidation = () => {
    let newErrors = {};
    if (formData.body === '') {
      newErrors.body = 'Please fill out this part';
    }
    if (formData.answerer_name === '') {
      newErrors.answerer_name = 'Please fill out your username';
    }
    // let regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (formData.email === '') {
      newErrors.email = 'Mandatory Field';
    }

    setErrors(newErrors);
    console.log('errors', errors);
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

  const sendRequest = () => {
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

  useEffect(() => {
    console.log('keys', Object.keys(errors));
    if (Object.keys(errors).length === 0) {
      setIsValid(true);
    }
    if (Object.keys(errors).length === 0 && isValid === true) {
      sendRequest();
    }
  }, [errors]);

  const handleClick = (e) => {
    e.preventDefault();
    formValidation();
  };

  return (
    <form>
      <label>{title}</label>
      <textarea type="text" name="body" onChange={handleBodyChange} placeholder={placeholder} required>
      </textarea>
      <p>{charCount.body_char} / 1000</p>
      {errors.body && ( <p>{errors.body}</p>)}
      <label>What is your username: </label>
      <input type="text" name="answerer_name" onChange={handleNameChange} placeholder="please enter your nickname" required/>
      <p>{charCount.name_char} / 60</p>
      {errors.answerer_name && ( <p>{errors.answerer_name}</p>)}
      <label>Your email</label>
      <input type="text" name="email" onChange={handleEmailChange} placeholder="please enter your email" value = {formData.email} required/>
      <p>{charCount.email_char} / 60</p>
      <p>For authentication reasons, you will not be emailed</p>
      {errors.email && ( <p>{errors.email}</p>)}
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
