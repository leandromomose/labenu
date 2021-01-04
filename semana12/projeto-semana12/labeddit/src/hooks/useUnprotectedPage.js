import { useHistory } from 'react-router-dom';
import { goToFeed } from '../routes/coordinator';
import { useEffect } from 'react';

export const useUnprotectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token) {
            goToFeed(history)
        }
    }, [history])
}