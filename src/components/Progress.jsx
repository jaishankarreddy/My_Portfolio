import React, { useEffect, useState } from "react";
import "./progress.css";

const Progress = () => {
  const [counter, setCounter] = useState(0);
  const num = 90; // The target percentage (0 to 100)

  useEffect(() => {
    // Set up an interval to increment the counter
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < num) {
          return prevCounter + 1;
        } else {
          clearInterval(interval);
          return prevCounter;
        }
      });
    }, 30);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [num]);

  return (
    <div className="skilll">
      <div className="outer">
        <div className="inner">
          <div className="number">{counter}%</div>
        </div>
      </div>
      <svg
        className="progress_svg"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="30px"  // Reduced width to 30px
        height="30px" // Reduced height to 30px
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#DA22FF" />
            <stop offset="100%" stopColor="#9733EE" />
          </linearGradient>
        </defs>
        <circle
          cx="15"
          cy="15"
          r="13"  // Reduced radius to 13px (half of the circle size)
          strokeLinecap="round"
          style={{
            strokeDashoffset: 81.68 - (81.68 * counter) / 100, // Adjusted based on smaller radius
          }}
        />
      </svg>
    </div>
  );
};

export default Progress;
