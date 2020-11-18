import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import { useProtectedPage } from "../../hooks/useProtectedPage";

function ListTripsPage() {

  const [list, setList] = useState([])
  const history = useHistory()
  useProtectedPage()

  useEffect(() => {
    getListTrips()
  }, [])

  const getListTrips = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-dumont/trips")
    .then((response) => {
      setList(response.data.trips)
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

  const goToCreateTripPage = () => {
    history.push("/trips/create")
  }

  const logout = () => {
    localStorage.removeItem("token")
    history.push("/login")
  }

  return (
    <div>
      <h1>Lista de Viagens</h1>
      <p>{list.map((trip) => {
        return(
          <div key={trip.id}>
            <p>{trip.name}</p>
          </div>
        )
      })}</p>
      <button onClick={goToCreateTripPage}>Criar Viagem</button>
      <br></br>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default ListTripsPage;