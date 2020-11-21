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
    return(
        <CardContainer>
            <h2>Lista de Candidatos</h2>
            {props.candidates.map((candidate) => {
                    return (
                        <ListaCandidatos>
                            <h4>{candidate.name}</h4>
                            <button>Aprovar</button>
                            <button>Desaprovar</button>
                        </ListaCandidatos>
                    )
                })}
        </CardContainer>
    ) 
}

export default Candidates