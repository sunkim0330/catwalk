import React from 'react';
import axios from 'axios';

const App = () => {
  const [selectedCow, setSelectedCow] = React.useState({ cowName: 'betty', cowDescription: 'a pretty cool cow' });
  const [cowList, setCowList] = React.useState([]);

  const eventHandler = () => {

  };

  return (
    <div>
      <List cowList={cowList}/>
      <button onClick={eventHandler}></button>
    </div>
  );
};


export default App;