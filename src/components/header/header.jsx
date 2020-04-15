import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import logo from "./mytsy-logo-1.png";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Header = (props) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img src={logo} className="logo-container" alt="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>

      <Link className="option" to="/contact">
        CONTACT
      </Link>

      {props.currentUser ? (
        <Link className="option" to="/signin" onClick={() => auth.signOut()}>
          SIGN OUT
        </Link>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {props.hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
