import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    border: 2px solid black;
    width: 30vw;
`

const TripCard = (props) => {
    const {name, planet, description, date, durationInDays} = props.info

    return(
        <CardContainer>
            <h2>Informações da Viagem</h2>
            <h4>Nome da viagem: {name}</h4>
            <h4>Planeta: {planet}</h4>
            <h4>Data: {date}</h4>
            <h4>Descrição: {description}</h4>
            <h4>Duração em dias: {durationInDays}</h4>
        </CardContainer>
    
    ) 
}

export default TripCard