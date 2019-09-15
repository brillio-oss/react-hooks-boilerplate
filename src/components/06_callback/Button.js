import React from "react";

const Button = ({ handleClick, children }) => {
  console.log(`render button ${children}`);
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
