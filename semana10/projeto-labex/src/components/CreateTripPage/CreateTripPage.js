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
  display: flex;
  flex-direction: column;
`

const Select = styled.select`
  margin-bottom: 6px;
`

const Input = styled.input`
  margin-bottom: 6px;
`

function CreateTripPage() {

  // const {form, onChange} = useForm({
  //   name: '',
  //   planet: '',
  //   description: '',
  //   duration: ''
  // })

  useProtectedPage()

  return (
    <CriarContainer>
      <h1>Criar Viagem</h1>
      <Form>
        <Input
          required 
          placeholder="Nome da viagem"
          pattern={"[a-zA-ZsÀ-ú ]{5,}"}
        />
        <Select>
          <option>Escolha um planeta</option>
          <option>Mercúrio</option>
          <option>Vênus</option>
          <option>Terra</option>
          <option>Marte</option>
          <option>Júpiter</option>
          <option>Saturno</option>
          <option>Urano</option>
          <option>Netuno</option>
        </Select>
        <Input
          required
          placeholder="Data" 
          type="date"
        />
        <Input 
          required
          placeholder="Descrição"
          pattern={"[a-zA-ZsÀ-ú ]{30,}"}
        />
        <Input
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