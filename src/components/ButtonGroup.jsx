// import { secondaryButtons } from "../lib/constants";
import Button from "./Button";

function ButtonGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  const secondaryButtons = [
    {
      text: " Mark as complete",
      onClick: handleMarkAllAsComplete,
    },
    {
      text: " Mark as incomplete",
      onClick: handleMarkAllAsIncomplete,
    },
    {
      text: " Reset to initial",
      onClick: handleResetToInitial,
    },
    {
      text: " Remove all items",
      onClick: handleRemoveAllItems,
    },
  ];
  return (
    <section className="button-group">
      {/* <Button onClick={handleMarkAllAsComplete} buttonType="secondary">
        Mark as complete
      </Button>
      <Button onClick={handleMarkAllAsIncomplete} buttonType="secondary">
        Mark as incomplete
      </Button>
      <Button onClick={handleResetToInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={handleRemoveAllItems} buttonType="secondary">
        Remove all items
      </Button> */}

      {secondaryButtons.map((button) => {
        return (
          <Button
            key={button.text + button.onClick.toString()}
            type="secondary"
            onClick={button.onClick}
          >
            {button.text}
          </Button>
        );
      })}
    </section>
  );
}

export default ButtonGroup;
