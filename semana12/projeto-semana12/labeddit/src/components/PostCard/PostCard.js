import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import arrowup from '../../assets/arrowup.png';
import arrowdown from '../../assets/arrowdown.png';
import { CardStyled, VoteIcon } from './styled';
import { goToPost } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';

const PostCard = (props) => {
    const history = useHistory()

    const handleUpVote = () => {
      props.handleVotePost(props.id, 1)
    }

    const handleDownVote = () => {
      props.handleVotePost(props.post.id, -1)
    }

    return (
      <CardStyled onClick={() => goToPost(history, props.id)}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.username}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handleUpVote} size="small" color="primary">
            <VoteIcon src={arrowup} />
          </Button>
          <p>{props.votesCount}</p>
          <Button onClick={handleDownVote} size="small" color="primary">
            <VoteIcon src={arrowdown} />
          </Button>
          <p>{props.commentsCount}</p>
          <Button onClick={() => goToPost(history, props.id)}>comentários</Button>
        </CardActions>
      </CardStyled>
    );
}
export default PostCard