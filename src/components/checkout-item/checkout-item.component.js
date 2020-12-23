import React from "react";

import "./checkout-item.styles.scss";

const Checkout = ({cartItem: {name, imageUrl, price, quantity}}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="Item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&=10005;</div>
    {/* &=10005 is the utf-8 close */}
  </div>
);

export default Checkout;