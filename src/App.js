import { useState } from 'react';

function App() {
  const [value , setvalue] = useState(0);
  const increment = () => {
    setvalue(value+1)
  }
  const decrement = () => {
    setvalue(value-1)
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {value}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
