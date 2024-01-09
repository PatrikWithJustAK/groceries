

const GroceryItem = ({ item, quantity, onRemoveItem, }) => {
  return (
    <div className="grid col-span-1 col-start-2" id={item.id}>
      <li>
        <p>
            {item} x
          {quantity ? quantity : "1"} 

        </p>
        <button className="text-red-900 border rounded p- border-red-900 hover:bg-red-300" onClick={() => onRemoveItem(item)}>Remove</button>
      </li>
    </div>
  );
};

export default GroceryItem;
