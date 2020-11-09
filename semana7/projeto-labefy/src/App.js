import React from "react";
import './App.css';
import styled from "styled-components";
import axios from "axios";
import CreatePlaylist from "./components/CreatePlaylist"
import ViewPlaylist from "./components/ViewPlaylist"

class App extends React.Component {
  state = {
    createPage: true
  }

  changePage = () => {
    this.setState({createPage: !this.state.createPage})
  }
  
  render() {
    const currentPage = this.state.createPage ? (<CreatePlaylist/>) : (<ViewPlaylist/>)

    return (
      <div>
        {currentPage}
        <button onClick={this.changePage}>Change Page</button>
      </div>
      
    );
  }
}

export default App;
