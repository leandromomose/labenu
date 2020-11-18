import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import axios from "axios";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InputBox = styled.input`
  width: 15vw;
  margin-bottom: 15px;
`

function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      history.push("/trips/list")
    }
  }, [history])
  
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const login = () => {
    const body = {
      email: email,
      password: password
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-dumont/login", body)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      history.push("/trips/list")
    })
    .catch((error) => {
      alert("Usuário Inválido")
    })
  }

  // const goToTripDetailsPage = () => {
  //   history.push("/trips/details")
  // }

  return (
    <LoginContainer>
      <h1>Login</h1>
      <InputBox placeholder="E-mail" value={email} onChange={handleEmail}/>
      <InputBox placeholder="Senha" value={password} onChange={handlePassword}/>
      <button onClick={login}>Login</button>
      
      
      {/* <button onClick={goToTripDetailsPage}>Trip Details Page</button> */}
    </LoginContainer>
  );
}

export default LoginPage;