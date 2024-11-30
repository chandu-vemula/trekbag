import Button from "./Button";

function AddItemForm() {
  return (
    <form>
      <h2>Add an item</h2>
      <input placeholder="Toothbrush..." />
      <Button>Add to List</Button>
    </form>
  );
}

export default AddItemForm;
