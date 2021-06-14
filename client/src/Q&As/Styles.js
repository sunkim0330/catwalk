import React from 'react';
import styled, {css} from 'styled-components';


export const Index = styled.div`
  width: 80%
  font-family: Sans-Serif;
  font-size: 25px;
  border: 1px solid white;
  font-color: #6f67bf;
`;

export const QandAsInput = styled.div.attrs({className: 'QandAsInput'})`
  width: 80%
  font-family: Sans-Serif;
  font-color: #6f67bf;
  font-size: 15px;
`;

export const QuestionsContainer = styled.div.attrs({className: 'Questions_container'})`
  width: 80%
  font-family: Sans-Serif;
  font-color: #6f67bf;
  font-size: 15px;
  // font-weight: bold
`;

export const SearchBarInput = styled.input`
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

export const addAnswerButton = styled.button`
  border: transparent;
  background-color: transparent;
  font-family: sans-serif;
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
  font-color: #6f67bf;
`;