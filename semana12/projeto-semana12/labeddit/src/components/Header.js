import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { goToFeed, goToLogin } from '../routes/coordinator';
import { useHistory } from 'react-router-dom';
import { ButtonsContainer } from './styled';

const Header = () => {
    const history = useHistory()
    return (
        <AppBar>
            <Toolbar>
                <ButtonsContainer>
                    <Button color="inherit" onClick={() => goToFeed(history)}>Feed de notícias</Button>
                    <Button color="inherit" onClick={() => goToLogin(history)}>Logout</Button>
                </ButtonsContainer>
            </Toolbar>
        </AppBar>
    )
}

export default Header
