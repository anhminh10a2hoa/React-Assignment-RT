import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

type ButtonProps = {
  name: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Link
      to={{
        pathname: "/search",
        search: `?category=${props.name.toLowerCase()}`,
      }}
    >
    <button>{props.name}</button>
    </Link>
  );
}

export default Button;
