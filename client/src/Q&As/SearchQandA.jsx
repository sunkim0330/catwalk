import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Helpful from '../Shared/Helpful.jsx';
import Modal from './Modal.jsx';
import * as Styles from './Styles.js';
import Answers from './Answers.jsx';

const SearchQandA = ({product, setDateFormat}) => {
  const [questions, setQuestions] = useState([]);
  const [loadPage, setLoadPage] = useState(2);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get(`/qa/questions?product_id=${product.id}&count=100`)
      .then((response) => {
        return setQuestions(response.data.results);
      })
      .catch(() => {
        console.log('cant get request from question API');
      });
  }, [product.id]);

  const sortQuestions = () => {
    const sorted = questions.sort((a, b) => {
      return b.question_helpfulness > a.question_helpfulness;
    });
    setQuestions(sorted);
  };

  const filteredQuestion = questions.filter((val) => {
    if (search === '' || search.length < 3 ) {
      return val;
    } else if (val.question_body.toLowerCase().includes(search.toLowerCase())) {
      return val;
    }
  }).slice(0, loadPage).map((question, key) => {
    return (
      <div className="questions_div" key={question.question_id}>
        <Styles.QuestionsContainer id='Questions_container'>
          Q: {question.question_body} <div onClick={() => setShow(true)} >Add Answer</div>
          <Helpful origin="qa/questions" id={question.question_id}
            helpCount={question.question_helpfulness} />
          <Modal title="Submit Your Answer" subTitle={product.name}
            id={question.question_id} questionBody={question.question_body}
            show={show} onClose={() => setShow(false)} /><br/>
          <div><Answers product={product} questions={question} setDateFormat={setDateFormat} /></div>
        </Styles.QuestionsContainer>
      </div>
    );
  });



  useEffect(() => {
    sortQuestions();
  }, [questions]);

  const loadMore = useCallback(() => {
    setLoadPage(prev => prev + 2);
  }, []);

  return (
    <div>
      <Styles.SearchBarInput id="search-bar" onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Have a question? Search for answers..."
      />
      {filteredQuestion}
      <Styles.moreQuestionButton
        style = {{display: loadPage >= questions.length ? 'none' : 'block'}}
        className="question_button" onClick={loadMore}>
        MORE ANSWERED QUESTIONS
      </Styles.moreQuestionButton>
    </div>
  );
};


export default SearchQandA;


