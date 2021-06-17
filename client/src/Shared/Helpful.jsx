import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Theme } from '../App.jsx';
import * as Styles from '../Reviews/Styles.js';

const Helpful = ({ origin, id, helpCount }) => {
  const [link, setLink] = useState({
    helpful: false,
    report: false
  });
  const [isQuestion, setIsQuestion] = useState(() => {
    return origin === 'qa/questions';
  });
  const [type, setType] = useState('');
  const [count, setCount] = useState(0);
  const [styles, setStyles] = useState(() => {
    let styles = {};

    if (isQuestion) {
      styles.width = '125px;';
      styles['border-right'] = 'none;';
    } else {
      styles.width = '230px;';
      styles['border-right'] = '1px solid black;';
    }
    return styles;
  });

  const theme = useContext(Theme);

  /*
    const StyledYourComponent = styled(YourComponent)`
    background: ${props => props.active ? 'darkred' : 'limegreen'}
  */
  const sendPutReq = () => {
    axios.put(`/${origin}/${id}/${type}`)
      .then(res => {
        console.log('Good job! You did it!');
      })
      .catch(err => {
        console.log('error in PUT request', err);
      });

  };

  const handleClick = (e) => {
    let value = e.target.value;
    setType(value);
    if (!link[value]) {
      setLink(prev => {
        return {...prev, [value]: true};
      });
      if (value === 'helpful') {
        setCount(prev => prev += 1);
      }
    } else {
      alert('You already clicked!!');
    }
  };

  const displayReport = () => {
    if (isQuestion) {
      return null;
    } else if (link.report) {
      return <Styles.helpText
        border="hidden"
        marginRight="0"
      >Reported!</Styles.helpText>;
    } else {
      return (
        <>
          <Styles.helpButton
            onClick={handleClick}
            value="report"
            font={theme.font}
            background={theme.background}
          >Report</Styles.helpButton>
        </>
      );
    }
  };

  useEffect(() => {
    if (type) {
      sendPutReq();
    }
  }, [type]);

  useEffect(() => {
    setCount(helpCount);
  }, [helpCount]);


  return (
    <Styles.helpful width={styles.width}>
      <Styles.helpText
        borderRight={styles['border-right']}
        marginRight="15px"
      > Helpful? <Styles.helpButton
          value="helpful"
          onClick={handleClick}
          font={theme.font}
          background={theme.background}
        >Yes</Styles.helpButton> ({count})</Styles.helpText>
      {/* <div>|</div> */}
      {displayReport()}
    </Styles.helpful>
  );
};

export default Helpful;

/*
REVIEWS:
PUT /reviews/:review_id/helpful
PUT /reviews/:review_id/report
origin = 'reviews'
id = review.id
type = 'helpful' or 'report'
helpCount = review.helpfulness


QEUSTIONS:
PUT /qa/questions/:question_id/helpful
PUT /qa/questions/:question_id/report
origin= 'qa/questions'
id = question.id
type = 'helpful' or 'report'

ANSWERS:
PUT /qa/answers/:answer_id/helpful
PUT /qa/answers/:answer_id/report
*/