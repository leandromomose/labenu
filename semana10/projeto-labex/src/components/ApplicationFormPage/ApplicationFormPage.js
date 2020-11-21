import React from "react";
import styled from "styled-components";
import { useForm } from "../../hooks/useFrom";
import { useTripsList } from "../../hooks/useTripsList";
import axios from 'axios';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Form = styled.form`
  width: 20vw;
  margin-bottom: 15px;
`

const Select = styled.select`
  display: flex;
  flex-direction: column;
  width: 20vw;
  margin-bottom: 6px;
`

const Input = styled.input`
  margin-bottom: 6px;
`

function ApplicationFormPage() {

  const trips = useTripsList()
  const {form, onChange} = useForm({
    name: '',
    age: 0,
    applicationText: '',
    profession: '',
    country: '',
    trip: null
  })

  const handleInput = (event) => {
    const {value, name} = event.target
    onChange(value, name)
  }

  const submitApplicationForm = (event) => {
    event.preventDefault()
    
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-dumont/trips/${form.trip.id}/apply`, body)
    .then((response) => {
      alert("Candidatura realizada com sucesso!")
    })
    .catch((error) => {
      alert("Erro ao tentar enviar candidatura, tente novamente!")
    })
  }

  return (
    <MainContainer>
      <h1>Candidatar à uma viagem:</h1>
      <Form onSubmit={submitApplicationForm}>
        <Input 
          required
          placeholder="Nome do candidato"
          pattern={"[a-zA-ZsÀ-ú ]{3,}"}
          onChange={handleInput}
          name={"name"}
          value={form.name}
        />
        <Input 
          required
          placeholder="Idade" 
          type="number" 
          min="18"
          onChange={handleInput}
          value={form.age}
          name={'age'}
        />
        <Input 
          required
          placeholder="Explique o porque se considera um bom candidato."
          pattern={"^.{30,}"}
          onChange={handleInput}
          value={form.applicationText}
          name={'applicationText'}
        />
        <Input 
          required
          placeholder="Profissão"
          pattern={"^.{10,}"}
          onChange={handleInput}
          value={form.profession}
          name={'profession'}
        />
        <Select
          onChange={handleInput}
          value={form.country}
          name={'country'}
        >
          <option>País</option>
          <option value={'Brasil'}>Brasil</option>
          <option value={'Japão'}>Japão</option>
          <option value={'Suíça'}>Suíça</option>
          <option value={'Australia'}>Australia</option>
        </Select>
        <Select
          onChange={handleInput}
          value={form.trip}
          name={'trip'}
        >
          {trips.map((trip) => {
            return <option value={trip}>{trip.name}</option>
          })}
        </Select>
        <button type={'submit'}>Enviar candidatura</button>
      </Form>
    </MainContainer>
  );
}

export default ApplicationFormPage;

