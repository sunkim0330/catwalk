import React from 'react';
import styled, {css} from 'styled-components';


export const Index = styled.div`
  background-color: ${props => props.background};
  height: 676px;
  min-width: 1050px;
  max-width: 1050px;
  width: 1050px;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin: auto auto 100px auto;
  padding: 10px;
  column-gap: 10px;
  row-gap: 10px;
  display: grid;
  grid-template-columns: 300px 385px 350px;
  grid-template-rows: 46px 46px 267px 267px 50px;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-areas:
    "title title . "
    "search search search"
    "question question question "
    "question question question "
    "morequestion askquestion . ";
`;

export const Title = styled.h2`
  align-self: start;
  grid-area: title;
  padding: 2px;
  margin: 10px 0 10px 0;
  font-family: 'Montserrat', sans-serif;
`;

export const QuestionsContainer = styled.div.attrs({className: 'Questions_container'})`
  margin: 10px 0 10px 0;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: bold;
  height: 534px;
  grid-area: question;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
`;

export const SearchBarInput = styled.input`
  margin: 10px;
  align-self: stretch;
  grid-area: search;
  font-size: 15px;
  border: 1px solid #D3D9D9;
  border-radius: 3px;
  height: 30px;
  width: 30%;
  padding: 2px 5px;
  background-color: #D3D9D9;
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

export const addAnswerButton = styled.div`
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
    color: black;
  }
`;

export const answerContainer = styled.div`
  font-family:'Roboto', sans-serif;
  font-size: 15px;
  font-weight: normal;
  flex-direction: column;
  display: flex;
`;

export const answerList = styled.div`
  font-family:'Roboto', sans-serif;
`;

export const answerFooter = styled.div`
  align-items: baseline;
  font-family:'Roboto', sans-serif;
  height: fit-content;
  font-size: 12px;
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
`;

export const Answerbody = styled.div`
  font-family:'Roboto', sans-serif;
  font-size: 15px;
`;

export const username = styled.div`
  font-family:'Roboto', sans-serif;
  flex: 1;
  font-size: 12px;
`;

export const answerhelp = styled.div`
  font-family:'Roboto', sans-serif;
  flex: 4;
  margin: 2px;
`;

export const MoreQuestionButton = styled.div`
  grid-area: morequestion;
  border-radius: 5px;
  width: fit-content;
  margin-top: 10px;
  margin-right: 8px;
  padding: 8px 5px 5px 5px;
  padding: 5px;
  box-shadow: ${props => props.shadow};
  transition: all .3s ease-in-out;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  :hover {
    color: #D3D9D9;
    box-shadow: ${props => props.hoverShadow};
    transition: all .3s ease-in-out;
  }
  :active {
    transform: translateY(2px);
    }
`;

/*
    border-radius: 5px;
  width: fit-content;
  margin: 5px 8px 0 5px;
  padding: 5px;
  cursor: pointer;
  box-shadow: ${props => props.shadow};
  transition: all .3s ease-in-out;
  font-family: 'Roboto', sans-serif;

  :hover {
    color: #D3D9D9;
    box-shadow: ${props => props.hoverShadow};
    transition: all .3s ease-in-out;
  }

  :active {
    transform: translateY(2px);
  }
  }*/

export const AnswerButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const moreAnswerButton = styled.div`
  border: transparent;
  margin: 5px;
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const lessAnswerButton = styled.div`
  border: transparent;
  margin: 5px;
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const AskQuestionButton = styled.div`
  // background-color: ${props => props.background};
  alien-item: end;
  grid-area: askquestion;
  border-radius: 5px;
  height: 30px;
  width: fit-content;
  margin-top: 10px;
  margin-right: 8px;
  padding: 7px 5px 1px 5px;
  cursor: pointer;
  box-shadow: ${props => props.shadow};
  transition: all .5s ease;
  font-family:'Roboto', sans-serif;
  :hover {
    color: #D3D9D9;
    box-shadow: ${props => props.hoverShadow};
    transition: all .3s ease-in-out;
  }
  :active {
    transform: translateY(2px);
  }
`;

export const Buttons = styled.div`
  grid-area: morequestions;
  display: flex;
  alient-content: flex-start;
  flex-direction: row;
`;

export const linegradient = styled.div`
  margin-bottom: 10px;
  height: 100px;
  max-height: 2px;
  max-width: 850px;
  background-image: linear-gradient(to right,rgba(0,0,0,0.75),rgba(0,0,0,0.75),rgba(0,0,0,0));
`;

/* linear-gradient(
  to right,
  #CEF1D5, #CEF1D5, white
);*/

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

export const ModalForm = styled.div`
  background-color: #D3D9D9;
`;

export const ModalContainer = styled.div`
  z-index: 5;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family:'Roboto', sans-serif;
  background-color: #D3D9D9;
  background-color: rgba(0,0,0,0.5);
`;

export const modalLabel = styled.label`
  font-family:'Roboto', sans-serif;
  background-color: #D3D9D9;
  color: #3A5A40;
`;
//color: #3A5A40;

export const subtitle = styled.h4`
  font-family:'Roboto', sans-serif;
  margin: 10px;
  background-color: #D3D9D9;
  color: #3A5A40;
`;
export const ModalContent = styled.div.attrs({className: 'qanda-modal-content'})`
  width: 500px;
  font-family:'Roboto', sans-serif;
  background-color: #D3D9D9;
  color: #3A5A40;
`;

export const ModalHeaderFooter = styled.div.attrs({className: 'qanda-modal-content'})`
  padding: 10px;
  font-family:'Roboto', sans-serif;
  background-color: #D3D9D9;
  color: #3A5A40;
`;

export const ModalBody = styled.div.attrs({className: 'qanda-modal-body'})`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-family:'Roboto', sans-serif;
  background-color: #D3D9D9;
  color: #3A5A40;
`;

export const textarea = styled.textarea`
  white-space: normal;
  vertical-align: middle;
  width: 200px;
  color: #3A5A40;
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
    color: #CEF1D5;
  }
`;

export const charCount = styled.p`
font-size: 12px;
color: #3A5A40;
`;

