// import { secondaryButtons } from "../lib/constants";
import Button from "./Button";

function ButtonGroup({ handleRemoveAllItems }) {
  return (
    <section className="button-group">
      <Button buttonType="secondary">Mark as complete</Button>
      <Button buttonType="secondary">Mark as incomplete</Button>
      <Button buttonType="secondary">Reset to initial</Button>
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
