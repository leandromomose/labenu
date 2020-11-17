import React from "react";
import {useHistory} from "react-router-dom"; 

function LoginPage() {

  const history = useHistory()

  const goToListTripsPage = () => {
    history.push("/trips/list")
  }

  const goToCreateTripPage = () => {
    history.push("/trips/create")
  }

  const goToTripDetailsPage = () => {
    history.push("/trips/details")
  }

  return (
    <div>
      <p>LoginPage</p>
      <button onClick={goToListTripsPage}>List Trips Page</button>
      <button onClick={goToCreateTripPage}>Create Trip Page</button>
      <button onClick={goToTripDetailsPage}>Trip Details Page</button>
    </div>
  );
}

export default LoginPage;