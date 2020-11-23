import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios'

const MainContainer = styled.div`
  width: 400px;
  height: 650px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px #0000000F;
`

const CardImage = styled.img`
    width: 400px;
    height: 350px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    padding: 10px;
    justify-content: space-around;
`

function StartScreen(props) {

    const [profile, setProfile] = useState([])

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leandro/person")
        .then((response) => {
            setProfile(response.data.profile)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    const match = (option) => {
        const body = {
            id: profile.id,
            choice: option
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leandro/choose-person", body)
        .then((response) => {
            getProfileToChoose()
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
            <h1>Astromatch</h1>
            <button onClick={props.goToMatch}>Match screen</button>
        </Header>
        <div>
            <CardImage src={profile.photo}/>
            <h2>{profile.name}, {profile.age}</h2>
            <p>{profile.bio}</p>
            <button onClick={() => match(false)}>X</button>
            <button onClick={() => match(true)}>Like</button>
        </div>
        <div>
            <button onClick={resetMatches}>Reset matches</button>
        </div>
    </MainContainer>
  );
}

export default StartScreen;