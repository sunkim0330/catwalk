import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './Overview';
import Related from './Related';
import QandAs from './Q&As';
import Reviews from './Reviews';


const App = () => {
  const [currentProduct, setCurrentProduct] = React.useState({});


  useEffect(() => {
    axios.get('/products/19089')
      .then((response) => {
        setCurrentProduct(response.data);
      });
  }, []);

  return (
    <div>
      Super Fun Shopping Experience
      <Overview product={currentProduct}/>
      <Related product={currentProduct}/>
      <QandAs product={currentProduct}/>
      <Reviews product={currentProduct}/>
    </div>
  );
};


export default App;