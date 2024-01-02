

const GroceryItem = ({ item, onRemoveItem }) => {
  return (
    <div className="grid col-span-1 col-start-2">
      <li>
        <p>
        {item}
        </p>
        <button className="text-red-900 border rounded p- border-red-900 hover:bg-red-300" onClick={() => onRemoveItem(item)}>Remove</button>
      </li>
    </div>
  );
};

export default GroceryItem;
