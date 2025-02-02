import classes from './Button.module.scss'
import { useNavigate } from 'react-router-dom';

import 'primeicons/primeicons.css';

interface ButtonProps {
    type: string;
}

const Button = (button: ButtonProps) => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleNextClick = () => {
        navigate('/profiles');
    };

    const handleForgotClick = () => {
        console.log('forgot');
    };

    return (
        <>
            {button.type == 'pass' && <i className={`pi pi-times ${classes.button_like_pass}`} />}
            {button.type == 'like' && <i className={`pi pi-heart-fill ${classes.button_like_pass}`} />}
            {button.type === 'login' &&
                <button
                    className={classes.button_login}
                    onClick={handleLoginClick}>
                    Connexion
                </button>}
            {button.type == 'next' && <button
                className={classes.button_next_forgot}
                onClick={handleNextClick}>
                Continuer
            </button>}
            {button.type == 'forgot' && <button
                className={classes.button_next_forgot}
                onClick={handleForgotClick}>
                Mot de passe oublié
            </button>}
            {button.type == 'google' && <button className={classes.button_google}>
                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google" />
                <span>Connexion avec Google</span>
            </button>}
        </>
    )
}

export default Button