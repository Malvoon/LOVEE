import classes from './Home.module.scss';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const Home = () => {
  return (
    <div className={classes.home_container}>
      <Logo/>
      <p>Rencontrez votre âme soeur en quelques clics</p>
      <Button type='login'/>
    </div>
  );
};

export default Home;