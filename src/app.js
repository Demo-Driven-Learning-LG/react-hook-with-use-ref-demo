import React from "react";
import { Counter, Stopwatch } from "./referenceValueWithRef";

export const App = () => {
  return (
    <div>
      <h1> App useRef demo</h1>
      <h2>Usage</h2>
      <h3>Reference value with ref</h3>
      <ol>
        <li>
          Counter: <Counter />
        </li>
        <li>
          Stopwatch: <Stopwatch />
        </li>
      </ol>
    </div>
  );
};
