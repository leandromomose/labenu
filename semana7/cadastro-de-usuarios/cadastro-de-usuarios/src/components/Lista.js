import React from 'react'
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
    text-align: center;
`
const BotaoDeletar = styled.span`
    color: red;
    padding-left: 10px;
`

class Lista extends React.Component {
    state = {
        pessoas: []
    }
    
    componentDidMount = () => {
        this.pegarUsuarios()
    }
    
    pegarUsuarios = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "leandro-momose-dumont"
            }
        }).then(response => {
            console.log(response.data)
            this.setState({pessoas: response.data})
        }).catch(error => {
            console.log(error.message)
        })
    }

    removePessoa = (userId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
            headers: {
                Authorization: "leandro-momose-dumont"
            }
        }).then((response) => {
            alert("Usuário deletado com sucesso!")
            this.pegarUsuarios()
        }).catch((error) => {
            alert("Erro ao tentar deletar o usuário, tente novamente.")
            console.log(error.message)
        })
    }

    render(){
        const usuariosCadastrados = this.state.pessoas.map(pessoa => {
            return <p key={pessoa.id}>{pessoa.name} <BotaoDeletar onClick ={() => this.removePessoa(pessoa.id)}>x</BotaoDeletar></p>
        
        })

        return (
        <Container>
            {usuariosCadastrados}
        </Container>
        )
    } 
}

export default Lista;