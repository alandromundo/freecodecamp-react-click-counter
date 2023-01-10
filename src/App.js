import React from "react";
import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <section className="main-container">
        <h1>freeCodeCamp (fueguito)</h1>
        <div className="counter">{counter}</div>
        <Button setCounter={setCounter} value={"Click"} isReset={false} />
        <Button setCounter={setCounter} value={"Reset"} isReset={true} />
      </section>
    </div>
  );
}

export default App;
