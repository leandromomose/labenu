import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InputBox = styled.input`
  width: 30vw;
  margin-bottom: 15px;
`

function ApplicationFormPage() {
  return (
    <FormContainer>
      <h1>Candidatar à uma viagem:</h1>
      <InputBox placeholder="Nome do candidato"/>
      <InputBox placeholder="Idade" type="number" min="18"/>
      <InputBox placeholder="Explique o porque se considera um bom candidato."/>
      <InputBox placeholder="Profissão"/>
      <label>
        País:
        <select>
          <option> </option>
          <option>Brasil</option>
          <option>Japão</option>
          <option>Suíça</option>
          <option>Australia</option>
        </select>
      </label>
      <br></br>
      <label>
        Viagens:
        <select>
          <option> </option>
          <option>Marte</option>
          <option>Júpter</option>
          <option>Plutão</option>
          <option>Saturno</option>
        </select>
      </label>
      <br></br>
      <button>Enviar candidatura</button>
    </FormContainer>
  );
}

export default ApplicationFormPage;