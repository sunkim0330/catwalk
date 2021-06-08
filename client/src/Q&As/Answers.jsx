import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Answers = ({ questions, product }) => {
  const [answers, setAnswer] = useState([]);

  useEffect(() => {
    if (questions) {
      axios.get(`/qa/questions/${questions}/answers`)
        .then((response) => {
          return setAnswer(response.data.results);
        })
        .catch(() => {
          console.log('cant get request from question API');
        });
    }
  }, [questions]);

  //load up to 2 answers on the page
  //need to figure out how to hide rest of answers and show them when I click 'load more answers'
  return (
    <div>
      {answers.map((answer, index) => {
        return <div className="answer_div" key={answer.answer_id}>
          A: {answer.body}
        </div>;
      })}
    </div>
  );
};

export default Answers;

/*
If time allows, answers should have the capability of supporting image uploads.  If an answer submitted includes images, thumbnail images for each image submitted should appear below the answer text body, above the username and other metadata.
Each image thumbnail should be clickable.  Upon clicking the thumbnail, a modal window expanding the image at full resolution should appear over the page.  The only functionality within this modal window should be an “X” icon through which the user can close out of the modal.

 <img src={answer.photos.url} />
  something lik
*/