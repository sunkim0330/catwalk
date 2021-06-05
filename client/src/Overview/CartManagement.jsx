import React from 'react';

const CartManagement = ({ }) => {

  return (
    <div id="cartManagement">
      <h3>Cart Management</h3>
      <select>
        <option>Select Shirt Size</option>
        <option>XS</option>
        <option>S</option>
      </select>
      <select>
        <option>Select Quantity</option>
        <option>1</option>
        <option>2</option>
      </select>
      <button type="button">Add to Cart</button>
      <button type="button">*</button>
    </div>
  );

};

export default CartManagement;