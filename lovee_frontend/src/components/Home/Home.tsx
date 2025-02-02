import classes from './Home.module.scss';
import { FaHeart } from 'react-icons/fa';
import Button from '../Button/Button';

const Home = () => {
  return (
    <div className={classes.home_container}>
      <h1>
        L<FaHeart className={classes.heart_icon} />vee
      </h1>
      <p>Rencontrez votre âme soeur en quelques clics</p>
      <Button type='login'/>
    </div>
  );
};

export default Home;