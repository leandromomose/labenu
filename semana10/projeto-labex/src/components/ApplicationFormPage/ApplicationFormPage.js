import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Form = styled.form`
  width: 30vw;
  margin-bottom: 15px;
`

const Select = styled.select`
  display: flex;
  flex-direction: column;
  width: 30vw;
  margin-bottom: 6px;
`

const Input = styled.input`
  margin-bottom: 6px;
`

function ApplicationFormPage() {

  return (
    <MainContainer>
      <h1>Candidatar à uma viagem:</h1>
      <Form>
        <Input 
          required
          placeholder="Nome do candidato"
          pattern={"[a-zA-ZsÀ-ú ]{3,}"}
        />
        <Input 
          required
          placeholder="Idade" 
          type="number" 
          min="18"
        />
        <Input 
          required
          placeholder="Explique o porque se considera um bom candidato."
          pattern={"^.{30,}"}
        />
        <Input 
          required
          placeholder="Profissão"
          pattern={"^.{10,}"}
        />
        <Select>
          <option>País</option>
          <option>Brasil</option>
          <option>Japão</option>
          <option>Suíça</option>
          <option>Australia</option>
        </Select>
        <Select>
          <option>Viagens</option>
          <option>Nome da viagem-Planeta</option>
          <option>Nome da viagem-Planeta</option>
          <option>Nome da viagem-Planeta</option>
          <option>Nome da viagem-Planeta</option>
        </Select>
        <button>Enviar candidatura</button>
      </Form>
    </MainContainer>
  );
}

export default ApplicationFormPage;

