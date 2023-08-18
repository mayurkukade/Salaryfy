import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { appTheme } from "./theme/app.theme.ts";
import appStore from "./store/app.store.ts";
import {ToastContainer} from 'react-toastify'
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   
      <BrowserRouter>
        <ThemeProvider theme={appTheme}>
        <Provider store={appStore}>
          <App />
          <ToastContainer/>
          </Provider>
        </ThemeProvider>
      </BrowserRouter>

  </React.StrictMode>
);
