import { useState, useEffect } from "react";

export default function CoinCounter({ value, count, index, setCoinCount }) {
  return (
    <>
      <div className="counter">
        <h2>{value.toFixed(2)}</h2>
        <button
          onClick={() => {
            if (count > 0) setCoinCount(index, count - 1);
          }}
        >
          -
        </button>
        <input
          value={count}
          onChange={(e) => {
            var newCountVal;
            try {
              newCountVal = parseInt(e.target.value, 10);

              if (!(0 < newCountVal)) throw new Error();
            } catch {
              setCoinCount(index, 0);
              return;
            }
            setCoinCount(index, newCountVal);
          }}
        />
        <button
          onClick={() => {
            if (count < 999) setCoinCount(index, count + 1);
          }}
        >
          +
        </button>
        <h1>{(value * count).toFixed(2)}</h1>
      </div>
    </>
  );
}
