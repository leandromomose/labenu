import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './routes/Router';
import Header from './components/Header/Header';
import styled from 'styled-components';
import LoggedContext from './context/LoggedContext';

const Container = styled.div`
  padding-top: 64px;
`

function App() {
  const [logged, setLogged] = useState(localStorage.getItem("token") ? true : false)

  const loggedContext = {logged, setLogged}

  return (
    <div className="App">
      <BrowserRouter>
        <LoggedContext.Provider value={loggedContext}>
          <Container>
            <Header />
          </Container>
          <Router />
        </LoggedContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
