import styled from 'styled-components';

// LISTS

export const RelatedListDiv = styled.div`
  height: 400px;
  width: 95%;
  display: grid;
  color: ${props => props.font};
  grid-template-columns: repeat(${props => props.listLength}, 305px);
  grid-template-rows: 100%;
  column-gap: 10px;
  justify-items: center;
  justify-content: start;
  align-self: center;
  justify-self: center;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  font-family: 'Roboto', sans-serif;
`;

export const ArrowWrapper = styled.div`
  margin: 10px auto;
  height: 406px;
  width: 80%;
  display: grid;
  grid-template-columns: 2.5% 95% 2.5%;
  grid-template-rows: 100%;
  column-gap: 15px;
  padding-bottom: 30px;
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


export const ArrowRightDiv = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 2;

`;

export const ArrowLeftDiv = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;

`;

export const ArrowIcon = styled.i`
  margin-top: 200px;
  color: ${props => props.color};
  transition: all .3s;

  :hover {
    color: gray;
  }
`;


export const LabelDiv = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / span 1;
  align-self: end;
  height: 100px;
  background: ${props => props.background + 'd4'};
  backdrop-filter: blur( 15px );
  font-family: sans-serif;
  border: 0.5px solid rgba( 255, 255, 255, 0.18 );
  cursor: pointer;
`;


// TEXT STYLES

export const NameText = styled.p`
  margin: 4px;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

export const SecondaryText = styled.p`
  margin: 4px;
  font-size: 15px;
`;

export const TertiaryText = styled.p`
  font-size: 12px;
  font-weight: lighter;
  padding-left: 20px;
`;

export const SecondaryTextTitle = styled(SecondaryText)`
  margin-left: 13%;
  margin-top: 50px;
  margin-bottom: 10px;
  color: ${props => props.color};
  font-family: 'Montserrat', sans-serif;
`;

// ADD OUTFIT

export const AddToOutfitButton = styled.div`
  position: absolute;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  text-align: center;
  height: 390px;
  width: 300px;
  border: 0.5px lightgray solid;
  background: ${props => props.background};
  z-index: 1;
  transition: all .4s;

  :hover {
    box-shadow: ${props => props.shadow};
    background-color: ${props => props.color};
    color: ${props => props.font};
    border-radius: 15px;
  }

  :active {
    box-shadow: inset 0 0 5px gray;
  }
`;


export const PlusAnimation = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  width: 200px;
  height: 10px;
  margin: 55% auto;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 50px;
    margin: 50% 50px;
    z-index: 2;
    transition: all 0.5s;
    border: 1px solid ${props => props.background + '51'};
    background-color: ${props => props.background + '08'};
  }

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 50px;
    margin: 50% 50px;
    z-index: 2;
    transition: all 0.5s;
    border: 1px solid ${props => props.background + '51'};
    background-color: ${props => props.background + '08'};
  }

  :hover {
    color: ${props => props.color};
  }

  :hover::before {
    background-color: ${props => props.background + '5a'};
    border-radius: 10px;
  }

  :hover::after {
    transform: rotate(90deg);
    background-color: ${props => props.background + '5a'};
    border-radius: 10px;
  }
`;



// MODAL

export const ModalOverlay = styled.div`
  font-family: 'Roboto', sans-serif;
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

`;

export const ModalViewButton = styled.i`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  align-self: start;
  padding: 10px;
  justify-self: end;
  color: lightgray;

  :hover {
    color: #3a5a40;
    text-shadow: 0 0 8px gray;
  }
`;

export const ModalView = styled.div`
  background-color: ${props => props.background + 'ff'};
  border: 1px lightgray solid;
  margin: 200px auto;
  height: fit-content;
  width: fit-content;
  box-shadow: 0 0 8px gray;
  z-index: 7;
  font-family: 'Roboto', sans-serif;
`;

export const ModalTable = styled.table`
  width: fit-content;
  height: fit-content;
  margin: 20px auto;
  padding: 20px;
`;

export const ModalHeader = styled.thead`
  font-size: 25px;
  border: lightgray 0.75px solid;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

export const ModalRows = styled.tr`
  font-size: 18px;
`;

export const ModalCell = styled.td`
  padding: 12px;
`;

export const ModalCellLeft = styled(ModalCell)`
  text-align: left;
  font-size: 18px;
`;

export const ModalCellCenter = styled(ModalCell)`
  text-align: center;
  font-weight: lighter;
  font-size: 16px;

`;

export const ModalCellRight = styled(ModalCell)`
  text-align: right;
  font-size: 18px;
`;
