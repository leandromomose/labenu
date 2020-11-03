import React from "react";
import styled from "styled-components";
import axios from "axios";
import PlaylistDetail from "./PlaylistDetail";

const DeleteButton = styled.button`
    background-color: red;
    color: white;
`

class ViewPlaylist extends React.Component {
  state = {
    playlists: [],
    currentPage: "playlists",

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

    changePage = (playlistId) => {
        if (this.state.currentPage === "playlist") {
            this.setState({currentPage: "playlistDetail", playlistId: playlistId})
        } else {
            this.setState({currentPage: "playlist", playlistId: ""})
        }
    }

  render() {
    
        return (
            <div>
                {this.state.currentPage === "playlist" ? (
                    <div>
                        <ul>
                            {this.state.playlists.length === 0 && <div>There are No playlists created yet, create your playlists.</div>}
                            {this.state.playlists.map(playlist => {
                                return (
                                <li key={playlist.id}>{playlist.name} <DeleteButton onClick={() => this.deletePlaylist(playlist.id)}>Delete Playlist</DeleteButton></li>
                                )
                            })}        
                        </ul>
                    </div>
        
                ) : (
                    <PlaylistDetail userId={this.state.userId} changePage={this.changePage} />
                )}
            </div>
        )
    }
}

export default ViewPlaylist;