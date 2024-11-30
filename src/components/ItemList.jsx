import { initialItems } from "../lib/constants";

function ItemList() {
  return (
    <ul>
      {initialItems.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
}

export default ItemList;

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input checked={item.packed} type="checkbox" />
        {item.name}
      </label>
    </li>
  );
}
