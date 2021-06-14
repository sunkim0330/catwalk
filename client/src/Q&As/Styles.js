import React from 'react';
import styled, {css} from 'styled-components';


export const Index = styled.div`
  border:
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
`;

export const ModalContent = styled.div.attrs({className: 'qanda-modal-content'})`
  width: 500px;
  background-color: palevioletred;
`;

export const ModalHeaderFooter = styled.div.attrs({className: 'qanda-modal-content'})`
  padding: 10px;
`;

export const ModalBody = styled.div.attrs({className: 'qanda-modal-body'})`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;