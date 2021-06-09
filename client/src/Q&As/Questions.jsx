import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Answers from './Answers.jsx';

const Questions = ({ questions }) => {
  //load up to 4 questions. didn't make a function for that yet
  return (
    <div>
      {questions.map((question, index) => {
        return <div className="questions_div" key={index}>
          Q: {question.question_body}<br/>
          <Answers questions={question.question_id}/>
        </div>;
      })}
    </div>
  );
};

export default Questions;