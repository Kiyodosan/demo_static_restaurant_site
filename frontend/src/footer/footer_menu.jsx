import React from 'react'
import { Link } from 'react-router-dom'
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

            <li>
              <Link to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
          <ul className='footer-socials flex no-bullets'>
            <li className='social-fb'>
              <a href='#'>
                <FaSquareFacebook size={30} />
              </a>
            </li>
            <li className='social-ig'>
              <a href='#'>
                <FaSquareInstagram size={30} />
              </a>
            </li>
          </ul>
        </div>

        <div className='bottom-row flex content-between'>
          <ul className='footer-bottom flex no-bullets'>
            <li className='box-right pr-1 pl-1'>Accessibility</li>
            <li className='box-right pr-1 pl-1'>Privacy Policy</li>
            <li className='box-right pr-1 pl-1'>Cookie Policy</li>
            <li className='pl-1'>Terms & Condition</li>
          </ul>

          <ul className='footer-absolute no-bullets'>
            <li>Copyright 2024</li>
            <li>
              <a href='#'>restaurant.com</a>
            </li>
          </ul>
        </div>
      </footer>
    </div >
  )
}

export default Footer_Menu