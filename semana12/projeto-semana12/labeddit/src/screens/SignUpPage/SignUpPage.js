import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from '../../hooks/useForm';
import logoReddit from '../../assets/logo-reddit.png';
import logoLabenu from '../../assets/logo-labenu.png'
import { FormContainer, SignUpPageContainer, Logos, TittleContainer } from './styled';
import { useHistory } from 'react-router-dom';
import { signup } from '../../services/user'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage';

const SignUpPage = () => {
    useUnprotectedPage()
    const history = useHistory()
    const { form, onChange } = useForm({ email: "", password: "", username: "" })

    const handleInputChange = (event) => {
        const { value, name } = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        signup(form, history)
    }

    return (
        <div>
            <TittleContainer>
                <Logos src={logoLabenu} />
                <h1>labeddit</h1>
                <Logos src={logoReddit} />
            </TittleContainer>
            <SignUpPageContainer>
                <FormContainer onSubmit={handleSubmission}>
                    <TextField
                        label="Nome de usuário"
                        required
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="E-mail"
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Senha"
                        required
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Cadastrar
                    </Button>
                </FormContainer>
            </SignUpPageContainer>
        </div >
    )
}

export default SignUpPage