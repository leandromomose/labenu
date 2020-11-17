import React from "react";
import {useHistory} from "react-router-dom";  

function HomePage() {

  const history = useHistory()

  const goToApplicationForm = () => {
    history.push("/application-form")
  }

  const goToLoginPage = () => {
    history.push("/login")
  }

  return (
    <div>
      <p>HomePage</p>
      <button onClick={goToApplicationForm}>Application Form Page</button>
      <button onClick={goToLoginPage}>Login Page</button>
    </div>
  );
}

export default HomePage;