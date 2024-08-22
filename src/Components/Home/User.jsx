import React from 'react'
import './user.scss';
import thread from '/thread.svg'
import git from '/git.svg'
import linkedin from '/linkedin.svg'
import user from '/user.png'
import separator from '/separatorWhite 3.png'
import threadwhite from '/threadwhite.svg'
import gitwhite from '/gitwhite.svg'
import linkinwhi from '/linkinwhi.svg'

const User = () => {
  return (
    <>
   <div id="hero">
        <div className="intro">
          <h6>Hi, I am</h6>
          <h2>Tomasz Gajda </h2>
          <p>Front-end Developer / UI Designer</p>
          <div className="socials">
            <img className="box" src= {thread} alt="mail" />
            <img className="box" src= {git} alt="git" />
            <img className="box" src= {linkedin} alt="linkedIn" />
          </div>
        </div>
        <div className="user">
          <img src= {user} alt="user Image" />
          <div className="overlay">
            this is not my photo,<br />
            but I dearly hope <br />to get one just like this
          </div>
        </div>
    </div>
      <div id ="hero2">
        <h6>my name is Thomas</h6>
        <h2>I’M A DEVELOPER</h2>
        <img src= {separator} alt="divider" />
        <div className="socials">
          <img src= {threadwhite} alt="mail" />
          <img src=  {gitwhite}alt="git" />
          <img src= {linkinwhi} alt="linkedIn" />
        </div>
      </div>
    </>
  )
}

export default User