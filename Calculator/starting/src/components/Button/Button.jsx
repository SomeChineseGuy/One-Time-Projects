import React from "react";
import './Button.css'

const Button = ({value}) => {
  

  const handleClick = () => {
    console.log('THIS WORKS!!!')
  }

  return (
    <button onClick={handleClick} className="btn">{value}</button>
  )
};

export default Button;
