import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Button.css';

type ButtonProps = {
  name: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const category: any = useParams();
  return (
    <Link
      to={{
        pathname: `/${props.name.toLowerCase()}`,
      }}
    >
    <button style={{backgroundColor: props.name.toLowerCase() === category.category ? "#f5a7a7" : "#ccf6c8"}}>{props.name}</button>
    </Link>
  );
}

export default Button;
