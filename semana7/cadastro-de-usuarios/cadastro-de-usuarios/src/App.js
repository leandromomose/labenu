import React from 'react';
import axios from 'axios';
import Cadastro from './components/Cadastro.js';
import Lista from './components/Lista.js';

class App extends React.Component {
  state = {
    cadastrado: false
  }
  
  render(){
    return (
      <div>
         <Cadastro/>
         <Lista/>
      </div>
    )
  } 
}

export default App;
