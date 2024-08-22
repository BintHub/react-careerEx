import React from 'react'
import './projects.scss';
import spiralPic from '/img1.png'
import glowPic from '/img2.png'
import car from '/img3.png'
import glow from '/img4.png'

const Projects = () => {
  return (
   <>
   <div id="projects">
      <div className="theprojects">
        <img src= {spiralPic} alt="project" />
        <img src= {glowPic} alt="project" />
        <img  className="fit" src= {car}alt="project" />
        <div className="overlair">
          <p>coded, designed</p>
          <h3>eatsome.</h3>
          <p>Restaurant browsing in React.js (Using Yelp API)</p>
          <button className="btn2">DEMO</button>
          <button className="btn2">MORE</button>
        </div>
        <img src= {glow} alt="project" />
        <img src= {car}alt="project" />
        <img src= {spiralPic} alt="project" />
      </div>
    </div>
    <div className="port">
      <p>And many more to come!</p>
    </div>
   </>
  )
}

export default Projects