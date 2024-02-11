export default function Stats({ items }) {
  var packedItems = items.filter((item) => item.packed);
  var percentage = Math.round((packedItems.length / items.length) * 100);
  var packedAllItemsMsg = `You have ${items.length} items on your list. Congratulation!!! You are set to GO! 🛫`;
  var packedSomeItemsMsg = `You have ${items.length} items on your list, and you have already packed ${packedItems.length}(${percentage}%) items`;
  var packedNoItem = `You have ${items.length} items on your list, and you have no item packed yet`;
  return (
    <footer className="stats">
      <em>
        {items.length === 0
          ? "Start adding some items to your packing list ✈️"
          : packedItems.length === items.length
          ? packedAllItemsMsg
          : packedItems.length === 0
          ? packedNoItem
          : packedSomeItemsMsg}
      </em>
    </footer>
  );
}
