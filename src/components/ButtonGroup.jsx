// import { secondaryButtons } from "../lib/constants";
import Button from "./Button";

function ButtonGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete} buttonType="secondary">
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
      </Button>

      {/* {secondaryButtons.map((text) => {
        return (
          <Button key={text} type="secondary">
            {text}
          </Button>
        );
      })} */}
    </section>
  );
}

export default ButtonGroup;
