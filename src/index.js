import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
// import axiosMiddleware from "redux-axios-middleware";
import rootReducers from "./reducers";
import { Provider } from "react-redux";
// import axios from "axios";

const middleware = composeWithDevTools(applyMiddleware(promise(), thunk));
// const client = axios.create({
//   //all axios can be used, shown in axios documentation
//   baseURL: "https://api.aceandtate.com/api",
//   responseType: "json"
// });
const store = createStore(rootReducers, middleware);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
