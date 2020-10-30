import React from "react";
import './App.css';
import axios from "axios";
import styled from "styled-components";


class App extends React.Component {
  state = {
    ships: [],
    selectedShipUrl: ""
  }

  componentDidMount() {
    this.fetchShips()
  }

  fetchShips = () => {
    axios.get("https://api.spacexdata.com/v3/ships").then((response) => {
      this.setState({ships: response.data})
    }).catch((error) => {
      console.log(error.message)
    })
  }

  onChangeSelect = (event) => {
    axios.get(`https://api.spacexdata.com/v3/ships/${event.target.value}`).then((response) => {
      this.setState({selectedShipUrl: response.data.image})
    }).catch((error) => {
      console.log(error.message)
    })
  }

  render() {
    
    const shipList = this.state.ships.map((ship) => {
    return <option key={ship.ship_id}>{ship.ship_name}</option>
    })

    return (
      <div>
       <select onChange={this.onChangeSelect}>
         {shipList}
       </select>
       <img src={this.state.selectedShipUrl}/>
      </div>
    );
  }
}

export default App;
