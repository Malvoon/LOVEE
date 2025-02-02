import classes from './Login.module.scss';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const Login = () => {
    return (
        <div className={classes.login_container}>
            <div className={classes.login_header}>
                <Logo />
            </div>
            <div className={classes.login_body}>
                <h1>Connexion</h1>
                <Button type='google' />
                <p>ou</p>
                <div className={classes.login_email}>
                    <input type="email" placeholder="Adresse e-mail" />
                    <input type="password" placeholder="Mot de passe" />
                </div>
                <div className={classes.login_action_buttons}>
                    <Button type='next' />
                    <Button type='forgot' />
                </div>
                <div className={classes.login_signup}>
                    <p>Vous n'avez pas de compte ? <a href=''>Inscrivez-vous</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login