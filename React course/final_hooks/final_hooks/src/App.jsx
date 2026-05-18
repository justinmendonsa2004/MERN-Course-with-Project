import { useMemo, useReducer, useState } from "react";

function handleCount(state, action) {
  switch (action) {
    case "Add":
      return state + 1;
    case "Minus":
      return state - 1;
    case "reset":
      return 0;
  }
}

function SqureofNum(num) {
  return num * num;
}

function App() {
  const [count, setcount] = useReducer(handleCount, 0); //this useReducer....

  const SquareofCount = useMemo(() => SqureofNum(count), [count]); //this is useMemo....

  // const handleAdd = () => {
  //   setcount(count + 1);
  // };
  // const handleMin = () => {
  //   setcount(count - 1);
  // };
  // const handleReset = () => {
  //   setcount(0);
  // };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setcount("Add")}>ADD</button>
      <button onClick={() => setcount("Minus")}>Min</button>
      <button onClick={() => setcount("reset")}>Reset</button>

      <h1>Squire of count</h1>
      <h3>{SquareofCount}</h3>
    </>
  );
}
export default App;
