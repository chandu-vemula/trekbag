import Button from "./Button";

function ButtonGroup() {
  const secondaryButtons = [
    "Mark as complete",
    "Mark as incomplete",
    "Reset to initial",
    "Remove all items",
  ];

  return (
    <section className="button-group">
      {/* <Button type="secondary">Mark as complete</Button>
      <Button type="secondary">Mark as incomplete</Button>
      <Button type="secondary">Reset to initial</Button>
      <Button type="secondary">Remove all items</Button> */}

      {secondaryButtons.map((text) => {
        return (
          <Button key={text} type="secondary">
            {text}
          </Button>
        );
      })}
    </section>
  );
}

export default ButtonGroup;
