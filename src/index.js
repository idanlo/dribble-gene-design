import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Body from "./Body";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
