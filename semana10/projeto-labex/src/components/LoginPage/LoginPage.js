import React, { useEffect } from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import axios from "axios";
import { useForm } from "../../hooks/useFrom";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Form = styled.form`
  width: 20vw;
  margin-bottom: 15px;
`

function LoginPage() {

  const {form, onChange} = useForm({email: "", password: ""})
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      history.push("/trips/list")
    }
  }, [history])

  const handleInput = (event) => {
    const {value, name} = event.target
    onChange(value, name)
  }

  const login = (event) => {

    event.preventDefault()

    const body = {
      email: form.email,
      password: form.password
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
      <Form onSubmit={login}>
        <input 
          required
          type={"email"}
          placeholder="E-mail" 
          value={form.email} 
          onChange={handleInput}
          name={"email"}
        />
        <input 
          required
          type={"password"}
          placeholder="Senha" 
          value={form.password} 
          onChange={handleInput}
          name={"password"}
        />
        <button>Login</button>
      </Form>
      
      {/* <button onClick={goToTripDetailsPage}>Trip Details Page</button> */}
    </LoginContainer>
  );
}

export default LoginPage;