import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./styles/reset.scss";
import "./styles/common.scss";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>
);
