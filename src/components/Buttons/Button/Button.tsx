import React, {useState, useEffect} from 'react';
import './Button.css';

type ButtonProps = {
  name: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button>{props.name}</button>
  );
}

export default Button;
