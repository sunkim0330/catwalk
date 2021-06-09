import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Helpful from '../shared/Helpful.jsx';

const Answers = ({ questions, setDateFormat }) => {
  const [answers, setAnswer] = useState([]);
  const [loadPage, setLoadPage] = useState(2);

  useEffect(() => {
    if (questions) {
      axios.get(`/qa/questions/${questions}/answers`)
        .then((response) => {
          setDateFormat(response.data.results);
          setAnswer(response.data.results);
        })
        .catch(() => {
          console.log('cant get request from question API');
        });
    }
  }, []);

  const loadMore = useCallback(() => {
    setLoadPage(prev => prev + 2);
  }, []);


  //couldn't figure out how to reuse loadMore function and the button from Question component.
  //I tried e.stopProgation many different ways, but didn't figure out yet.
  //I'll try to refactor when I finish with eveything
  const loadAnswers = answers.slice(0, loadPage).map((answer, index) => {
    return (
      <div className="answer_div" key={answer.answer_id}>
            A: {answer.body} <br/>
        <div> by {answer.answerer_name}, {answer.formattedDate} | <Helpful origin="qa/answers" id={answer.answer_id} helpCount={answer.helpfulness}/></div>

      </div>
    );
  });

  return (
    <div>
      {loadAnswers}
      <button
        style = {{display: loadPage >= answers.length ? 'none' : 'block'}}
        className="answer_button" onClick={loadMore}>See more answers</button>
    </div>
  );
};

export default Answers;

/*
When expanded, the button to “See more answers” should change to read “Collapse answers”.
*/

/*
If time allows, answers should have the capability of supporting image uploads.  If an answer submitted includes images, thumbnail images for each image submitted should appear below the answer text body, above the username and other metadata.
Each image thumbnail should be clickable.  Upon clicking the thumbnail, a modal window expanding the image at full resolution should appear over the page.  The only functionality within this modal window should be an “X” icon through which the user can close out of the modal.

 <img src={answer.photos.url} />
  something lik
*/

/*
return (
      <div>
        {answers.map((answer, index) => {
          return <div className="answer_div" key={answer.answer_id}>
            A: {answer.body}
          </div>;
        })}
        {loadPage && <button onClick={loadMore}>See more answers</button>}
      </div>
    );
*/