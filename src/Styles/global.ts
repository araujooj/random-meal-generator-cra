import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  #root{
    max-width: 1020px;
    height: 100vh;
    margin: 0 auto;
    padding: 0 20px 20px;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #282A36;
    color: #F8F8F2;
    -webkit-font-smoothing: antialiased !important
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
`;
