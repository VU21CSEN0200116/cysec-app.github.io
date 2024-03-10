import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
    <section className="footer">
    <div className="footer-section">
        <h3 className='f-name'>TravelPro</h3>
        <p className='headdet'>Book your trip in minute,get full <br /> Control for much longer.</p>
    </div>
    <div className="footer-section">
        <h3 className='headings'>Company</h3>
        <ul className='list'>
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
        </ul>
    </div>
    <div className="footer-section">
        <h3 className='headings'>Contact</h3>
        <ul className='list'>
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affliates</li>
        </ul>
    </div>
    <div className="footer-section">
        <h3 className='headings'>More</h3>
        <ul className='list'>
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low Fare Tips</li>
        </ul>
    </div>
    <div className="footer-section">
        <div className="s-icons">
           <img src="facebook.png" alt="Facebook"/>
           <img src="twitter.png" alt="Twitter"/>
           <img src="instagram (2).png" alt="Instagram"/>
        
        </div>
        <div className="text">Discover our App</div>

        <div className="store">
            <img src="playstore.png" alt="" />
            <img src="appstore.png" alt="" />
        </div>
    </div>
</section>

<div className="last">All rights reserved@travelpro.com</div>

</div>
  )
}

export default Footer