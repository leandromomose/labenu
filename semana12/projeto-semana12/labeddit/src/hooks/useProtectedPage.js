import { useHistory } from 'react-router-dom';
import { goToLogin } from '../routes/coordinator';
import { useEffect } from 'react';

export const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            goToLogin(history)
        }
    }, [history])
}