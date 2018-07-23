import React from "react";
import ReactDOM from "react-dom";
import Editor from "./components/Editor";

function App() {
  return (
    <div>
      <Editor />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
