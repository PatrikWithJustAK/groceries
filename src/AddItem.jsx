import React, { useState } from 'react';

const AddItem = ({ onAddItem }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className = "text-green-900 border rounded p-1 m-1  border-green-900 hover:bg-green-600" type="submit">Add</button>
    </form>
  );
};

export default AddItem;
