import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CartManagement = ({ styleInventory }) => {

  const [productSku, setProductSku] = useState();
  const [productSize, setProductSize] = useState();
  const [productCount, setProductCount] = useState(0);

  let styleSkus = Object.keys(styleInventory);
  let styleSkuData = Object.values(styleInventory);

  let sizeOptions = styleSkuData.map((sku, index) => {
    if (sku.quantity) {
      return <option value={styleSkus[index]} key={index}>{sku.size}</option>;
    }
  });

  sizeOptions.length === 0 ? sizeOptions = <option>OUT OF STOCK</option> : null;

  let quantityOptions = [];

  while (quantityOptions.length < productCount && quantityOptions.length < 15) {
    let numToUse = quantityOptions.length + 1;
    quantityOptions.push(<option value={numToUse} key={numToUse}>{numToUse}</option>);
  }

  const handleSizeSelection = () => {

  };

  const handleQuantitySelection = () => {

  };

  const addToCart = () => {
    axios.post('/cart', { 'sku_id': productSku})
      .then((response) => {
        console.log('added to cart!');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="cartManagement">
      <h3>Cart Management</h3>
      <select onChange={(event) => {
        setProductSku(event.target.value);
        setProductSize(event.target.value);
        setProductCount(styleInventory[event.target.value].quantity);
      }}>
        <option>Select Size</option>
        {sizeOptions}
      </select>
      <select onChange={(event) => setProductCountCount(event.target.value)}>
        <option>-</option>
        {quantityOptions}
      </select>
      <button type="button">Add to Cart</button>
      <button type="button">*</button>
    </div>
  );

};

export default CartManagement;