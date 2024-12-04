import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import { persistore } from "./Store/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistore}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);
