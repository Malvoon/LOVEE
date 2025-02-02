import classes from './Header.module.scss';

interface HeaderProps {
  isHomePage?: boolean;
}

const Header = (header: HeaderProps) => {
  return (
    <header className={classes.header_container}>
      <h1>Lovee</h1>
      {!header.isHomePage && (
        <>
          <nav>
            <a href="accueil">Accueil</a>
            <a href="messages">Messages</a>
            <a href="profil">Profil</a>
          </nav>
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQEZ61Puxja3oQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707905918430?e=2147483647&v=beta&t=myBGIpeyYltL7i-6B25oe_4QFxdBeohJw79hi695olY" alt="profil" />
        </>
      )}
    </header>
  );
};

export default Header;