import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
    font-size: 15px;
  }
`;

export default GlobalStyle;
