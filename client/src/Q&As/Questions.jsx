import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Answers from './Answers.jsx';
import Helpful from '../shared/Helpful.jsx';
import Modal from './Modal.jsx';
import Search from './Search.jsx';

const Questions = ({ product, setDateFormat }) => {
  const [loadPage, setLoadPage] = useState(2);
  const [search, setSearch] = useState('');
  const [questions, setQuestions] = useState([]);
  // const [filterQuestions, setFilterQuestions] = useState(questions);
  // const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get(`/qa/questions?product_id=${product.id}`)
      .then((response) => {
        return setQuestions(response.data.results);
      })
      .catch(() => {
        console.log('cant get request from question API');
      });
  }, [product.id]);


  const loadMore = useCallback(() => {
    setLoadPage(prev => prev + 2);
  }, []);

  // const filter = e => {
  //   setSearch(e.target.value);
  //   let value = e.target.value;
  //   const filtered = filterQuestions.filter( data => {
  //     return data.question_body.toLowerCase().includes(value);
  //   });
  // };

  const loadQuestions = questions.slice(0, loadPage).map((question) => {
    return (
      <div>
        <div className="questions_div" key={question.question_id}>
          Q: {question.question_body} <Helpful origin="qa/questions" id={question.question_id} helpCount={question.question_helpfulness}/><br/>
          <div><Answers product={product} questions={question} setDateFormat={setDateFormat} /></div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Search product={product} questions={questions} />
      {loadQuestions}
      <button
        style = {{display: loadPage >= questions.length ? 'none' : 'block'}}
        className="question_button" onClick={loadMore}>
        MORE ANSWERED QUESTIONS
      </button>
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