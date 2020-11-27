import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import axios from "axios";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useTripsList } from "../../hooks/useTripsList";

const ListaViagem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function ListTripsPage() {

  const trips = useTripsList()
  const history = useHistory()
  useProtectedPage()

  const goToCreateTripPage = () => {
    history.push("/trips/create")
  }

  const logout = () => {
    localStorage.removeItem("token")
    history.push("/login")
  }

  const goToTripDetailsPage = () => {
    history.push(`/trips/details/${trips.id}`)
  }

  return (
    <div>
      <h1>Lista de Viagens</h1>
      <p>{trips.map((trip) => {
        return(
          <ListaViagem key={trip.id}>
            <h4>{trip.name}</h4>
            <button onClick={goToTripDetailsPage}>Ver detalhes</button>
          </ListaViagem>
        )
      })}</p>
      <button onClick={goToCreateTripPage}>Criar Viagem</button>
      <br></br>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default ListTripsPage;