import React from "react";

import "./cart-item.scss";

const CartItem = ({ item }) => (
  <div className="div cart-item">
    <img src={item.imageUrl} alt="item" className="img" />
    <div className="item-details">
      <span className="name">{item.name}</span>
      <span className="price">
        {item.quantity} x ${item.price}
      </span>
    </div>
  </div>
);

export default CartItem;
