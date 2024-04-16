import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Counter from "./useEffect";
import Car from "./useState";
import Component1 from "./useContext";
import PrevStateRef from "../useRef";
import Todos from "./useReducer";
import CallBackApp from "./useCallback";
import MemoApp from "./useMemo";
import { Home } from "./customHook";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Home />
  </StrictMode>
);
