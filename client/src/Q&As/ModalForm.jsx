/* eslint-disable camelcase */
import React, {useState, useReducer} from 'react';

const ModalForm = () => {
  const intialState = {
    answerer_name: '',
    body: '',
    email: ''
  };

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
    payload: e.target.value.trim()
  });

  return (
    <form>
      <label>Answer/Question</label>
      <input type="body" name="body" value={state.body} onChange={handleChange} placeholder="please enter your answer/question"/>
      <label>What is your nickname: </label>
      <input type="answerer_name" name="answerer_name" value={state.answerer_name} onChange={handleChange} placeholder="please enter your nickname"/>
      <label>Your email</label>
      <input type="email" name="email" value={state.email} onChange={handleChange} placeholder="please enter your email"/>
      <h4>For authentication reasons, you will not be emailed</h4>
    </form>
  );
};

export default ModalForm;

