import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ScoreChangeProvider } from "./context/score-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ScoreChangeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ScoreChangeProvider>
);
