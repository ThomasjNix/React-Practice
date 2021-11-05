import { useState } from "react";
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const updateCounter = (increment) => {
    if (increment) {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  }
  return (
    <div className="App">
      <div className="page-content">
        <h1>useState example</h1>
        <div className="example-content">
          <p className="counter-string">Counter value: {counter}</p>
          <button onClick={() => {updateCounter(true)}}>+</button>
          <button onClick={() => {updateCounter(false)}}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
