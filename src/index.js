import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Home from "./Home";
import ControlledRadioButtonsGroup from "./test";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Home />
  </StrictMode>
);
