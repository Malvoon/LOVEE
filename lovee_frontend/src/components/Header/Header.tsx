import React from 'react'
import classes from './Header.module.scss'

const Header = () => {
  return (
    <header>
      <div className={classes.title}>Lovee</div>
      <nav>Découvrir</nav>
      <nav>Messages</nav>
      <nav>Profil</nav>
    </header>
  )
}

export default Header