import React from "react";
import { createRoot } from "react-dom";
import App from "./App";
import { ContextProvider } from './Context';

const root = createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
