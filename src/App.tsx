import React from 'react';
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import {WelcomePage} from "./components/welcome/WelcomePage";
import {LoginPage} from "./components/login/LoginPage";

const AppContainer = styled.div`

`

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path={"/"} element={<WelcomePage/>} />
        <Route path={"/login"} element={<LoginPage/>} />
        <Route path={"*"} element={<WelcomePage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
