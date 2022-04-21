import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./stores"

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#1fbf6c",
    },
    secondary: {
      main: "#1676d4",
    },
  },
});

const reactDom = createRoot(document.getElementById("root"));

reactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
