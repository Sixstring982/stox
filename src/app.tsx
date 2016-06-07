/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Reducers from "./reducers";

import App from "./components/App.tsx";

const store = createStore(Reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('stox-root')
);
