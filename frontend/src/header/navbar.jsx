import '../assets/css/index.css'
import '../assets/css/nav_bar.css'
import React from 'react'
import { useState } from 'react-dom'
import OpenModalButton from '../components/Open_Modal_Button'
import Booking from '../pages/Booking'


const NavBar = () => {
  return (
    <div>

      <header className='header' id='header'>
        <div className='flex flex-wrap'>
          <a href='#' class='header_mask'></a>
          <div className='container'>
            <div>
              <div className='header-col'>
                <p>Gordon Ramsay Restaurants</p>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='flex flex-wrap'>
            <div className='header_logo'>
              <a href='#'>
                <span>
                  Hell's Kitchen
                </span>
              </a>
            </div>
          </div>


          <div>
            <div className='header_book'>
              <ul className='no-bullets'>
                <li>
                  <OpenModalButton 
                  buttonText="Bookings"
                  modalComponent={<Booking />}
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className='flex-row flex-wrap'>
            <div className='header-menu'>
              <div className='header-flex-col'>
                <ul className='no-bullets'>
                  <li>
                    <a>Venues</a>
                  </li>
                  <li>
                    <a>Menus</a>
                  </li>
                  <li>
                    <a>Private Dining</a>
                  </li>
                  <li>
                    <a>Gift Cards</a>
                  </li>
                </ul>

              </div>

            </div>
          </div>


        </div>

      </header>


    </div>
  )
}

export default NavBar