import { useRef, useState } from "react";
import Button from "./Button";

function AddItemForm({ setItems }) {
  const [itemText, setItemtext] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!itemText) {
      alert("Items can't be empty");
      inputRef.current.focus();
      return;
    }

    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };

    setItems((prev) => [...prev, newItem]);
    setItemtext("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        autoFocus={true}
        onChange={(e) => {
          setItemtext(e.target.value);
        }}
        value={itemText}
        placeholder="Toothbrush..."
      />
      <Button>Add to List</Button>
    </form>
  );
}

export default AddItemForm;
