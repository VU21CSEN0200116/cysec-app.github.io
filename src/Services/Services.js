import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <div className="s-container">
        <div className="cat flexCenter">CATEGORY</div>
        <div className="s-title flexCenter paddings">We Offer Best Services</div>
        <div className="cards flex">
          <div className="card">
            <div >
              <img src="weather.png" alt="" className='c-img'/>
            </div>
            <div className="c-title">Caculated Weather</div>
            <div className="c-info">Built Wicket longer admire do barton vanity itself do in it.</div>
          </div>

          <div className="card">
            <div >
              <img src="flight.png" alt="" className='c-img'/>
            </div>
            <div className="c-title">Best Flights</div>
            <div className="c-info">Engrossed listening. Park gate sell they west hard for the.</div>
          </div>

          <div className="card">
            <div >
              <img src="event.png" alt="" className='c-img'/>
            </div>
            <div className="c-title">Local Events</div>
            <div className="c-info">Barton vanity itself do in it. Preferd to men it engrossed listening.</div>
          </div>

          <div className="card">
            <div >
              <img src="customization.png" alt=""  className='c-img'/>
            </div>
            <div className="c-title">Customization</div>
            <div className="c-info">We deliver outsourced aviation services for military customers</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
