import Button from "./modules/button";
import HoverLogger from "./modules/hoverLogger";
import SelectModule from "./modules/select";

const buttonTexts = {
  start: "start",
};

function App() {
  return (
    <div>
      <SelectModule />
      <HoverLogger />
      <Button text={buttonTexts.start} />
    </div>
  );
}

export default App;
