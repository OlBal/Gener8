import React from "react";

const Button = ({ type, handleClick, buttonClass, label, disabled, value }) => (
  <button
    label={label}
    onClick={handleClick}
    type={type}
    className={buttonClass}
    disabled={disabled}
    value={value}
  >
    {label}
  </button>
);

export default Button;
