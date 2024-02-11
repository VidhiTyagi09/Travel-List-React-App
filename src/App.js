import { useState } from "react";
import "./index.css";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

export default function App() {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function addItem(newItem) {
    var itemToAddAlreadyExist = items.find((item) => item.id === newItem.id);
    itemToAddAlreadyExist &&
      setItems(items.filter((item) => item.id !== newItem.id));
    setItems((items) => [...items, newItem]);
  }

  function deleteItem(itemId) {
    setItems(items.filter((item) => item.id !== itemId));
  }

  function onToggleItem(itemId) {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  }

  function onEditItem(itemId) {
    var item = items.find((item) => item.id === itemId);
    setDescription(item.description);
    setQuantity(item.quantity);
    deleteItem(itemId);
  }

  function clearItems() {
    if (items.length === 0) {
      alert("There is no item to clear");
      return;
    }
    alert("Are you sure you want to clear all items?");
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form
        items={items}
        setItems={setItems}
        onAddItems={addItem}
        description={description}
        setDescription={setDescription}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <PackingList
        items={items}
        setItems={setItems}
        deleteItem={deleteItem}
        onToggleItem={onToggleItem}
        onEditItem={onEditItem}
        clearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}
