import axios from 'axios';
import {BASE_URL} from '../constants/url';

export const createPost = (body) => {
    const token = localStorage.getItem("token")

    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        console.log(response)
        alert("Post criado com sucesso!")
    }).catch(error => {
        alert('Erro ao criar post, tente novamente!')
        console.log(error.message)
    })
}