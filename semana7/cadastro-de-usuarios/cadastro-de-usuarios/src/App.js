import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Cadastro from './components/Cadastro.js';
import Lista from './components/Lista.js';

class App extends React.Component {
  state = {
    cadastrado: true
  }

  mudarPagina = () => {
    this.setState({cadastrado: !this.state.cadastrado})
  }
  
  render(){
    const paginaAtual = this.state.cadastrado ? (<Cadastro/>) : (<Lista/>)

    return (
      <div>
        {paginaAtual}
        <button onClick={this.mudarPagina}>Mudar de página</button>
      </div>
    )
  } 
}

export default App;
