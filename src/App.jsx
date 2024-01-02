import React, { useState, useEffect } from 'react';
import GroceryList from './GroceryList';
import AddItem from './AddItem';




function App() {

  const [items, setItems] = useState([]);
  const addItem = item => {setItems([...items, item]);};
  // on page load I would like the app to pull all existing items from the DB. This is my first attempt and likely to be refactored later

  useEffect(() => //useEffect to fetch initial data on page load 
    {fetchdata();
    },[]); 

    const fetchdata = async () => //fetch is async so we await the response before continuing
    {
      try {
      const response= await fetch('http://127.0.0.1:8000/api/grocery-items/') // await response
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // basic error handling
      }//endif
      const data = await response.json(); //format to JSON
      setItems(data); //Dump the array of JSON objects into data
    } //end try
    catch (error) {
      console.error('Error fetching API', error);
    } //end catch
  }; // end function



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
