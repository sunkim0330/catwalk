import React from 'react';
import styled, {css} from 'styled-components';


export const Index = styled.div`
  height: 100%;
  min-width: 1500px;
  max-width: 1500px;
  width: 1500px;
  color: #3A5A40;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin: auto;
  padding: 10px;
  column-gap: 10px;
  row-gap: 10px;
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: 10% 10% 35% 30% auto;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-areas:
    "title . ."
    "search search ."
    "question question ."
    "question question ."
    "morequestion askquestion .";
`;

export const Title = styled.h2`
  align-self: start;
  grid-area: title;
  padding: 2px;
  margin: 0 0 10px 0;
  font-family: 'Montserrat', sans-serif;
`;

export const QuestionsContainer = styled.div.attrs({className: 'Questions_container'})`
  margin: 10px 0 30px 0;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Roboto', sans-serif;
  color: #3A5A40;
  font-size: 15px;
  font-weight: bold;
  height: 300px;
  grid-area: question;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
`;

export const SearchBarInput = styled.input`
  margin: 10px 0 0 0;
  align-self: stretch;
  grid-area: search;
  font-size: 15px;
  border: 1px solid #D3D9D9;
  border-radius: 3px;
  height: 30px;
  width: 30%;
  padding: 2px 5px;
  background-color: #CEF1D5;
  font-family: 'Roboto', sans-serif !important;
`;

export const questionList = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  font-family: 'Roboto', sans-serif;
  justify-content: space-between;
  align-items: center;
`;
export const questionWrapper = styled.div`
  display: flex;
  height: fit-content;
  font-family: 'Roboto', sans-serif;
  alient-content: space-around;
  alien-items: baseline;

`;
export const body = styled.div`
  font-family:'Roboto', sans-serif;
  color: #3A5A40;
`;

export const buttons = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  border: transparent;
  background-color: transparent;
  font-family:'Roboto', sans-serif;
  font-weight: normal;
  font-size: 12px;
  cursor: pointer;
`;

export const addAnswerButton = styled.button`
  border-top: transparent;
  border-bottom: transparent;
  border-left: transparent;
  border-right: 1px solid black;
  margin: 5px;
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: #b3225e;
  }
`;

export const answerContainer = styled.div`
  font-family:'Roboto', sans-serif;
  color: #3A5A40;
  font-size: 15px;
  font-weight: normal;
  flex-direction: column;
  display: flex;
`;

export const answerList = styled.div`
  font-family:'Roboto', sans-serif;
  color: #3A5A40;
`;

export const answerFooter = styled.div`
  align-items: baseline;
  font-family:'Roboto', sans-serif;
  height: fit-content;
  font-size: 12px;
  color: #3A5A40;
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
`;

export const username = styled.div`
  font-family:'Roboto', sans-serif;
  flex: 1;
  font-size: 12px;
  color: #3A5A40;
`;

export const answerhelp = styled.div`
  font-family:'Roboto', sans-serif;
  flex: 4;
  margin: 2px;
`;

export const MoreQuestionButton = styled.button`
  grid-area: morequestion;
   justify-self: end;
  border: 1px solid #d3d9d9;
  border-radius: 5px;
  width: fit-content;
  margin-right: 8px;
  padding: 5px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 22%) 2px 2px 4px;
  transition: all .5s ease;
  font-family: 'Roboto', sans-serif;
  :hover {
    border: 1px solid #CEF1D5;
    color: #6B636B;
    box-shadow: none;
    transition: all .5s ease;
  }
`;

export const AskQuestionButton = styled.button`
  grid-area: askquestion;
  border: 1px solid #d3d9d9;
  border-radius: 5px;
  width: fit-content;
  margin-right: 8px;
  padding: 5px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 22%) 2px 2px 4px;
  transition: all .5s ease;
  font-family:'Roboto', sans-serif;
  :hover {
    border: 1px solid #CEF1D5;
    color: #6B636B;
    box-shadow: none;
    transition: all .5s ease;
  }
  :active {
    transform: translateY(2px)
  }
`;

export const Buttons = styled.div`
  grid-area: morequestions;
  display: flex;
  alient-content: flex-start;
  flex-direction: row;
`;

export const moreAnswerButton = styled.button`
  grid-area: morequestions;
  border: transparent;
  margin: 5px;
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: #b3225e;
  }
`;

export const linegradient = styled.div`
  height: 100px;
  max-height: 2px;
  max-width: 90%;
  background-color: #CEF1D5;
  background-image:
    linear-gradient(
      to right,
      #CEF1D5, white
    );
  margin: 0 0 10px 0;
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
  font-family:'Roboto', sans-serif;
`;

export const modalLabel = styled.label`
  font-family:'Roboto', sans-serif;
`;
export const subtitle = styled.h4`
  font-family:'Roboto', sans-serif;
  margin: 10px;
`;
export const ModalContent = styled.div.attrs({className: 'qanda-modal-content'})`
  width: 500px;
  background-color: #F7CAC9;
  font-family:'Roboto', sans-serif;
`;

export const ModalHeaderFooter = styled.div.attrs({className: 'qanda-modal-content'})`
  padding: 10px;
  font-family:'Roboto', sans-serif;
`;

export const ModalBody = styled.div.attrs({className: 'qanda-modal-body'})`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-family:'Roboto', sans-serif;
`;

export const textarea = styled.textarea`
  white-space: normal;
  vertical-align: middle;
`;

export const Auth = styled.p`
  font-size: 12px;
  color: red;
`;

export const emailAuth = styled.p`
  font-size: 12px;
  color: red;
`;

export const modalButtons = styled.button`
  border: transparent;
  margin: 5px;
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: #b3225e;
  }
`;

export const charCount = styled.p`
font-size: 12px;
font-color: #D3D9D9;
`;

/*
padding: 5px;
  font-family:'Roboto', sans-serif;
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