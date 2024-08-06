import React from "react";
import "./App.css";
import {ContextProvider } from "./contexts/Theme";
import Container from "./component/Container";


const App = () => {

  return (
  
        <ContextProvider>
        <Container/>
        </ContextProvider>
  );
};

export default App;
