"use client";
import { useState } from "react";
import { roboto_mono as robotoMono } from "../fonts";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className={`mb-2 ${robotoMono.variable}`}>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} className={`btn ${robotoMono.variable}`}>Increment</button>
    </div>
  );
}
