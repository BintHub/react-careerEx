import React from 'react'
import './contact.scss';
import seperator  from '/separatorBlk7.png'

const Contact = () => {
  return (
    <>
    <div id="cont">
      <div className="work">
        <h2>CONTACT</h2>
        <p>
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus.Sed ornare sit amet lorem <br />
          sed viverra. In vel urna quis liberoviverra facilisis ut ac est.
        </p>
        <img id="sep" src={seperator} alt="seperator" />
        <div className="form">
          <input type="text" name="name" placeholder="ENTER YOUR NAME" />
          <input type="text" name="email" placeholder="ENTER YOUR EMAIL" />
          <input type="tel" name="phoneno" placeholder="PHONE NUMBER" />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="6"
            placeholder="YOUR MESSAGE"
          ></textarea>
        </div>
        <button className="btn1">SUBMIT</button>
      </div>
    </div>
    </>
  )
}

export default Contact