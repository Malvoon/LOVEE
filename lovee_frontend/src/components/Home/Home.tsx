import React from 'react';
import classes from './Home.module.scss';
import ProfileCard from '../ProfileCard/ProfileCard';

const Home = () => {
  const profiles = [
    { id: 1, name: 'JUL', bio: 'Rappeur en CDI', photo: 'https://yt3.googleusercontent.com/6EjBK6DaCjJ1i6xp-_IteWURv_pATFiAbb-Ai3k1-6Heh2OjkmFe9Vs_DDjxZ83VnLBcyotAmw=s900-c-k-c0x00ffffff-no-rj' },
    { id: 2, name: 'Jisoo', bio: 'Chanteuse et danseuse du groupe K-pop BLACKPINK', photo: 'https://cdn-images.dzcdn.net/images/artist/bb48f4fdc1bf6af8b7b8cab275782dc7/1900x1900-000000-80-0-0.jpg' },
    { id: 3, name: 'MSG', bio: 'Etudiant en école d\'ingénierie en informatique', photo: 'https://media.licdn.com/dms/image/v2/D4E03AQEZ61Puxja3oQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707905918430?e=2147483647&v=beta&t=myBGIpeyYltL7i-6B25oe_4QFxdBeohJw79hi695olY' },
    { id: 4, name: 'Mi Yeon', bio: 'Chanteuse et danseuse du groupe K-pop G-IDLE', photo: 'https://www.nautiljon.com/images/people/01/80/mi_yeon_g_i-dle_90908.webp?1719342536' },

  ];

  return (
    <div className={classes.home}>
      <h1>Profils</h1>
      <div className={classes.profiles}>
        {profiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default Home;