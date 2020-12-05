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
import { CardStyled, VoteIcon } from './styled';

const PostPage = () => {
    useProtectedPage()
    const params = useParams()
    const data = useRequestData(`${BASE_URL}/posts/${params.id}`, {})

    const post = data.post

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
        </>
    )
}

export default PostPage