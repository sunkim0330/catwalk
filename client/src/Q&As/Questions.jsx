import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Answers from './Answers.jsx';

const Questions = ({ product }) => {
  const [questions, setQuestions] = useState([]);
  const [loadPage, setLoadPage] = useState(2);

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

  const loadMore = useCallback(() => {
    setLoadPage(prev => prev + 2);
  }, []);

  const loadQuestions = questions.slice(0, loadPage).map((question, index) => {
    return (
      <div className="questions_div" key={index}>
        Q: {question.question_body}<br/>
        <Answers questions={question.question_id} />
      </div>
    );
  });

  return (
    <div>
      {loadQuestions}
      <button
        style = {{display: loadPage >= questions.length ? 'none' : 'block'}}
        className="question_button"
        onClick={loadMore}>MORE ANSWERED QUESTIONS</button>
    </div>
  );


};

export default Questions;

/*
The list will by default only display up to 2 questions asked.
If there are 2 or less questions for the given product, then the button will not appear.
-- keeping this just in case I want to refactor loading button again
 <div>
  {questions.map((question, index) => {
    return <div className="questions_div" key={index}>
      Q: {question.question_body}<br/>
      <Answers questions={question.question_id}/>
    </div>;
  })}
</div>

onClick={e => e.stopPropagation()}
*/