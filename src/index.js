import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/index.css";

import { App, App2 } from "./Apps/index";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
      <App2 />
    </StrictMode>
  </Provider>,
  rootElement
);
