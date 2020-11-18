import React from "react";
import styled from "styled-components";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const CriarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InputBox = styled.input`
  width: 30vw;
  margin-bottom: 15px;
`

function CreateTripPage() {

  useProtectedPage()

  return (
    <CriarContainer>
      <h1>Criar Viagem</h1>
      <InputBox placeholder="Nome da viagem"/>
      <InputBox placeholder="Planeta"/>
      <InputBox placeholder="Data" type="date"/>
      <InputBox placeholder="Descrição"/>
      <InputBox placeholder="Duração em dias" type="number" min="0"/>
      <button>Criar</button>
    </CriarContainer>
  );
}

export default CreateTripPage;