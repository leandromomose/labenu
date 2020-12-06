import { Button, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { CardStyled, VoteIcon } from '../../screens/PostPage/styled';
import arrowup from '../../assets/arrowup.png';
import arrowdown from '../../assets/arrowdown.png';

const CommentList = (props) => {

    const handleUpVote = () => {
        if(props.comment.userVoteDirection === 1) {
            props.handleCommentVote(props.comment.id, 0)  
        } else {
            props.handleCommentVote(props.comment.id, 1)
        }
    }

    const handleDownVote = () => {
        if(props.comment.userVoteDirection === -1) {
            props.handleCommentVote(props.comment.id, 0)
        } else {
            props.handleCommentVote(props.comment.id, -1)
        }
    }

    return (
        <CardStyled>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.comment.username}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.comment.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={handleUpVote} size="small" color="primary">
                    <VoteIcon src={arrowup} />
                </Button>
                <p>{props.comment.votesCount}</p>
                <Button onClick={handleDownVote} size="small" color="primary">
                    <VoteIcon src={arrowdown} />
                </Button>
            </CardActions>
        </CardStyled>
    )
}

export default CommentList