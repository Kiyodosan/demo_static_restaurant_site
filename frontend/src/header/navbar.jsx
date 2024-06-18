import React from 'react'
import { useState } from 'react-dom'
import OpenModalButton from '../components/Open_Modal_Button'
import Booking from '../pages/Booking'
import '../assets/css/index.css'
import '../assets/css/nav_bar.css'


const NavBar = () => {
  return (
    <div>

      <header className='header'>
        <div className='flex content-between'>

          <div>
            <p className='home-page'>{"< Home"}</p>
            <a href='#' className='header-logo block py-1'>
              {/* <span className='visually-hidden'>
                Hell's Kitchen
              </span> */}
            </a>
          </div>

          <div className='flex flex-wrap py-1'>
            <ul className='nav-items flex flex-wrap no-bullets'>
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
            <div className='book-button'>
              <OpenModalButton
                buttonText="Book"
                className="book-button"
                modalComponent={<Booking />}
              />
            </div>
          </div>
        </div>

      </header>


    </div>
  )
}

export default NavBar