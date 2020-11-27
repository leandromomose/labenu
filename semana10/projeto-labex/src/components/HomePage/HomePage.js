import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const Buttons = styled.button`
  padding: 16px;
  margin: 16px;
`

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
      <h1>LabeX</h1>
      <h3>Encontre as melhores viagens espaciais!</h3>
      <Buttons onClick={goToApplicationForm}>Quero me candidatar</Buttons>
      <Buttons onClick={goToLoginPage}>Área do administrador</Buttons>
    </div>
  );
}

export default HomePage;