import React from "react";

const Button = ({ type, handleClick, buttonClass, label, disabled }) => (
  <button
    label={label}
    onClick={handleClick}
    type={type}
    className={buttonClass}
    disabled={disabled}
  >
    {label}
  </button>
);

export default Button;
