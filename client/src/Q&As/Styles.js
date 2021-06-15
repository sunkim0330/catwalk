import React from 'react';
import styled, {css} from 'styled-components';


export const IndexGrid = styled.div`
  padding: 5px;
  font-family: Sans-Serif;
  font-size: 18px;
  border: 1px solid grey;
  display: grid;
  color: #6f67bf;
`;

export const moreQuestionButton = styled.button`
  border: transparent;
  align-self: end;
  grid-area: morequestions;
  background-color: transparent;
  font-family: sans-serif;
  font-size: 15px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    color: #b3225e;
  }
`;

export const askQuestionButton = styled.button`
  border: transparent;
  align-self: end;
  grid-area: askquestion;
  background-color: transparent;
  font-family: sans-serif;
  font-size: 15px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    color: #b3225e;
  }
`;

export const QandAsInput = styled.div.attrs({className: 'QandAsInput'})`
  width: 80%;
  font-family: Sans-Serif;
  color: #6f67bf;
  font-size: 15px;
`;

export const QuestionsContainer = styled.div.attrs({className: 'Questions_container'})`
  width: 80%;
  font-family: Sans-Serif;
  color: #6f67bf;
  font-size: 15px;
  font-weight: bold;
`;

export const SearchBarInput = styled.input`
  display: grid;
  grid-column-start: 1;
  grid-column-end: five
  font-size: 14px;
  padding: 2px 5px;
  border: 1px solid grey;
  height: 30px;
  width: 30%;
  padding: 2px 23px 2px 30px;
  outline: 0;
  background-color: #F7CAC9;
  font-family: Sans-Serif;
`;

export const answerContainer = styled.div`
grid-area: answer;
width: 80%;
font-family: Sans-Serif;
color: #6f67bf;
font-size: 15px;
font-weight: normal;
`;

export const answerFooter = styled.div`
  grid-area: answerhelpful;
  font-family: sans-serif;
  font-size: 10px;
  color: grey;
  font-weight: normal;
`;

export const addAnswerButton = styled.button`
  grid-area: helpful;
  border: transparent;
  background-color: transparent;
  font-family: sans-serif;
  cursor: pointer;
  &:hover {
    color: #b3225e;
  }
`;
export const moreAnswerButton = styled.button`
  grid-area: answer;
  border: transparent;
  background-color: transparent;
  font-family: sans-serif;
  color: #050094;
  cursor: pointer;
  &:hover {
    color: #b3225e;
  }
`;

export const lineBreak = styled.div`
top: 0px;
margin:0px;
padding: 3px 2px 2px 3px;
border-width: 2px;
border-bottom-style:solid;
border-bottom: 2px #F7CAC9 solid;
width: 80%;
`;

export const btwnAnswers = styled.div`
top: 0px;
margin:0px;
padding: 3px 2px 2px 3px;
border-width: 2px;
border-bottom-style:solid;
border-bottom: 2px transparent;
width: 80%;
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Sans-Serif;
`;

export const ModalContent = styled.div.attrs({className: 'qanda-modal-content'})`
  width: 500px;
  background-color: #F7CAC9;
  font-family: Sans-Serif;
`;

export const ModalHeaderFooter = styled.div.attrs({className: 'qanda-modal-content'})`
  padding: 10px;
  font-family: Sans-Serif;
`;

export const ModalBody = styled.div.attrs({className: 'qanda-modal-body'})`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-family: Sans-Serif;
`;

export const searchResult = styled.div`
  font-family: Sans-Serif;
  font-size: 16px;
  color: #6f67bf;
`;

/*
padding: 5px;
  font-family: Sans-Serif;
  font-size: 18px;
  border: 1px solid grey;
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 20% 30% 20% 10% auto; //searchbar questions answers buttons
  column-gap: 15px;
  row-gap: 15px;
  grid-template-areas:
    ". search search search  ."
    "question question . . helpful"
    "answer answer answer . ."
    "answerhelpful answerhelpful answerhelpful answerhelpful . "
    "morequestions morequestions . askquestion askquestion";
  color: #6f67bf;
*/