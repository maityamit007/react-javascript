import "./styles.css";
import { useState } from "react";

export default function App() {
  let [box, setBox] = useState(Array(9).fill(false));

  let handleClick = (index) => {
    let val = box.filter((ele) => !ele);
    console.log(val);
    if (val.length > 1) {
      setBox((prevState) => {
        let newState = prevState.map((el, i) => {
          if (i == index) {
            el = true;
          }
          return el;
        });
        return newState;
      });
    } else {
      setBox(Array(9).fill(false));
    }
  };

  return (
    <div className="container">
      {box.map((ele, index) => (
        <div
          className={`box ${!ele ? "" : "green"}`}
          onClick={() => handleClick(index)}
          key={index}
        >
          {ele}
        </div>
      ))}
    </div>
  );
}
