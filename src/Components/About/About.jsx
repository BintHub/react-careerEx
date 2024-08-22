import React from 'react'
import Skills from './Skills';
import './about.scss';
import separator from '/separatorBlk7.png'
// import seperator from './seperatorBlk.png'

const About = () => {
 
  return (
    <>
     <div id="about">
      <div className="work">
        <h2>ABOUT ME</h2>
        <p className="info">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus.Sed ornare sit amet lorem <br />
          sed viverra. In vel urna quis liberoviverra facilisis ut ac est.
        </p>
        <p className="info2">
          My name is Tomasz Gajda, I'm a third year Applied Computer Science
          student at the AGH University of Science and Technology in Krakow. I
          have been learning Front-End technologies for a year and this time was
          just enough for me to make sure that this is my place in the industry.
          <br />
          <br />
          Membership in the science club developed my design skills, which
          quickly turned into a new hobby. I am fluent in English (spoken and
          written) and intermediate Spanish. Apart from designing and
          programming websites, my passion is all kinds of motorsport - from 
          rallies to the very king of motorsport - formula 1.
        </p>
        <button className="btn1">EXPLORE</button>
        {/* <img class="big" src={seperator} alt="serpatorblack" /> */}
        <img class="small" src={separator} alt="serpatorblack" />
      </div>
      {/* SERVICES */}
      <div className="services">
        <div className="first">
          <div className="boxa">
            <h2>DESIGN</h2>
            <p>
              I can design the website based on your needs and suggestions.
              <br />
              I can also create it from scratch by consulting with you during
              work.
            </p>
          </div>
          <div className="boxb">
            <h2>DEVELOPMENT</h2>
            <p>
              Based on a project created by me or another one, sent by you,
              <br />
              I can program the website to be fully functional and responsive.
            </p>
          </div>
        </div>
        <div className="second">
          <div className="boxc">
            <h2>MAINTAINANCE</h2>
            <p>
              In case of any problems or the need for changes, I can ,<br />
              introduce new functionalities and solutions.
            </p>
          </div>
        </div>
        <img src= {separator} alt="seperator" />
      </div>
      <Skills/>
    </div>
   </>
  )
}

export default About