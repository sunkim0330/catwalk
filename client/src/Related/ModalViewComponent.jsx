import React from 'react';

const ModalViewComponent = (props) => {


  let comparison = {};
  let comparisonArray = [];

  props.currentChar.forEach(feature => {
    comparison[feature.feature] = [feature.value];
  });


  props.relatedChar.forEach(feature => {
    if (comparison[feature.feature]) {
      comparison[feature.feature].push(feature.value);
    } else {
      comparison[feature.feature] = [undefined, feature.value];
    }
  });

  const ifTrueOrNull = (data) => {
    if (data === 'true') {
      return 'v'; //styled checkmark
    } else if (!data) {
      return '';
    } else {
      return data;
    }
  };


  for (let row in comparison) {
    let currentProductValue = ifTrueOrNull(comparison[row][0]);
    let relatedProductValue = ifTrueOrNull(comparison[row][1]);
    comparisonArray.push([row, currentProductValue, relatedProductValue]);
  }


  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>{props.currentName}</td>
            <td></td>
            <td>{props.relatedName}</td>
          </tr>
        </thead>
        <tbody>
          {comparisonArray.map((row, i) => { return <ComparisonRow row={row} key={i}/>; })}
        </tbody>
      </table>
    </div>
  );
};


const ComparisonRow = (props) => {
  return (
    <tr>
      <td>{props.row[1]}</td>
      <td>{props.row[0]}</td>
      <td>{props.row[2]}</td>
    </tr>
  );
};


export default ModalViewComponent;
