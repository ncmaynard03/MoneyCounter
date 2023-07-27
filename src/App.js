import "./styles.css";
import CoinCounter from "./coinCounter.js";
import { useState, useEffect } from "react";

export default function App() {
  const values = [1, 0.25, 0.1, 0.05, 0.01];
  const [counts, setCounts] = useState(Array.from(values, () => 0));

  const handleSetCount = (index, count) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = count;
      return newCounts;
    });
  };

  return (
    <div className="App">
      {values.map((val, index) => {
        return (
          <CoinCounter
            key={index}
            index={index}
            value={val}
            count={counts[index]}
            setCoinCount={handleSetCount}
          />
        );
      })}
    </div>
  );
}
