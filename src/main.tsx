import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import store from "./stores/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const app = document.getElementById("root");

if (app) {
  ReactDOM.createRoot(app).render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}
