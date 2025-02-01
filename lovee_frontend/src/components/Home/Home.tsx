import React from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';

const Home = () => {
  const profiles = [
    { id: 1, name: 'JUL', bio: 'Rappeur en CDI', photo: 'https://yt3.googleusercontent.com/6EjBK6DaCjJ1i6xp-_IteWURv_pATFiAbb-Ai3k1-6Heh2OjkmFe9Vs_DDjxZ83VnLBcyotAmw=s900-c-k-c0x00ffffff-no-rj' },
    { id: 2, name: 'Jisoo', bio: 'Chanteuse et danseuse du groupe K-pop BLACKPINK', photo: 'https://cdn-images.dzcdn.net/images/artist/bb48f4fdc1bf6af8b7b8cab275782dc7/1900x1900-000000-80-0-0.jpg' },
  ];

  return (
    <div>
      <h1>Profils à découvrir</h1>
      {profiles.map(profile => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default Home;