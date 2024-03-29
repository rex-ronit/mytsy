import React from "react";
import "./button.scss";

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
