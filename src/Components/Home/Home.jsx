import React from 'react'
import User from './User';
import './home.scss';
import homeLogo from '/logo.svg'
import homLogo from '/logowhite.svg'
import menuLogo from '/menu.svg'

const Home = () => {
  return (
    <>
  <div id='header'>
   <div className='navBar'> 
   <ol>
      <li className='logo'>
         <img className='black' src= {homeLogo}  alt="logo" />
         <img className='white' src= {homLogo}  alt='white' />
      </li>
      <li className="links">
         <a href="#about">About me</a>
         <a href="#skill">Skills</a>
         <a href="#portfolio">Portfolio</a>
         <a className ='contact' href="#cont">CONTACT ME</a>
      </li>
      <li className="menu dropdown">
            <img className="dropbtn" src={menuLogo} alt="menu" />
            <div className="dropdown-content">
              <a href="#">About me</a>
              <a href="#skill">Skills</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#cont">CONTACT ME</a>
            </div>
        </li>
    </ol>
  </div>
  <User/>
  </div>
  
   </>
  )
}

export default Home