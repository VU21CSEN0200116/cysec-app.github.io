import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero ">
        <div className="hero-container">
        <div className="hr-left ">

            <div className="h1st">
                BEST DESTINATIONS AROUND THE WORLD
            </div>

            <div className="h2nd ">
                Travel,enjoy <br /> and live a new <br />and full life
            </div>

            <div className="h3rd">
            Built Wicket longer admire do barton vanity itself do in it. <br /> Preferred to sportsmen it engrossed listening. Park gate <br /> sell they west hard for the.
            </div>

            <div className="h4th">
                <button className='hero-button'>Find out more</button>
            </div>

        </div>
        <div className="hr-right">
            <img src="traveller.png" alt="" />
        </div>
        </div>
    </section>
  )
}

export default Hero