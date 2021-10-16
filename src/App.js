import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(10);
  return (
    <div className="App">
      <button onClick={() => setState(state + 1)}>+</button><span className="counter">{state }</span><button onClick={() => setState(state - 1)}>-</button>
    </div>
  );
}

export default App;
