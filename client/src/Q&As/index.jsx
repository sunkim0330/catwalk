import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Questions from './Questions.jsx';
import Search from './Search.jsx';

const QandAs = ({ product, setDateFormat }) => {

  return (
    <div className="QandAsbox">
      QUESTIONS AND ANSWERS
      <div className="QandAsinput">
        <Search product={product}/>
        <Questions product={product} setDateFormat={setDateFormat}/>
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