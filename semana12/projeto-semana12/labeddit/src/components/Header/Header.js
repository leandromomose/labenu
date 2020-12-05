import React, { useContext } from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { goToFeed, goToLogin } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import { ButtonsContainer } from './styled';
import LoggedContext from '../../context/LoggedContext';

const Header = () => {
    const history = useHistory()
    const loggedContext = useContext(LoggedContext)

    const handleLoginOrLogoutClick = () => {

        const token = localStorage.getItem("token")

        if (token) {
            localStorage.removeItem("token")
            loggedContext.setLogged(false)
        }

        goToLogin(history)
    }

    return (
        <AppBar>
            <Toolbar>
                <ButtonsContainer>
                    <Button color="inherit" onClick={() => goToFeed(history)}>Feed de notícias</Button>
                    <Button color="inherit" onClick={handleLoginOrLogoutClick}>
                        {loggedContext.logged ? "Logout" : "Login"}
                    </Button>
                </ButtonsContainer>
            </Toolbar>
        </AppBar>
    )
}

export default Header
