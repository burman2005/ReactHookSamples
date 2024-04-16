import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Counter from "./useEffect";
import Car from "./useState";
import Component1 from "./useContext";
import PrevStateRef from "./useRef";
import Todos from "./useReducer";
import CallBackApp from "./useCallback";
import MemoApp from "./useMemo";
import { Home } from "./customHook";
import GarageListComp from "./List";
import SubmitForm from "./MyForm";
import RouterApp from "./Router";
import './my-sass.scss';

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterApp />
    <Header/>
  </StrictMode>
);
