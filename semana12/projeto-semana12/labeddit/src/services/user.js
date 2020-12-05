import axios from 'axios';
import {BASE_URL} from '../constants/url';
import { goToFeed } from '../routes/coordinator'

export const login = (body, history, setLogged) => {
    axios.post(`${BASE_URL}/login`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        setLogged(true)
        goToFeed(history)
    }).catch(error => {
        alert('E-mail ou Senha inválidos, tente novamente!')
        console.log(error.message)
    })
}

export const signup = (body, history, setLogged) => {
    axios.post(`${BASE_URL}/signup`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        setLogged(true)
        goToFeed(history)
    }).catch(error => {
        alert('E-mail já cadastrado, faça o Login ou utilize um E-mail diferente.')
        console.log(error.message)
    })
}