import React from 'react';

function Etapa1() {
    return (
      <div className="Etapa1">
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <p>1. Qual o seu nome?</p>
        <input></input>
        <p>2. Qual sua idade?</p>
        <input></input>
        <p>3. Qual seu email?</p>
        <input></input>
        <p>4. Qual a sua escolaridade?</p>
        <select>
            <option>Ensino médio incompleto</option>
            <option>Ensino médio completo</option>
            <option>Ensino superior incompleto</option>
            <option>Ensino superior completo</option>
        </select>
      </div>
    );
  }
  
  export default Etapa1;