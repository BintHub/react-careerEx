import React from 'react'
import './footer.scss';
import arrow from '/arrow.svg'
import fb from '/fb.svg'
import linkedin from '/link.svg'
import insta from '/insta.svg'
import vector from '/Vector.svg'

const Footer = () => {
  return (
    <>
     <div className="footer">
      <div className="foot">
        <img src= {arrow} alt="arrow" />
        <div className="go">
          <a href="#top">BACK TO TOP</a>
        </div>
        <div className="internet">
          <img src= {fb} alt="facebook" />
          <img src= {linkedin} alt="link" />
          <img src= {insta} alt="instagram" />
          <img src= {vector} alt="Vector" />
        </div>
        <p>@2020 Tomasz Gajda All Rights Reserved.</p>
      </div>
    </div>
    </>
  )
}

export default Footer