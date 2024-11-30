import Button from "./Button";

function ButtonGroup() {
  return (
    <section className="button-group">
      <Button type="secondary">Mark as complete</Button>
      <Button type="secondary">Mark as incomplete</Button>
      <Button type="secondary">Reset to initial</Button>
      <Button type="secondary">Remove all items</Button>
    </section>
  );
}

export default ButtonGroup;
