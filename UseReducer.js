import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let product = [
  {
    name: "Apple",
    id: 1,
  },
  {
    name: "Samsung",
    id: 2,
  },
  {
    name: "Nokia",
    id: 3,
  },
  {
    name: "Sony",
    id: 4,
  },
];

let initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "DELETE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((ele) => ele.id !== action.payload.id),
      };
    case "EMPTY_ITEM":
      return {
        cart: [],
      };
    default:
      break;
  }
};

function App() {
  let [state, dispatch] = useReducer(cartReducer, initialState);
  console.log("state", state);
  return (
    <div className="text-center">
      {state?.cart.map((ele) => (
        <div>
          <span key={ele.id}>{`Add ${ele.name}`}</span>
          <button
            onClick={() => {
              dispatch({ type: "DELETE_ITEM", payload: ele });
            }}
          >{`Delete ${ele.name}`}</button>
        </div>
      ))}
      {product.map((ele) => (
        <button
          key={ele.id}
          onClick={() =>
            dispatch({
              type: "ADD_ITEM",
              payload: { name: ele.name, id: ele.id },
            })
          }
        >{`Add ${ele.name}`}</button>
      ))}
      <button
        onClick={() => {
          dispatch({
            type: "EMPTY_ITEM",
          });
        }}
      >{`Empty Cart`}</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
