import React, { useState } from 'react';
import GroceryList from './GroceryList';
import AddItem from './AddItem';



function App() {
  const [items, setItems] = useState([]);

  const addItem = item => {
    setItems([...items, item]);
  };

  const removeItem = itemToRemove => {
    setItems(items.filter(item => item !== itemToRemove));
  };

  return (

    <div className= "grid grid-cols-3 justify-items-center justify-self-center m-4">
      <div className ="grid col-start-2">
        <AddItem onAddItem={addItem} />
      </div>
      <div className ="grid col-start-2 w-full justify-items-center justify-self-center border border-black">
        <GroceryList items={items} onRemoveItem={removeItem} />
      </div>
    </div>
  );
}

export default App;
