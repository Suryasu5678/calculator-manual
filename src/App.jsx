import { useState } from 'react'
import "./App.css";

import Calculator from './calculator';

function App() {
  const [count, setCount] = useState("")

  return (
    <>
      <Calculator count={count} setCount={setCount}  />
    </>
  );
}

export default App
