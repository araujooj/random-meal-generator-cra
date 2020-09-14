import React from "react";
import Routes from "./Routes";
import GlobalStyle from "./Styles/global";
import { BrowserRouter as Router } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
       <Routes />
      </Router>
    </>
  );
};

export default App;
