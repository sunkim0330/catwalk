import styled from 'styled-components';

export const Overview = styled.div`
  font-family: sans-serif;
  background-color: white;
  display: grid;
  grid-template-columns: 70% 30%;
  text-align: center;
  width: 80%;
  margin: auto;
`;

export const Gallery = styled.div`
  align-items: center;
  display: grid;
  height: 850px;
  position: relative;
  ${({ extendedView }) => {
    return extendedView ? `
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 90% 10%;
    grid-column-start: span 2;
    justify-content: center;
    ` : `
    grid-template-columns: 25% 75%;
    grid-template-rows: 100%;
    `;
  }}
`;

export const MainImgWrapper = styled.div`
  grid-column-start: 2;
  height: 100%;


  ${({ extendedView }) => {
    return extendedView ? `
    display: flex;
    justify-self: center;
    ` : `
    display: grid;
    margin: auto;
    `;
  }}
`;

export const MainImg = styled.img`
  height: auto;
  margin: auto;
  width: auto;
  align-self: center;

  ${({ extendedView }) => {
    return extendedView ? `
    max-width: 800px;
    max-height: 90%;
    ` : `
    max-width: 600px;
    max-height: 80%;
    `;
  }}

  &:hover {
    cursor: zoom-in;
  }
`;

export const LeftArrow = styled.img`
  align-self: center;
  position: absolute;
  padding-left: 8px;
  ${({ hidden }) => {
    return hidden ? 'hidden' : null;
  }}

  ${({ extendedView }) => {
    return extendedView ? `
    grid-column-start: 1;
    ` : `
    grid-column-start: 2;
    `;
  }}

  &:hover {
  }

  &:active {
    transform: translateX(-12px);
  }
`;

export const RightArrow = styled.img`
  align-self: center;
  grid-column-start: 2;
  justify-self: right;
  position: absolute;
  padding-right: 8px;
  ${({ hidden }) => {
    return hidden ? 'hidden' : null;
  }}

  &:hover {
  }

  &:active {
    transform: translateX(12px);
  }
`;

export const Thumbnails = styled.div`
  display: flex;
  height: 100%;

  ${({ extendedView }) => {
    return extendedView ? `
    flex-direction: row;
    grid-column-start: 2;
    grid-row-start: 2;
    ` : `
    flex-direction: column;
    grid-column-start: 1;
    grid-row-start: 1;
    justify-content: center;
    justify-self: end;
    `;
  }}
`;

export const GalleryThumbnail = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 14.5%;
  width: auto;
  margin: auto;
  ${({ selected }) => {
    return selected ? 'box-shadow: 0px 0px 0px 5px #808080' : 'box-shadow: 0px 0px 0px 0px #808080';
  }}
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ProductInfo = styled.div`
`;

export const StarContainer = styled.div`
  left: 22px;
  margin-top: 4px;
  position: relative;
  width: 100px;
`;

export const RatingDisplay = styled.span`
  font-size: 20px;
`;

export const LinkToReviews = styled.a`
  display: flex;
  position: relative;
  text-decoration: none;
  left: 24px;
`;

export const Category = styled.h4`
  font-size: 22px;
  text-align: left;
  left: 24px;
  position: relative;
  margin: 10px 0px;
`;

export const Name = styled.h3`
  bottom: 8px;
  font-size: 28px;
  left: 24px;
  margin: 10px 0px;
  position: relative;
  padding: 10px;
  padding: 0px;
  text-align: left;
`;

export const Price = styled.span`
  bottom: 11px;
  font-size: 22px;
  float: left;
  left: 18px;
  position: relative;
  margin: 0px 5px;
  color: ${props => props.color || 'black'}
`;

export const StyleSelector = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  justify-items: center;
  row-gap: 4px;
  padding-bottom: 4px;
`;

export const StyleName = styled.h3`
  grid-column: 1 / span 4;
`;

export const StyleContainer = styled.div`
`;

export const Style = styled.img`
  border-radius: 50%;
  width: 75px;
  height: 75px;
`;

export const Checkmark = styled.i`
  position: relative;
  top: 60px;
  font-size: 42px;
  color: green;
  z-index: ${({selected}) => !selected ? '-1' : null}
`;

export const CartManagement = styled.div`
`;

export const SizeSelect = styled.select`
  border-radius: 6px;
  font-size: 18px;
  height: 28px;
  margin: 0px;
  width: 200px;
`;

export const QtySelect = styled.select`
  border-radius: 6px;
  font-size: 18px;
  height: 28px;
  margin: 10px;
  width: 100px;
`;

export const Option = styled.option`
  text-align: center;
`;

export const AddToCart = styled.button`
  border-radius: 5px;
  font-size: 18px;
  height: 32px;
  margin-bottom: 8px;
  width: 150px;

  &:hover {
    box-shadow: 2px 2px grey;
  }

  &:active {
    transform: translateY(2px)
  }
`;

export const PointlessButton = styled.button`
  border-radius: 5px;
  font-size: 18px;
  height: 32px;
  margin: 4px;
  margin-bottom: 8px;
  width: 150px;

  &:hover {
    box-shadow: 2px 2px grey;
  }

  &:active {
    transform: translateY(2px)
  }
`;

export const ProductDescription = styled.div`
  display: block;
`;

export const Features = styled.div`
`;

export const FeaturesHeader = styled.h3`
  margin: 10px auto;
`;

export const FeaturesItem = styled.li`
  list-style-type: none;
  margin: 2px;
`;

export const Slogan = styled.h3`
  background-color:
  font-style: italic;
`;

export const Description = styled.p`
`;

export const Socials = styled.div`
`;

export const Twitter = styled.button`
  border-radius: 5px;
  width: 150px;
  height: 30px;
  font-size: 18px;
  margin: 10px;

  &:hover {
    background-color: #9f7f31;
  }

  &:active {
    transform: translateY(2px)
  }
`;

export const Pinterest = styled.button`
  border-radius: 5px;
  width: 150px;
  height: 30px;
  font-size: 18px;
  margin: 10px;

  &:hover {
    background-color: #9f7f31;
  }

  &:active {
    transform: translateY(2px)
  }
`;

export const Facebook = styled.button`
  border-radius: 5px;
  width: 150px;
  height: 30px;
  font-size: 18px;
  margin: 8px 8px 12px 8px;

  &:hover {
    background-color: #9f7f31;
  }

  &:active {
    transform: translateY(2px)
  }
`;

export const BottomBorder = styled.hr`
  bottom: 0px;
  border: 0;
  color: black;
  grid-column-start: 1;
  grid-column-end: 3;
  height: 2px;
  position: relative;
  width: 100%;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  `;
