import classes from './Button.module.scss'
import 'primeicons/primeicons.css';

interface ButtonProps {
    type: string;
}

const Button = (button: ButtonProps) => {
    return (
        <>
            {button.type == 'pass' && <i className={`pi pi-times ${classes.button}`} />}
            {button.type == 'like' && <i className={`pi pi-heart-fill ${classes.button}`} />}
        </>
    )
}

export default Button