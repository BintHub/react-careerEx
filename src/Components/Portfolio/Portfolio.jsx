import React from 'react'
import Projects from './Projects';
import './portfolio.scss';

const Portfolio = () => {
  return (
 <>
   <div id ="portfolio">
      <div className="work">
        <h2>PORTFOLIO</h2>
      </div>
    </div>
  <div id="port">
      <div className="filterbar">
        <a href="#">ALL</a>
        <a href="#">CODED</a>
        <a href="#">DESIGNED</a>
      </div>
      <div className="filterbar2">
        <div className="bar">
          <a href="#">ALL</a>
          <a href="#">CODED</a>
        </div>
        <div className="bar2">
          <a href="#">DESIGNED</a>
        </div>
      </div>
    </div>
    <Projects/>
 </>
  )
}

export default Portfolio