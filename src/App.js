import './App.css';
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayRoot from "./components/DisplayRoot";
import {useState} from "react";

const App = () => {

  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot handleOnClick={(size) => {
        setNumber(number + size);
      }}/>
      <DisplayRoot number={number} />
    </div>
  );
}

export default App;
