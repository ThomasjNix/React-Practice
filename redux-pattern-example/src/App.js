import { useReducer, useState } from "react";
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


  /**
   * Calls to dispatch() apply logic based on the provided action type in the reducer 
   * and programmatically update the state, which is returned from useReducer
   */
  const reducer = (state, action) => {
    switch(action.type) {
      case 'increment':
        return { count: state.count + 1};
      case 'decrement':
        return { count: state.count - 1};
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {count: 0});

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

      <div className="page-content">
        <h1>useReducer example</h1>
        <div className="example-content">
          <p className="counter-string">Counter value: {state.count}</p>
          <button onClick={() => {dispatch({ type: 'increment'})}}>+</button>
          <button onClick={() => {dispatch({ type: 'decrement'})}}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
