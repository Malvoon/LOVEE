import React from 'react';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  photo: string;
  name: string;
  bio: string;
}

const ProfileCard: React.FC<{ profile: ProfileCardProps }> = ({ profile }) => {
  return (
    <div className={classes.profileCard_container}>
      <img src={profile.photo} alt={profile.name} />
      <h2 className={classes.profileCard_name}>{profile.name}</h2>
      <p>{profile.bio}</p>
      <div className={classes.profileCard_buttons}>
        <button>Like</button>
        <button>Dislike</button>
      </div>
    </div>
  );
};

export default ProfileCard;