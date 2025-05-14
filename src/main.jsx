import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//import Solution from "./Solution/Solution.jsx";
import Solution from "./Solution.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {<Solution />}
  </StrictMode>,
);
