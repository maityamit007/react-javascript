import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeContext } from "../ThemeContext";
import { InputFile } from "./InputFile";
import "./styles.css";

function App() {
  return (
    <ThemeContext>
      <div className="text-center">
        <h5 className="my-3 h5-responsive">Welcome to</h5>
        <InputFile />
      </div>
    </ThemeContext>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
