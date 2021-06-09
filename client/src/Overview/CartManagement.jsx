import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CartManagement = ({ styleInventory }) => {

  const [formattedSkuData, setFormattedSkuData] = useState([]);
  const [productSku, setProductSku] = useState();
  const [availableQty, setAvailableQty] = useState(0);
  const [purchaseQty, setPurchaseQty] = useState(0);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [quantityOptions, setQuantityOptions] = useState([]);

  useEffect(() => {
    setPurchaseQty(0);
    setAvailableQty(0);
    setQuantityOptions([]);
    setSizeOptions([]);
    setProductSku();
    formatSkuData();
    document.getElementById('countselect').setAttribute('disabled', true);
  }, [styleInventory]);

  useEffect(() => {
    generateSizeOptions();
  }, [formattedSkuData]);

  useEffect(() => {
    if (quantityOptions.length > 1) {
      document.getElementById('countselect').value = '1';
    }
  }, [quantityOptions]);

  useEffect(() => {
    generateQuantityOptions();
  }, [productSku]);

  useEffect(() => {
    if (sizeOptions.length === 1 && availableQty === 0) {
      document.getElementById('sizeselect').value = 'outOfStock';
      document.getElementById('sizeselect').setAttribute('disabled', true);
      document.getElementById('addToCart').setAttribute('hidden', true);
    } else {
      if (document.getElementById('sizeselect').disabled) {
        document.getElementById('sizeselect').toggleAttribute('disabled');
      }
      document.getElementById('addToCart').toggleAttribute('hidden', false);
    }
  }, [sizeOptions, formattedSkuData]);

  const formatSkuData = (newSkuData = []) => {
    axios.get('/cart')
      .then((response) => {
        let cart = response.data;
        for (let i = 0; i < cart.length; i++) {
          if (styleInventory[cart[i].sku_id]) {
            styleInventory[cart[i].sku_id].actualQty = styleInventory[cart[i].sku_id].quantity - Number(cart[i].count);
          }
        }
      })
      .then(() => {
        for (let sku in styleInventory) {
          if (styleInventory[sku].actualQty === 0) {
            continue;
          }
          styleInventory[sku].sku = sku;
          newSkuData.push(styleInventory[sku]);
        }
        setFormattedSkuData(newSkuData);
      });
  };

  const generateSizeOptions = () => {
    let newSizeOptions = formattedSkuData.map((sku, index) => {
      if (sku.quantity) {
        return <option value={index} key={index}>{sku.size}</option>;
      }
    });
    newSizeOptions.length === 0 ? newSizeOptions = [<option value="outOfStock" key="goAway">OUT OF STOCK</option>] : null;
    setSizeOptions(newSizeOptions);
  };

  const generateQuantityOptions = (newQuantityOptions = []) => {
    while (newQuantityOptions.length < availableQty && newQuantityOptions.length < 15) {
      let optionNum = newQuantityOptions.length + 1;
      newQuantityOptions.push(<option value={optionNum} key={optionNum}>{optionNum}</option>);
    }
    setQuantityOptions(newQuantityOptions);
  };

  const handleSizeSelection = (event) => {
    let skuIndex = event.target.value;
    if (skuIndex !== 'Select Size') {
      document.getElementById('countselect').toggleAttribute('disabled');
      setPurchaseQty(1);
      setProductSku(formattedSkuData[skuIndex].sku);
      setAvailableQty(formattedSkuData[skuIndex].actualQty || formattedSkuData[skuIndex].quantity);
    }
  };

  const handleQuantitySelection = (event) => {
    setPurchaseQty(Number(event.target.value));
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
      <select id="sizeselect" onChange={(event) => handleSizeSelection(event)}>
        <option>Select Size</option>
        {sizeOptions}
      </select>
      <select id="countselect" disabled onChange={(event) => handleQuantitySelection(event)}>
        <option>-</option>
        {quantityOptions}
      </select>
      <button type="button" id="addToCart" onClick={() => addToCart(Number(purchaseQty))}>Add to Cart</button>
      <button type="button" onClick={() => window.alert('You clicked the pointless button!')}>:D</button>
    </div>
  );

};

export default CartManagement;
