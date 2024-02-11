var id = 0;
export default function Form({
  items,
  setItems,
  onAddItems,
  description,
  setDescription,
  quantity,
  setQuantity,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    if (description.length === 0) {
      alert("Please enter a description");
      return;
    } else {
      var sameItem = items.find((item) => item.description === description);
      var newItem = null;
      if (sameItem != null) {
        newItem = {
          description,
          quantity,
          packed: sameItem.packed,
          id: sameItem.id,
        };
      } else {
        newItem = { description, quantity, packed: false, id: (id += 1) };
      }

      setDescription("");
      setQuantity(1);
      console.log("newItem", newItem);
      onAddItems(newItem);
    }
  }

  return (
    <form className="add-form">
      <h3>What do you need for your 😍 trip ?</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Text..."
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <button onClick={handleSubmit}>Add Item</button>
    </form>
  );
}
