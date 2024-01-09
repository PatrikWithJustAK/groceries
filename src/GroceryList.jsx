import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryList = ({ items, onRemoveItem }) => {
  return (
      <ul>
        {items.map((item =>
          <GroceryItem key={item.id} item={item.itemtext} quantity={item.quantity} onRemoveItem={onRemoveItem} />
        ))}
      </ul>
  );
};

export default GroceryList;
