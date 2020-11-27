import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "../../hooks/useFrom";
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

  const {form, onChange} = useForm({
    name: '',
    planet: '',
    description: '',
    duration: ''
  })

  const history = useHistory()

  const handleInput = (event) => {
    const {value, name} = event.target
    onChange(value, name)
  }

  const onSubmitForm = (event) => {
    event.preventDefault()

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.duration
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-dumont/trips', body, {
      headers: {
        auth: localStorage.getItem('token')
      }
    }).then((response) => {
      alert('Viagem criada com sucesso!')
      history.push('/trips/list')
    }).catch((error) => {
      alert('Erro ao criar viagem, tente novamente.')
    })
  }

  useProtectedPage()

  return (
    <CriarContainer>
      <h1>Criar Viagem</h1>
      <Form onSubmit={onSubmitForm}>
        <Input
          required 
          placeholder="Nome da viagem"
          pattern={"[a-zA-ZsÀ-ú ]{5,}"}
          onChange={handleInput}
          name={'name'}
          value={form.name}
        />
        <Select 
          onChange={handleInput}
          name={'planet'}
          value={form.planet}
        >
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
          value={form.date}
          onChange={handleInput}
          name={'date'}
        />
        <Input 
          required
          placeholder="Descrição"
          pattern={"[a-zA-ZsÀ-ú ]{30,}"}
          onChange={handleInput}
          name={'description'}
          value={form.description}
        />
        <Input
          required
          placeholder="Duração em dias" 
          type="number" 
          min="50"
          onChange={handleInput}
          name={'duration'}
          value={form.duration}
        />
        <div>
          <button>Criar</button>
        </div>
      </Form>
    </CriarContainer>
  );
}

export default CreateTripPage;