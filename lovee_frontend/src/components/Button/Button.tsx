import classes from './Button.module.scss'
import 'primeicons/primeicons.css';

interface ButtonProps {
    type: string;
}

const Button = (button: ButtonProps) => {
    return (
        <>
            {button.type == 'pass' && <i className={`pi pi-times ${classes.button_like_pass}`} />}
            {button.type == 'like' && <i className={`pi pi-heart-fill ${classes.button_like_pass}`} />}
            {button.type == 'login' && <button className={classes.button_login}>Connexion</button>}
        </>
    )
}

export default Button