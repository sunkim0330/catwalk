import React from 'react';
import styled, {css} from 'styled-components';


export const Index = styled.div`
  height: 100%;
  width: 80;
  color: #3A5A40;
  font-family: Sans-Serif;
  font-size: 18px;
  margin: auto;
  padding: 10px;
  column-gap: 10px;
  row-gap: 10px;
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: 10% 10% 20% 30% auto;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-areas:
    "title . ."
    "search search ."
    "question question ."
    "question question ."
    "morequestion askquestion .";

`;

export const title = styled.h2`
  align-self: start;
  grid-area: title;
  padding: 2px;
  margin: 0 0 10px 0;
`;

export const QuestionsContainer = styled.div.attrs({className: 'Questions_container'})`
  margin: 10px 0 0 0;
  font-family: Sans-Serif;
  color: #3A5A40;
  font-size: 15px;
  font-weight: bold;
  height: fit-content;
  grid-area: question;
  display: flex;
  flex-direction: column;
  height: fit-content;
  overflow: scroll;
`;

export const SearchBarInput = styled.input`
  margin: 10px 0 0 0;
  align-self: stretch;
  grid-area: search;
  font-size: 15px;
  border: 1px solid grey;
  height: 30px;
  width: 30%;
  padding: 2px 5px;
  background-color: #CEF1D5;
  font-family: Sans-Serif;
`;

export const questionList = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

export const addAnswerButton = styled.button`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  border: transparent;
  background-color: transparent;
  font-family: sans-serif;
  font-weight: normal;
  font-size: 12px;
  cursor: pointer;
`;

export const answerContainer = styled.div`
  font-family: Sans-Serif;
  color: #3A5A40;
  font-size: 15px;
  font-weight: normal;
  flex-direction: column;
  display: flex;
`;

export const answerList = styled.div`
  color: #3A5A40;
`;

export const answerFooter = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  font-size: 12px;
  color: #3A5A40;
  justify-content: flex-start;
`;

export const username = styled.div`
  font-size: 12px;
  color: #3A5A40;
`;

export const answerhelp = styled.div`
  margin: 2px;
`;

export const moreQuestionButton = styled.button`
  border: transparent;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #b3225e;
  }
  font-family: sans-serif;
  font-size: 15px;
  padding: 5px;
  grid-area: morequestion;
`;

export const askQuestionButton = styled.button`
  grid-area: askquestion;
  border: transparent;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #b3225e;
  }
  font-family: sans-serif;
  font-size: 15px;
  padding: 5px;
`;

export const moreAnswerButton = styled.button`
  border: transparent;
  background-color: transparent;
  color: #050094;
  cursor: pointer;
  &:hover {
    color: #b3225e;
  }
  font-family: sans-serif;
`;

export const scrollquestions = styled.div`
  overflow: scroll;
`;

export const lineBreak = styled.div`
border-width: 2px;
border-bottom-style:solid;
border-bottom: 2px #CEF1D5 solid;
margin: 0 0 10px 0;
padding: 3px 2px 2px 3px;
top: 0px;
width: 80%;
`;

export const btwnAnswers = styled.div`
border-width: 2px;
border-bottom-style:solid;
border-bottom: 2px transparent;
margin: 0 0 5px 0;
padding: 3px 2px 2px 3px;
top: 0px;
width: 80%;
`;

export const ModalContainer = styled.div`
  z-index: 5;
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

export const emailAuth = styled.p`
  font-size: 12px;
  color: red;
`;

export const charCount = styled.p`
font-size: 12px;
font-color: #D3D9D9;
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