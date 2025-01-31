import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'

const Home = () => {
  return (
    <>
      <h1>Welcome to Lovee</h1>
      <p>Find your true love</p>
      <ProfileCard profile={{ name: 'John Doe', bio: 'Software Engineer', photo: 'https://randomuser.me/api/portraits' }} />
    </>
  )
}

export default Home