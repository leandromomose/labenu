import React from 'react'
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
    text-align: center;
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
            this.setState({pessoas: response.data})
            this.pegarUsuarios()
        }).catch(error => {
            console.log(error.message)
        })
    }

    removePessoa = (id) => {
        axios.delete("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id", {
            headers: {
                Authotization: "leandro-momose-dumont"
            },
            params: {
                id: id
            }
        }).then(response => {
            alert("Usuário deletado com sucesso!")
        }).catch(error => {
            alert("Erro ao tentar deletar o usuário, tente novamente.")
            console.log(error.message)
        })
    }

    render(){
        const usuariosCadastrados = this.state.pessoas.map(pessoa => {
            return <p key={pessoa.id}>{pessoa.name}</p>
        })

        return (
        <Container>
            {usuariosCadastrados}
            <button onClick = {this.removePessoa}>X</button>
        </Container>
        )
    } 
}

export default Lista;