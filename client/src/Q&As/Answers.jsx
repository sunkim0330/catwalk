import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Helpful from '../Shared/Helpful.jsx';
import Modal from './Modal.jsx';
import * as Styles from './Styles.js';


const Answers = ({ product, questions, setDateFormat }) => {
  const [answers, setAnswer] = useState([]);
  const [limit, setLimit] = useState(2);

  const getAnswers = () => axios.get(`/qa/questions/${questions.question_id}/answers`)
    .then((response) => {
      setDateFormat(response.data.results);
      setAnswer(response.data.results);
    })
    .catch(() => {
      console.log('cant get request from answer API');
    });



  useEffect(() => {
    getAnswers();
    return () => {
      setAnswer(null);
    };
  }, [questions]);

  const loadMore = () => {
    setLimit(prev => prev + 2);
  };

  return (
    <Styles.answerContainer id="answer-return-div">
      {answers.slice(0, limit).map(answer => <Answer answer={answer} key={answer.answer_id}/>)}
      <Styles.AnswerButtonWrapper>
        <Styles.moreAnswerButton id="more-answer-button"
          style = {{display: limit >= answers.length ? 'none' : 'block'}}
          className="answer_button" onClick={loadMore}>
          See more answers
        </Styles.moreAnswerButton>
      </Styles.AnswerButtonWrapper>
      <Styles.linegradient />
    </Styles.answerContainer>
  );
};

export default Answers;


const Answer = ({ answer }) =>
  <Styles.answerList className="main-answer-container">
    <Styles.Answerbody><b>A:</b></Styles.Answerbody>
    <Styles.Answerbody>{answer.body}</Styles.Answerbody>
    <Styles.answerFooter id="answer-footer">
      <Styles.username id="username"> by {answer.answerer_name},&nbsp;{answer.formattedDate}&nbsp;</Styles.username>
      <Styles.answerhelp id="answerhelp">
        <Helpful origin="qa/answers" id={answer.answer_id} helpCount={answer.helpfulness} />
      </Styles.answerhelp>
    </Styles.answerFooter>
    <Styles.btwnAnswers />
  </Styles.answerList>;


