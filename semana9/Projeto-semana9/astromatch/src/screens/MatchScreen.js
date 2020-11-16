import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'

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
  overflow: hidden;
  overflow-y: scroll;
`
const Header = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    padding: 10px;
    justify-content: space-around;
`

const CardImage = styled.img`
    width: 100px;
    height: 150px;
`

function MatchScreen(props) {

    const [profileMatch, setProfileMatch] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leandro/matches")
        .then((response) => {
            setProfileMatch(response.data.matches)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    const resetMatches = () => {
        Axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leandro/clear")
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.message)
        })
      }

  return (
    <MainContainer>
        <Header>
            <button onClick={props.goToStart}>Profile screen</button>
            <h1>Astromatch</h1>
        </Header>
        <div>
            {profileMatch.map((profile) => {
                return(
                    <div key={profile.id} goToStart={props.goToStart}>
                        <CardImage src={profile.photo}/>
                        <h2>{profile.name}</h2>
                    </div>
                )
            })}
        </div>
        <div>
            <button onClick={resetMatches}>Reset matches</button>
        </div>
    </MainContainer>
  );
}

export default MatchScreen;