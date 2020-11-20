import React from "react";
import styled from "styled-components";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const CriarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Form = styled.form`
  width: 30vw;
  margin-bottom: 15px;
`

function CreateTripPage() {

  useProtectedPage()

  return (
    <CriarContainer>
      <h1>Criar Viagem</h1>
      <Form>
        <input
          required 
          placeholder="Nome da viagem"
          pattern={"[a-zA-ZsÀ-ú ]{5,}"}
        />
        <select>
          <option>Escolha um planeta</option>
          <option>Mercúrio</option>
          <option>Vênus</option>
          <option>Terra</option>
          <option>Marte</option>
          <option>Júpiter</option>
          <option>Saturno</option>
          <option>Urano</option>
          <option>Netuno</option>
        </select>
        <input
          required
          placeholder="Data" 
          type="date"
        />
        <input 
          required
          placeholder="Descrição"
          pattern={"[a-zA-ZsÀ-ú ]{30,}"}
        />
        <input
          required
          placeholder="Duração em dias" 
          type="number" 
          min="50"
        />
        <div>
          <button>Criar</button>
        </div>
      </Form>
    </CriarContainer>
  );
}

export default CreateTripPage;