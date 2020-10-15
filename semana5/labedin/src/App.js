import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import img from './img/Leandro Momose.jpeg'
import logo from './img/GoPhone logo.png'
import imagem from './img/wyndham.png'
import email from './img/email logo.jpg'
import endereco from './img/endereço logo.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={img} 
          nome="Leandro Momose" 
          descricao="Oi, eu sou o Leandro. Sou estudante da Turma Dumont na Labenu. Programação sempre foi algo que me fascinou e estou apaixonado pelo curso e por todo aprendizado que tenha adquirido dia após dia!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      <div className="page-section-container">
        <CardPequeno 
          imagem={email}
          nome="E-mail:"
          descricao="leandro.momose@gmail.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={endereco}
          nome="Endereço:"
          descricao="Avenida Bias Fortes, 984"
        />
      </div>

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logo} 
          nome="GoPhone Brasil" 
          descricao="Customer Success - Comercial/Vendas" 
        />
        
        <CardGrande 
          imagem={imagem} 
          nome="Wyndham Gramado Termas" 
          descricao="Supervisor de andares - Operacional" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
