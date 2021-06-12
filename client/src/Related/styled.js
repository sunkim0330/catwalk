import styled from 'styled-components';

export const RelatedListDiv = styled.div`
  height: 400px;
  width: 80%;
  margin: 10px auto;
  display: grid;
  grid-template-column: repeat(${props => props.listLength}, 25%);
  grid-template-row: 100%;
  column-gap: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const CardDiv = styled.div`
  grid-column: ${props => props.grid + 1} / ${props => props.grid + 2};
  grid-row: 1 / 2;
  justify-items: center;
  align-items: center;
  height: 400px;
  width: 300px;
  background-image: url(${props => props.image});
  background-size: cover;
  border: 0.5px lightgray solid;
`;


export const LabelDiv = styled.div`
  margin-top: 279px;
  height: 100px;
  background-color: white;
  font-family: sans-serif;
  border-top: 0.5px lightgray solid;
`;

export const NameText = styled.p`
  margin: 4px;
  font-size: 20px;
  font-color: darkblue;
`;

export const SecondaryText = styled.p`
  margin: 4px;
  font-size: 15px;
  font-color: darkgray;
`;