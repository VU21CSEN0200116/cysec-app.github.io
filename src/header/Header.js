import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <section className="h-wrapper  flex">
        <div className="flex  h-container">
            <div className="h-left ">
            <img src="Decore.png" alt="decore" className='h-img'/>
            </div>

            <div className="flexCenter  h-right">
            <a href="./">
                <li className='h-list'>
                    <ul> Destinations</ul>
                    <ul> Hotels</ul>
                    <ul> Flights</ul>
                    <ul> Bookings</ul>
                    <ul> Login</ul>
                    <ul> <button className='sign-button'>Sign up</button></ul>
                    <ul >EN</ul> 
                </li>
            </a>
                
            </div> 
        </div>
       </section>
  )
}

export default Header