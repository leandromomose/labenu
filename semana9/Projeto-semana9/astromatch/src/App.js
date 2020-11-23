import Axios from 'axios';
import React, {useState} from 'react';
import styled from 'styled-components';
import './App.css';
import MatchScreen from './screens/MatchScreen';
import StartScreen from './screens/StartScreen';

function App() {

  const [currentScreen, setCurrentScreen] = useState("match")

  const chooseCurrentScreen = () => {
    switch (currentScreen) {
      case "start":
        return <StartScreen goToMatch={goToMatch}/>
        break;
      case "match":
        return <MatchScreen goToStart={goToStart}/>
        break;
      default:
        return <div>Erro: Página não encontrada</div>
        break;
    }
  }

  const goToStart = () => {
    setCurrentScreen("start")
  }

  const goToMatch = () => {
    setCurrentScreen("match")
  }

  return (
    <div className="App">
     {chooseCurrentScreen()}
    </div>
  );
}

export default App;
