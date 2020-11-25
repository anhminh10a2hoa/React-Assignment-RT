import React, {useState, useEffect} from 'react';
import './Item.css';

type ItemProps = {
  id: string;
  type: string;
  name: string;
  color: string[];
  price: number;
  manufacturer: string;
}

const Item: React.FC<ItemProps> = ({id, type, name, color, price, manufacturer}) => {
  let colors: any = [];
  color.forEach((c: string) => colors.push(
    <div style={{
      height: '13px', width: '13px', backgroundColor: c, display: 'inline-block', marginBottom: '-1.6px'
    }}></div>
  ))
  
  return (
    <div className="Item">
      <p>Name: {name + " - " + id}</p>
      <p>Color: {colors}</p>
      <p>Price: {price + "€"}</p>
    </div>
  );
}

export default Item;
