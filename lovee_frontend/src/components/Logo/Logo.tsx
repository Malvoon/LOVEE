import classes from './Logo.module.scss'
import { FaHeart } from 'react-icons/fa';

const Logo = () => {
    return (
        <div className={classes.logo_container}>
            L<FaHeart className={classes.logo_heart_icon} />vee
        </div>
    )
}

export default Logo