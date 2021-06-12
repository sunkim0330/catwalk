import styled from 'styled-components';
import checkmark from './images/checkmark.png';

export const Overview = styled.div`
  background-color: darkcyan;
  display: grid;
  grid-template-columns: 70% 30%;
  text-align: center;
  width: 100%;
`;

// gallery start
// gallery container
export const Gallery = styled.div`
  align-items: center;
  border-style: ridge;
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 100%;
  height: 850px;
  position: relative;
`;

// main img
export const MainImage = styled.img`
  border-style: ridge;
  border-width: 20px;
  display: block;
  grid-column-start: 2;
  height: 95%;
  margin: 4vh auto;
`;

export const LeftArrow = styled.img`
  align-self: center;
  grid-column-start: 2;
  position: absolute;
  padding-left: 20px;

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
  padding-right: 20px;

  &:hover {
  }

  &:active {
    transform: translateX(12px);
  }
`;

// thumbnails container
export const Thumbnails = styled.div`
  border-style: outset;
  border-width: 8px;
  display: flex;
  flex-direction: column;
  grid-column-start: 1;
  grid-row-start: 1;
  height: 98%;
  justify-content: center;
  justify-self: center;
`;

// thumbnail img
export const GalleryThumbnail = styled.img`
  height: 14.2%;
`;
// gallery end


// container for everything next to gallery
export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;


// product info start
export const ProductInfo = styled.div`
  border-style: outset;
`;

export const RatingDisplay = styled.span`
  font-size: 20px;
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
  bottom: 20px;
  font-size: 22px;
  left: 24px;
  position: relative;
  text-align: left;
  margin: 10px 0px;
`;

export const SalePrice = styled.div`
  color: red;
`;
// product info end


// style selector start
export const StyleSelector = styled.div`
  border-style: outset;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  justify-items: center;
  row-gap: 4px;
`;

export const StyleName = styled.h3`
  grid-column-start: 1;
  grid-column-end: 5;
`;

export const Style = styled.img`
  border-radius: 50%;
  width: 75px;
  height: 75px;
`;

export const Check = styled.i`
position: absolute;
left: 1385px;
top: 305px;
font-size: 42px;
color: green;
`;
// style selector end

// cart management start
export const CartManagement = styled.div`
  border-style: outset;
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
  height: 34px;
  width: 150px;

  &:hover {
    background-color: #9f7f31;
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
  width: 150px;

  &:hover {
    background-color: #9f7f31;
  }

  &:active {
    transform: translateY(2px)
  }
`;
// cart management end

// product description start
export const ProductDescription = styled.div`
  border-style: outset;
  display: block;
`;

export const Features = styled.div`
`;

export const FeaturesHeader = styled.h3`
  margin: 10px auto;
`;

export const FeaturesItem = styled.li`
  list-style-type: none;
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
  margin: 10px;

  &:hover {
    background-color: #9f7f31;
  }

  &:active {
    transform: translateY(2px)
  }
`;
// product description end