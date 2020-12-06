import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { BASE_URL } from '../../constants/url';
import { useRequestData } from '../../hooks/useRequestData';
import PostCard from '../../components/PostCard/PostCard';
import { Button, TextField } from '@material-ui/core';
import { FormContainer, PostContainer } from './styled';
import { useForm } from '../../hooks/useForm';
import { createPost } from '../../services/post';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FeedPage = () => {
    useProtectedPage()
    const params = useParams()

    const { form, onChange, resetForm } = useForm({ text: "", title: "" })

    const handleInputChange = (event) => {
        const { value, name } = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        createPost(form)
        resetForm()
    }

    const data = useRequestData(`${BASE_URL}/posts`, [])

    const posts = data.posts

    const handleVotePost = (postId, direction) => {
        const token = localStorage.getItem("token")

        const body ={
            direction: direction
        }

        axios.post(`${BASE_URL}/posts/${params.id}/vote`, body, {
            headers: {
                Authorization: token
            }
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <div>
            <PostContainer>
                <FormContainer onSubmit={handleSubmission}>
                    <TextField
                        label="Título"
                        type="text"
                        variant="outlined"
                        name="title"
                        value={form.title}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Escreva seu post"
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
                        Postar
                    </Button>
                </FormContainer>
            </PostContainer>
            {posts && posts.map(post => {
                return <PostCard
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    text={post.text}
                    votesCount={post.votesCount}
                    commentsCount={post.commentsCount}
                    handleVotePost={handleVotePost}
                />
            })}
        </div>
    )
}

export default FeedPage