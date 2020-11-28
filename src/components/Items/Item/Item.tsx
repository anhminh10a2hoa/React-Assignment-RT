import React from 'react';
import './Item.css';

type ItemProps = {
  id: string;
  name: string;
  color: string[];
  price: number;
  manufacturer: string;
  status: string;
}

const Item: React.FC<ItemProps> = ({id, name, color, price, manufacturer, status}) => {
  let colors: any = [];
  color.forEach((c: string, index: number) => colors.push(
    <div key={index} style={{
      height: '13px', width: '13px', backgroundColor: c, display: 'inline-block', marginBottom: '-1.6px'
    }}></div>
  ))
  
  return (
    <div className="Item">
      <p>Name: {name + " - " + id}</p>
      <p>Manufacturer: {manufacturer}</p>
      <div>Color: {colors}</div>
      <p>Price: {price + "€"}</p>
      <p>{status}</p>
    </div>
  );
}

export default Item;
