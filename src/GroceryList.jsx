import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryList = ({ items, onRemoveItem }) => {
  return (
    <div className= "grid grid-cols-3 justify-center">
      <ul>
        {items.map((item, index) => (
          <GroceryItem key={index} item={item} onRemoveItem={onRemoveItem} />
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
