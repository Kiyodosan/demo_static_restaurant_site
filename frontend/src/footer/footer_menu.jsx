import React from 'react'

const Footer_Menu = () => {
  return (
    <div>

      <div className='footer_socials'>
        <div>
          <ul>
            <li>
              <a>Facebook</a>
            </li>
            <li>
              <a>Instagram</a>
            </li>
          </ul>

        </div>
      </div>

      <div className='footer_menu'>
        <div className='footer_menu_left'>
          <ul>
            <li>
              <a>Sign up</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Faqs</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        <div className='footer_menu_right'>
          <ul>
            <li>
              <a>Accessibility</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>Cookie Policy</a>
            </li>
            <li>
              <a>Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className='footer_absolute'>
          <span>
            "Gordon Ramsay Restaurants @Copyright "
            "2024"
          </span>
          <a href='#'>Gordonramsayrestaurants.com</a>
        </div>

      </div>

    </div>
  )
}

export default Footer_Menu