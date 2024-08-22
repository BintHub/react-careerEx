import React from 'react'
import './skills.scss';
import html from '/html.svg'
import css from '/css.svg'
import sass from '/sass.svg'
import js from '/js.svg'
import react from '/react.svg'
import bootstrap from '/bootsrap.svg'
import ghub from '/ghub.svg'
import figma from '/figma.svg'
import node from '/node.svg'
import mySql from '/mysql.svg'
import mongo from '/mongo.svg'
import ts from '/ts.svg'
import angie from '/angie.svg'
import b from '/b.svg'
import c from '/c.svg'
import cplus from '/cplus.svg'

const Skills = () => {
  return (
    <>
      <div id="skill">
        <div className="work">
          <h2>SKILLS</h2>
        </div>
        <h6>USING NOW :</h6>
        <div className="container">
          <div class="box1">
            <img src= {html}/>
            <h3>HTML5</h3>
          </div>
          <div className="box1">
            <img src= {css} />
            <h3>CSS3</h3>
          </div>
          <div className="box1">
            <img src= {sass} />
            <h3>SASS</h3>
          </div>
          <div className="box1">
            <img src= {js} />
            <h3>JAVASCRIPT</h3>
          </div>
          <div className="box1">
            <img src= {react} />
            <h3>REACT</h3>
          </div>
          <div className="box1">
            <img src= {bootstrap} />
            <h3>BOOTSTRAP</h3>
          </div>
          <div className="box1">
            <img src= {ghub} />
            <h3>GIT</h3>
          </div>
          <div className="box1">
            <img src= {figma} />
            <h3>FIGMA</h3>
          </div>
        </div>
        <h6>LEARNING :</h6>
        <div className="container">
          <div className="box1">
            <img src= {node} />
            <h3>NODEJS</h3>
          </div>
          <div className="box1">
            <img src= {mySql} />
            <h3>MySQL</h3>
          </div>
          <div className="box1">
            <img src= {mongo} />
            <h3>MONGODB</h3>
          </div>
          <div className="box1">
            <img src= {ts} />
            <h3>TYPESCRIPT</h3>
          </div>
        </div>
        <h6>OTHER SKILLS :</h6>
        <div className="container">
          <div className="box1">
            <img src= {angie} />
            <h3>ANGIELSKI C1/C2</h3>
          </div>
          <div className="box1">
            <img src= {b} />
            <h3>HISZPAŃSKI B1/B2</h3>
          </div>
          <div className="box1">
            <img src= {cplus} />
            <h3>C++</h3>
          </div>
          <div className="box1">
            <img src= {c} />
            <h3>C</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills