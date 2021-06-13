import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Gallery from './Gallery.jsx';
import ProductDescription from './ProductDescription.jsx';
import ProductInfo from './ProductInfo.jsx';
import CartManagement from './CartManagement.jsx';
import StyleSelector from './StyleSelector.jsx';
import * as Styles from './styledComponents.js';
import ShareButtons from './ShareButtons.jsx';

const Overview = ({ product, styles, defaultStyle, totalReviews, averageRating }) => {

  const [currentStyle, setCurrentStyle] = useState(defaultStyle);

  useEffect(() => {
    setCurrentStyle(defaultStyle);
  }, [product.name]);

  const getClickedElement = (event) => {
    const module = 'Overview';
    axios.post('/interactions', {element: event.target.localName, widget: module, time: new Date() })
      .then((response) => {
        console.log('interaction logged');
      });
  };

  return (
    <Styles.Overview onClick={getClickedElement} id="overview">
      <Gallery styleImages={styles[currentStyle].photos} productID={product.id}/>
      <Styles.Sidebar>
        <ProductInfo product={product} style={styles[currentStyle]} rating={averageRating} reviewCount={totalReviews}/>
        <StyleSelector styles={styles} setCurrentStyle={setCurrentStyle} currentStyle={styles[currentStyle]}/>
        <CartManagement styleInventory={styles[currentStyle].skus}/>
        <ProductDescription slogan={product.slogan} description={product.description} features={product.features}/>
        <ShareButtons />
      </Styles.Sidebar>
    </Styles.Overview>
  );

};

export default Overview;
