import styled from 'styled-components';

export const RelatedListDiv = styled.div`
  height: 400px;
  width: 80%;
  margin: 10px auto;
  display: grid;
  grid-template-columns: repeat(${props => props.listLength}, 305px);
  grid-template-rows: 100%;
  column-gap: 10px;
  justify-items: center;
  justify-content: start;
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const CardDiv = styled.div`
  grid-column: ${props => props.grid + 1} / ${props => props.grid + 2};
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, 33%);
  align-items: end;
  height: 390px;
  width: 300px;
  background-image: url(${props => props.image});
  background-size: cover;
  border: 0.5px lightgray solid;
`;


export const LabelDiv = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / span 1;
  align-self: end;
  height: 100px;
  background: rgba( 255, 255, 255, 0.75 );
  backdrop-filter: blur( 15px );
  font-family: sans-serif;
  border: 0.5px solid rgba( 255, 255, 255, 0.18 );
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

export const AddToOutfitButton = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  text-align: center;
  height: 390px;
  width: 300px;
  border: 0.5px lightgray solid;

  :hover {
    box-shadow: 0 0 8px lightgray;
  }
`;

export const ModalViewButton = styled.button`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  align-self: start;
  justify-self: end;
`;
