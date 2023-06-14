import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import "./styles/common.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>
);
