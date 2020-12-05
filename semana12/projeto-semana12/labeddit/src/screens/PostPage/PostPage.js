import React from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/url';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useRequestData } from '../../hooks/useRequestData';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import arrowup from '../../assets/arrowup.png';
import arrowdown from '../../assets/arrowdown.png';
import { CardStyled, CommentContainer, FormContainer, VoteIcon } from './styled';
import { useForm } from '../../hooks/useForm';
import { TextField } from '@material-ui/core';
import axios from 'axios';
import CommentList from '../../components/CommentList/CommentList';

const PostPage = () => {
    useProtectedPage()
    const params = useParams()

    const { form, onChange, resetForm } = useForm({ text: "" })

    const handleInputChange = (event) => {
        const { value, name } = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        createComment(form)
        resetForm()
    }

    const data = useRequestData(`${BASE_URL}/posts/${params.id}`, {})

    const post = data.post

    const createComment = (body) => {
        const token = localStorage.getItem("token")

        axios.post(`${BASE_URL}/posts/${params.id}/comment`, body, {
            headers: {
                Authorization: token
            }
        }).then((response) => {
            console.log(response)
            alert("Comentário criado com sucesso!")
        }).catch(error => {
            alert('Erro ao criar comentário, tente novamente!')
            console.log(error.message)
        })
    }

    const handleCommentVote = (commentId, direction) => {
        const token = localStorage.getItem("token")

        const body = {
            direction: direction
        }

        axios.put(`${BASE_URL}/posts/${params.id}/comment/${commentId}/vote`, body, {
            headers: {
                Authorization: token
            }
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.message)
        })
    }

    return (
        <>
            {post && <CardStyled>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {post.username}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {post.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <VoteIcon src={arrowup} />
                    </Button>
                    <p>{post.votesCount}</p>
                    <Button size="small" color="primary">
                        <VoteIcon src={arrowdown} />
                    </Button>
                    <p>{post.commentsCount}</p>
                    <p>comentários</p>
                </CardActions>
            </CardStyled>}
            <CommentContainer>
                <FormContainer onSubmit={handleSubmission}>
                    <TextField
                        label="Escreva seu comentário"
                        type="text"
                        variant="outlined"
                        name="text"
                        value={form.text}
                        onChange={handleInputChange}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Comentar
                    </Button>
                </FormContainer>
            </CommentContainer>
            {post && post.comments.map((comment) => {
                return (
                    <CommentList comment={comment} handleCommentVote={handleCommentVote}/>
            )
            })}
        </>
    )
}

export default PostPage