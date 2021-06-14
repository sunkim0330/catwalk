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
  font-family: sans-serif;
`;

export const TertiaryText = styled.p`
  font-size: 12px;
  color: gray;
  font-family: sans-serif;
  font-weight: lighter;
  padding-left: 20px;
`;

export const SecondaryTextTitle = styled(SecondaryText)`
  margin-left: 10%;
  margin-top: 50px;
  margin-bottom: 10px;
  color: gray;
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

export const ModalViewButton = styled.i`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  align-self: start;
  padding: 10px;
  justify-self: end;
  color: lightgray;
`;

export const ModalView = styled.div`
  position: absolute;
  background-color: white;
  border: 1px lightgray solid;
  margin-left: 30px;
  margin-top: -40px;
  height: 300px;
  width: 350px;
  box-shadow: 0 0 8px lightgray;
`;

export const ModalTable = styled.table`
  width: 90%;
  height: 80%;
  margin: 20px auto;
  font-family: sans-serif;
`;

export const ModalHeader = styled.thead`
  font-size: 15px;
  border: lightgray 0.75px solid;
`;

export const ModalRows = styled.tr`
  font-size: 14px;
`;

export const ModalCell = styled.td`
  padding: 1px;
`;

export const ModalCellLeft = styled(ModalCell)`
  text-align: left;
  font-size: 13px;
`;

export const ModalCellCenter = styled(ModalCell)`
  text-align: center;
  font-weight: lighter;
  font-size: 12px;

`;

export const ModalCellRight = styled(ModalCell)`
  text-align: right;
  font-size: 13px;
`;
