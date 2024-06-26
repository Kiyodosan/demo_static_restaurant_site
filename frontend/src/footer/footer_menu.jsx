import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import '../assets/css/index.css'
import '../assets/css/footer.css'

const Footer_Menu = () => {
  return (
    <div>
      <footer>
        <div className='top-row flex content-between'>
          <ul className='footer-top flex no-bullets'>
            <li>Sign Up</li>
            <li>Careers</li>
            <li>FAQS</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul className='footer-socials flex no-bullets'>
            <li className='social-fb'><FaSquareFacebook size={30}/></li>
            <li className='social-ig'><FaSquareInstagram size={30}/></li>
          </ul>
        </div>

        <div className='bottom-row flex content-between'>
          <ul className='footer-bottom flex no-bullets'>
            <li>Accessibility</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Terms & Condition</li>
          </ul>

          <ul className='no-bullets'>
            <li>Copyright 2024</li>
            <li>restaurant.com</li>
          </ul>
        </div>
      </footer>
    </div >
  )
}

export default Footer_Menu