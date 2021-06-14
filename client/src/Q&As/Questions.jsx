import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Answers from './Answers.jsx';
import Helpful from '../Shared/Helpful.jsx';
import Modal from './Modal.jsx';
import Search from './Search.jsx';

const Questions = ({ product, setDateFormat }) => {
  const [loadPage, setLoadPage] = useState(2);
  const [search, setSearch] = useState('');
  const [questions, setQuestions] = useState([]);
  const [show, setShow] = useState(false);

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

  const loadQuestions = questions.slice(0, loadPage).map((question) => {
    return (
      <div>
        <div className="questions_div" key={question.question_id}>
          Q: {question.question_body} <button onClick={() => setShow(true)} >Add Answer</button>
          <Modal title="Submit Your Answer" subTitle={product.name} id={question.question_id} questionBody={question.question_body} show={show} onClose={() => setShow(false)}/><br/><Helpful origin="qa/questions" id={question.question_id} helpCount={question.question_helpfulness}/><br/>
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


