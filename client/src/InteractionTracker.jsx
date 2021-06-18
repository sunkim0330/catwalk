import React from 'react';
import axios from 'axios';

export const InteractionTracker = ({ component, componentName }) => {

  const getClickedElement = (event) => {
    console.log(event);
    let moduleName = getModuleName(event.target);
    let elementName = event.target.localName;
    axios.post('/interactions', {element: event.target.localName, widget: moduleName, time: new Date() })
      .then((response) => {
        let vowels = 'aeioui';
        let indefiniteArticle = vowels.includes(elementName[0]) ? 'an' : 'a';
        console.log(`You clicked on ${indefiniteArticle} ${event.target.localName} element in the ${moduleName}!`);
      });
  };

  const getModuleName = (element) => {

    console.log(typeof element);
    if (element.localName !== 'rect' && element.localName !== 'svg' && element.className.includes('module')) {
      return element.id;
    } else {
      return getModuleName(element.parentElement);
    }
  };

  return (
    <div onClick={(event) => getClickedElement(event)}>
      {component}
    </div>
  );
};
