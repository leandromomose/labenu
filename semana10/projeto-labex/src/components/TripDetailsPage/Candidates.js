import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    border: 2px solid black;
    width: 30vw;
`

const ListaCandidatos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Candidates = (props) => {


    const approveCandidate = () => {
        props.decideCandidate(true, props.candidate.id)
    }

    const rejectCandidate = () => {
        props.decideCandidate(false, props.candidate.id)
    }

    return(
        <CardContainer>
            <h2>Lista de Candidatos</h2>
            {props.candidates.map((candidate) => {
                    return (
                        <ListaCandidatos>
                            <h4>{candidate.name}</h4>
                            <button onClick={approveCandidate}>Aprovar</button>
                            <button onClick={rejectCandidate}>Desaprovar</button>
                        </ListaCandidatos>
                    )
                })}
        </CardContainer>
    ) 
}

export default Candidates