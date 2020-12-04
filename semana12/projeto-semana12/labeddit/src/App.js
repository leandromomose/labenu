import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './routes/Router';
import Header from './components/Header/Header';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 64px;
`

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Header />
        </Container>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
