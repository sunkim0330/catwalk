import React from 'react';
import style from 'styled-components';

// ==============
// GRID BREAKDOWN
// ==============
export const Grid = style.div`
  border: 2px solid black;
  height: 800px;
  width: 96%;
  margin: 10px 1% 150px 1%;
  padding: 10px;
  display: grid;
  grid-template-columns: 24% 38% 38%;
  grid-template-rows: 5% 15% 50% 20% 10%;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-areas:
    "title sort ."
    "summary review review"
    "breakdown review review"
    "characteristics review review"
    ". review review";
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
`;

// ===============
// TITLE BLOCK
// ===============

export const title = style.h3`
  margin: 2px 4px 2px 28px;
`;

// ===============
// SORT BLOCK
// ===============

export const dropdown = style.select`

`;

export const total = style.h6`
  margin-block-start: 0;
  margin-block-end: 0;
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
