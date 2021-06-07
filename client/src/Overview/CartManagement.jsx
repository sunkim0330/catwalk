import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CartManagement = ({ styleInventory }) => {

  const [productSku, setProductSku] = useState();
  const [productSize, setProductSize] = useState();
  const [availableQty, setAvailableQty] = useState(0);
  const [purchaseQty, setPurchaseQty] = useState(0);

  let formattedSkuData = [];

  for (let skus in styleInventory) {
    let currentSkuData = {};
    currentSkuData.sku = skus;
    currentSkuData.quantity = styleInventory[skus].quantity;
    currentSkuData.size = styleInventory[skus].size;
    formattedSkuData.push(currentSkuData);
  }

  let sizeOptions = formattedSkuData.map((sku, index) => {
    if (sku.quantity) {
      return <option value={index} key={index}>{sku.size}</option>;
    }
  });

  sizeOptions.length === 0 ? sizeOptions = <option>OUT OF STOCK</option> : null;

  let quantityOptions = [];

  while (quantityOptions.length < availableQty && quantityOptions.length < 15) {
    let numToUse = quantityOptions.length + 1;
    quantityOptions.push(<option value={numToUse} key={numToUse}>{numToUse}</option>);
  }

  const handleSizeSelection = (event) => {
    let index = event.target.value;
    if (index !== 'Select Size') {
      setProductSku(formattedSkuData[index].sku);
      setProductSize(formattedSkuData[index].size);
      setAvailableQty(formattedSkuData[index].quantity);
    }
    if (purchaseQty > availableQty) {
      setPurchaseQty(availableQty);
    }
  };

  const handleQuantitySelection = () => {

  };

  const addToCart = (quantity) => {
    while (quantity > 0) {
      axios.post('/cart', { 'sku_id': productSku})
        .then((response) => {
          console.log('added to cart!');
        })
        .catch((error) => {
          console.log(error);
        });
      quantity--;
    }
  };

  return (
    <div id="cartManagement">
      <h3>Cart Management</h3>
      <select onChange={(event) => handleSizeSelection(event)}>
        <option>Select Size</option>
        {sizeOptions}
      </select>
      <select onChange={(event) => setPurchaseQty(Number(event.target.value))}>
        <option>-</option>
        {quantityOptions}
      </select>
      <button type="button" onClick={() => addToCart(Number(purchaseQty))}>Add to Cart</button>
      <button type="button">*</button>
    </div>
  );

};

export default CartManagement;
