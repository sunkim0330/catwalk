import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Questions from './Questions.jsx';
import Search from './Search.jsx';

const QandAs = ({ product }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (product.id) {
      axios.get(`/qa/questions?product_id=${product.id}`)
        .then((response) => {
          return setQuestions(response.data.results);
        })
        .catch(() => {
          console.log('cant get request from question API');
        });
    }
  }, [product.id]);

  return (
    <div className="QandAsbox">
      QUESTIONS AND ANSWERS
      <div className="QandAsinput">
        <Search product={product}/>
        <Questions questions={questions}/>
        <button>MORE ANSWERED QUESTIONS</button>
        <button>ADD A QUESTION</button>
      </div>
    </div>
  );
};

export default QandAs;

/*
Questions and Answers => need to set to show only 2 questions/answers when the page loads
- input = search for answers
| - how do I search for answers...?
| - useState to change e.target.value
- Q = question about product_id
|  - get request from qa/questions/product_id
|  - helpful button
|  -- PUT /qa/questions/:question_id/report
|  - Add an answer button
|  -- POST /qa/questions/:question_id/answers
- A = answer to Q
|  - helpful button
|  -- PUT /qa/answers/:answer_id/helpful
|  - report button
|  -- PUT /qa/answers/:answer_id/report
|  - GET /qa/questions/question_id/answers
- button = load more answers
|  - umm...some kind of loading features...maybe need useState?
- button = add a question
|  - POST /qa/questions
*/