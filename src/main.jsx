import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MyContextApi } from "./MyContextApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContextApi>
    <App />
  </MyContextApi>
);
