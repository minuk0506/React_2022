import logo from "./logo.svg";
import "./ReactJS.css";
import FoodInput from "./comps/foodInput";
import "./food.css";

function ReactJS() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FoodInput />
    </div>
  );
}

export default ReactJS;
