import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./redux/playlistSlice";
import App from "./App";

const store = configureStore({
  reducer: {
    playlist: playlistReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
