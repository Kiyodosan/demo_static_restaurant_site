import '../assets/css/index.css'
import React from 'react'
import { useState } from 'react-dom'


const NavBar = () => {
  return (
    <div>

      <header className='header' id='header'>
        <div>
          <a href='#' class='header_mask'></a>
          <div className='container'>
            <p>Gordon Ramsay Restaurants</p>
          </div>
        </div>

        <div className='container'>
          <div>
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
              <ul>
                <li>
                  <a>
                    <span>Book</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className='header_menu'>
              <ul>
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

      </header>


    </div>
  )
}

export default NavBar