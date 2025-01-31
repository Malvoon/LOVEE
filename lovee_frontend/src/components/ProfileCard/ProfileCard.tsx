import React from 'react';

interface ProfileCardProps {
    photo: string;
    name: string;
    bio: string;
}

const ProfileCard: React.FC<{ profile: ProfileCardProps }> = ({ profile }) => {
  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>
      <button>Like</button>
      <button>Dislike</button>
    </div>
  );
};

export default ProfileCard;