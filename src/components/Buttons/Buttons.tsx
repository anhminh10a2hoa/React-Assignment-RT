import React from 'react';
import Button from './Button/Button';
import './Buttons.css';

const Buttons: React.FC = () => {
  return (
    <div className="Buttons">
      <Button name="Jackets" />
      <Button name="Shirts"/>
      <Button name="Accessories"/>
    </div>
  );
}

export default Buttons;
