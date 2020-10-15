import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import leandro from './img/Leandro Momose.jpeg'
import astrodev from './img/astrodev.png'
import onda from './img/onda.jpeg'
import espaco from './img/espaço.jpg'

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'leandro'}
          fotoUsuario={leandro}
          fotoPost={onda}
        />

        <Post
          nomeUsuario={'astrodev'}
          fotoUsuario={astrodev}
          fotoPost={espaco}
        />
      </div>

      
    );
  }
}

export default App;
