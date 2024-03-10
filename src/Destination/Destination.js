import React from 'react'
import './Destination.css'

const Destination = () => {
  return (
    <section className="destination ">
      <div className="d-container">
        <div className="dat flexCenter">TOP SELLING</div>
        <div className="ds-title flexCenter paddings">Top Destinations</div>


        <div className="dcards flex">
          <div className="dcard">
            <div >
              <img src="rome.png" alt="" className='d-img'/>
            </div>
            <div className="details ">
                <div className="name">Rome,Italy</div>
                <div className="price">$5,42K</div>
            </div>
            <div className="d-info">
            <img src="navigation.png" alt="" className='d-icon'/>
            <div className="days">10 Days Trip</div>
            </div>
          </div>

          <div className="dcard">
            <div >
              <img src="london.jpg" alt="" className='d-img'/>
            </div>
            <div className="details ">
                <div className="name">London,UK</div>
                <div className="price">$4.2K</div>
            </div>
            <div className="d-info">
            <img src="navigation.png" alt="" className='d-icon'/>
            <div className="days">12 Days Trip</div>
            </div>
          </div>

          <div className="dcard">
            <div >
              <img src="europe.png" alt="" className='d-img'/>
            </div>
            <div className="details ">
                <div className="name">Full Europe</div>
                <div className="price">$15K</div>
            </div>
            <div className="d-info">
            <img src="navigation.png" alt="" className='d-icon'/>
            <div className="days">28 Days Trip</div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Destination