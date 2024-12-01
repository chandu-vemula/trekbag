function ItemList({ items, handleDeleteItem, handleToggleItems }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <Item
            handleToggleItems={handleToggleItems}
            handleDeleteItem={handleDeleteItem}
            key={item.id}
            item={item}
          />
        );
      })}
    </ul>
  );
}

export default ItemList;

function Item({ item, handleDeleteItem, handleToggleItems }) {
  return (
    <li className="item">
      <label onChange={() => handleToggleItems(item.id)}>
        <input checked={item.packed} type="checkbox" />
        {item.name}
      </label>
      <button
        onClick={() => {
          handleDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
