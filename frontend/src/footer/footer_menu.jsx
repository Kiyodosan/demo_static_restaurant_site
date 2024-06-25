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
            <li><FaSquareFacebook /></li>
            <li><FaSquareInstagram /></li>
          </ul>
        </div>
      </footer>

    </div >
  )
}

export default Footer_Menu