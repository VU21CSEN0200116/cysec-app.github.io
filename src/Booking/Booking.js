import React from 'react'
import './Booking.css'
const Booking = () => {
  return (
    <section className="booking paddings">
        <div className="b-wrapper ">
            <div className="b-left paddings">
                <div className="b-text">
                <div className="b1 ">Easy and Fast</div>
                <div className="b2">Book Your Next Trip <br />In 3 Easy Steps</div>
                </div>

                <div class="b-card flexStart">
                   <img src="group 00.png" className='b-img' flex alt="" />
                    <div class="b-details ">
                        <div class="b-title">Choose Destination</div>
                        <div class="b-text">Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Iusto, quisquam labore!</div>
                 </div>
                </div>

                <div class="b-card flexStart">
                   <img src="Group 12.png" className='b-img' flex alt="" />
                    <div class="b-details ">
                        <div class="b-title">Make Payment</div>
                        <div class="b-text">Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Iusto, quisquam labore!</div>
                 </div>
                </div>

                <div class="b-card flexStart">
                   <img src="Group 11.png" className='b-img' flex alt="" />
                    <div class="b-details ">
                        <div class="b-title">Reach Airport on Selected Date</div>
                        <div class="b-text">Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Iusto, quisquam labore!</div>
                 </div>
                </div>


            </div>
        <div className="b-right">
        <div className="br-card">
            <div >
              <img src="girl.jpg" alt="" className='br-img'/>
            </div>
            <div className="br-details ">
                <div className="br-name">Trip to Greece</div>
                <div className="br-date">14-29 June | by Robbin </div>
            </div>

            <div className="br-icons">
                <img src="LEAF.png" alt="" className='br-icon'/>
                <img src="Ellipse 5.png" alt="" className='br-icon' />
                <img src="send.png" alt="" className='br-icon' />
            </div>


            <div class="b-card flexStart">
                   <img src="hotel.png" className='brr-img' flex alt="" />
                    <div class="b-details ">
                        <div class="br-title">24 people going</div>
                 </div>
                </div>

          </div>
        </div>
        </div>
    </section>
  )
}

export default Booking