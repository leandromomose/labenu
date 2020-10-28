import React from 'react'
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
    text-align: center;
`

class Cadastro extends React.Component {
    state = {
        nameValue: "",
        emailValue: ""
    }

    criarUsuario = () => {
        const body = {
            name: this.state.nameValue,
            email: this.state.emailValue
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "leandro-momose-dumont"
            }
        }).then(response => {
            this.setState({nameValue: ""})
            this.setState({emailValue: ""})
            alert("Usuário criado com sucesso!")
        }).catch(error => {
            alert("Não foi possível criar um novo usuário, tente novamente.")
            console.log(error.data)
        })    
    }

    onChangeNameValue = (event) => {
        this.setState({nameValue: event.target.value})
    }

    onChangeEmailValue = (event) => {
        this.setState({emailValue: event.target.value})
    }

    render(){
        return (
            <Container>
                <h2>Cadastro do Usuário</h2>
                <label>Nome:</label>
                <br></br>
                <input value={this.state.nameValue} onChange={this.onChangeNameValue}/>
                <br></br>
                <label>E-mail:</label>
                <br></br>
                <input value={this.state.emailValue} onChange={this.onChangeEmailValue}/>
                <br></br>
                <button onClick={this.criarUsuario}>Cadastrar</button>
            </Container>
        )
    } 
}

export default Cadastro;