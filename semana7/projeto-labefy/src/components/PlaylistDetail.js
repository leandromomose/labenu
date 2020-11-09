import React from "react";
import styled from "styled-components";
import axios from "axios";

class PlaylistDetail extends React.Component {
    state = {
        playlistDetail: {},
        playlistTrack: "addButton",
        name: "",
        artist: "",
        url: ""
    }

    componentDidMount() {
        this.getPlaylistDetail()
    }

    getPlaylistDetail = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}`, {
            headers: {
                Authorization: "leandro-momose-dumont"
            }
        }).then((response) => {
            this.setState({playlistDetail: response.data.result.tracks})
        }).catch((error) => {
            console.log(error.message)
        })
    }

    addTrack = () => {
        if (this.state.playlistTrack === "addButton") {
            this.setState({playlistTrack: "addTrackForm"})
        } else {
            this.setState({playlistTrack: "addButton"})
        }
    }

    trackName = (event) => {
        const TrackNameValue = (event.target.value)
        this.setState({name: TrackNameValue})
    }

    trackArtist = (event) => {
        const TrackArtistValue = (event.target.value)
        this.setState({artist: TrackArtistValue})
    }

    trackLink = (event) => {
        const TrackLinkValue = (event.target.value)
        this.setState({url: TrackLinkValue})
    }

    addTrackToPlaylist = () => {
        const body = {
            name: "this.state.name", 
            artist: "this.state.artist",
            url: "this.state.url"
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}`, body, {
            headers: {
                Authorization: "leandro-momose-dumont"
            }
        }).then(() => {
            this.setState({name: "", artist: "", url: ""})
            this.getPlaylistDetail()
            this.addTrack()
            alert(`Track ${this.state.name} added successfully!`)
        }).catch((error) => {
            alert("I'm sorry, you cannot add this track to the playlist")
            console.log(error.message)
        })
    }

    render() {
        const playlistTrack = 
        this.state.playlistTrack === "addButton" ? (
            <button onClick={this.addTrack}>Add Track to Playlist</button>
        ) : (
            <div>
                <input placeholder="Track Name" type="text" value={this.state.name} onChange={this.trackName}></input>
                <input placeholder="Track Artist" type="text" value={this.state.artist} onChange={this.trackArtist}></input>
                <input placeholder="Track Link" type="link" value={this.state.url} onChange={this.trackLink}></input>
                <button onClick={this.addTrackToPlaylist}>Add Track</button>
            </div>
        )

        return(
            <div>
                <div>
                    <p>{this.state.playlistDetail.name}</p>
                    <p>{this.state.playlistDetail.artist}</p>
                    <p>{this.state.playlistDetail.url}</p>
                </div>
                <div>
                    {playlistTrack}
                </div>
                <hr />
                <button onClick={this.props.changePage}>Back to Playlists</button>
            </div>
        )
    }
}

export default PlaylistDetail