import React from "react";
import styled from "styled-components";
import axios from "axios";

const DeleteButton = styled.button`
    background-color: red;
    color: white;
`

class ViewPlaylist extends React.Component {
  state = {
    playlists: []
  }

  componentDidMount = () => {
      this.getAllPlaylists()
    }

  getAllPlaylists = () => {
      axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
          headers: {
              Authorization: "leandro-momose-dumont"
            }
        }).then((response) => {
            this.setState({playlists: response.data.result.list})
        }).catch((error) => {
            console.log(error.message)
        })
    }

    deletePlaylist = (playlistId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, {
            headers: {
                Authorization: "leandro-momose-dumont"
            }
        }).then((response) => {
            alert(`Playlist deleted succesfully!`)
            this.getAllPlaylists()
        }).catch((error) => {
            alert(`Playlist NOT deleted, try again.`)
            console.log(error.message)
        })
    }

  render() {
    const renderPlaylists = this.state.playlists.map(playlist => {
    return <p key={playlist.id}>{playlist.name} <DeleteButton onClick={() => this.deletePlaylist(playlist.id)}>Delete Playlist</DeleteButton></p>
    })
  

    return (
      <div>
        {renderPlaylists}
      </div>
      
    );
  }
}

export default ViewPlaylist;