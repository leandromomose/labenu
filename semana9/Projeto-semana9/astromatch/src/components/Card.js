import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 400px;
  height: 600px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px #0000000F;
`
function Card() {
    return(
        <MainContainer>
            <h3>Astromatch</h3>
            <hr></hr>
        </MainContainer>
    )
}

export default Card