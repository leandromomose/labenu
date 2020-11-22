import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import axios from 'axios';
import { useProtectedPage } from "../../hooks/useProtectedPage";
import Candidates from "./Candidates";
import TripCard from "./TripCard";
import { useParams } from "react-router-dom";

const Cards = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 30px;
`

function TripDetailsPage() {

  const [trip, setTrip] = useState()
  const params = useParams()

  const getTripDetail = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-dumont/trip/${params.id}`, {
      headers: {
        auth: localStorage.getItem('token')
      }
    }).then((response) => {
      setTrip(response.data.trip)
    })
  }

  useEffect(() => {
    getTripDetail()
  }, [])

  const decideCandidate = (approve, candidateId) => {
    const body = {
        approve: approve
    }
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-dumont/trips/${params.id}/candidates/${candidateId}/decide`, body, {
        headers: {
            auth: localStorage.getItem('token')
        }
    }).then(() => {
      getTripDetail()
    })
}

  useProtectedPage()

  return (
    <div>
      <h1>Detalhes da Viagem</h1>
      {trip ? <Cards>
        <TripCard info={trip}/>
        <Candidates candidates={trip.candidates} decideCandidate={decideCandidate}/>
      </Cards> : <div>Carregando...</div>}
    </div>
  );
}

export default TripDetailsPage;