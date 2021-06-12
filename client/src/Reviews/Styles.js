import React from 'react';
import style from 'styled-components';

// ==============
// GRID BREAKDOWN
// ==============
export const Grid = style.div`
  cursor: default;
  max-width: 1800px;
  min-width: 1200px;
  border: 2px solid black;
  height: 800px;
  width: 96%;
  margin: 10px 1% 150px 1%;
  padding: 10px;
  display: grid;
  grid-template-columns: 24% 38% 38%;
  grid-template-rows: 5% 15% 40% 20% 20%;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-areas:
    "title sort ."
    "summary review review"
    "breakdown review review"
    "characteristics review review"
    "characteristics review review";
`;

export const TitleBlock = style.div`
  grid-area: title;
  border: 1px solid blue;
`;

export const Sort = style.div`
  grid-area: sort;
  border: 1px solid blue;
`;

export const Summary = style.div`
  grid-area: summary;
  border: 1px solid blue;
`;

export const Breakdown = style.div`
  grid-area: breakdown;
  border: 1px solid blue;
`;

export const ReviewList = style.div`
  grid-area: review;
  border: 1px solid blue;
  width: 95%;
  height: 94%;
`;

export const Characteristics = style.div`
  grid-area: characteristics;
  border: 1px solid blue;
  height: fit-content;
  display: flex;
  flex-direction: column;

`;

// ===============
// TITLE BLOCK
// ===============

export const title = style.div`
  margin: 2px 4px 2px 0px;
  font-size: 1em;
`;

// ===============
// SORT BLOCK
// ===============

export const dropdown = style.select`

`;

export const total = style.a`
  display: inline-block;
  font-size: 1.2em;
  margin: 15px 30px;
  width: fit-content;
  font-weight: normal;
`;

// ===============
// SUMMARY BLOCK
// ===============

export const overall = style.h1`
  margin: 5px 2px;
  font-size: 5em;
  width: fit-content;
  height: fit-content;
`;

// ===============
// RATINGS BREAKDOWN
// ===============

export const spacer = style.div`
  height: 20%;
  width: 100%;
  border-bottom: 1px solid;
  margin-bottom: 30px;
`;

export const filter = style.div`
  margin: 10px 5px;
`;

export const remove = style.div`
  margin: 20px 0 0 5px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #d3d9d9;
  }
`;

export const ratingContainer = style.div`
  margin: 10px 5px;
  height: 7%;
`;

export const bar = style.div`
  display: inline-block;
  width: 65%;
  height: 10px;
  background: #d3d9d9;
  margin-left: 10px;
  border-radius: 3px;
`;

export const percent = style.div(props => ({
  width: props.width,
  height: '10px',
  background: '#3a5a40',
  'border-radius': '3px'
}));

export const rating = style.a`
  font-size: 1em;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #d3d9d9;
  }
`;

export const count = style.a`
  margin: 0px 5px;
  text-align: center;
`;

export const rec = style.div`
  width: 100%;
  margin: 20px 5px;
  padding: 10px;
  display: inline-block;
`;

// ===============
// CHARACTERISTICS
// ===============

export const charContainer = style.div`
  padding: 4px;
`;

export const charName = style.div`
  margin: 5px;
  width: fit-content;
  font-size: 1.2em;
`;

export const attBox = style.div`
  display: flex;
  justify-content: space-between;
`;

export const attribute = style.div`
  display: inline-block;
  margin: 3px;
  font-size: .8em;
`;

export const scale = style.div`
  height: 10px;
  width: 90%;
  background: #d3d9d9;
  margin: 3px 5px 3px 10px;
`;

export const marker = style.div(props => ({
  display: 'inline-block',
  width: 0,
  height: 0,
  'border-left': '10px solid transparent',
  'border-right': '10px solid transparent',
  'border-top': '15px solid #3a5a40',
  'margin-left': props['margin-left']
}));

// ===============
// REVIEWS
// ===============

// might change justify content value
// check align items as well
// export const reviewContainer = style.div`
//   border-bottom: solid 1px black;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: flex-start;
//   align-content: space-between;
// `;

export const reviewTile = style.div`
  width: 98%;
  height: 45%;
  border: solid 1px black;
  margin: 5px 3px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
`;

export const topRow = style.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 3px 0 5px 0;

`;

export const reviewStars = style.div`
  width: fit-content;
  margin-left: 5px;
`;

export const text = style.div`
  width: fit-content;
  font-size: .8em;
  margin-right: 5px;
`;

export const reviewContainer = style.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 3px 0;
  flex: 1;
`;

export const summary = style.div`
  width: 100%;
  font-size: 1.2em;
  font-weight: bold;
  margin: 3px 2px;
  flex: 1;
`;

export const reviewBody = style.div`
  width: 100%;
  font-size: 1em;
  margin: auto;
`;

export const bodyContainer = style.div`
  width: 100%;
  margin: 3px 2px;
  flex: 5;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const reviewThumbnail = style.img`
  border: 1px solid black;
  border-radius: 5px;
  width: 100px;
  margin: auto;
  cursor: pointer;
  &:hover {
    border-color: #d3d9d9
  }
`;

export const response = style.div`
  flex: 1;
`;

export const buttons = style.div`
  flex: 1;
`;

export const more = style.div`
  width: fit-content;
  font-size: 1em;
  text-decoration: underline;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    color: #d3d9d9;
  }
`;