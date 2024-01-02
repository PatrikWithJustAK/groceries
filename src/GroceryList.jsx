import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryList = ({ items, onRemoveItem }) => {
  return (
      <ul>
        {items.map((item =>
          <GroceryItem key={item.itemtext} item={item.itemtext} quantity={item.quantity} onRemoveItem={onRemoveItem} />
        ))}
      </ul>
  );
};

export default GroceryList;
