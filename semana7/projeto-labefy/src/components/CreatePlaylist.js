import React from "react";
import styled from "styled-components";
import axios from "axios";

class CreatePlaylist extends React.Component {
  state = {
    nameValue: ""
  }

  createPlaylist = () => {
      const body = {
          name: this.state.nameValue
      }
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,  {
          headers: {
              Authorization: "leandro-momose-dumont"
          }
      }).then((response) => {
          alert(`Playlist ${this.state.nameValue} created!`)
          this.setState({nameValue: ""})
      }).catch((error) => {
          alert(`The playlist ${this.state.nameValue} already exist, try a different playlist name.`)
          console.log(error.message)
      })
  }

  onChangeNameValue = (event) => {
    this.setState({nameValue: event.target.value})
  }

  render() {
      
    return (
      <div>
        <label>Playlist Name:</label>
        <input value={this.state.nameValue} onChange={this.onChangeNameValue}></input>
        <button onClick={this.createPlaylist}>Create Playlist</button>
      </div>
      
    );
  }
}

export default CreatePlaylist;