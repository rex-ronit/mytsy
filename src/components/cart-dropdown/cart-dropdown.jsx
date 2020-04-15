import React from "react";
import "./cart-dropdown.scss";
import Button from "../button/button";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;
