import '../assets/css/all.css'
import '../assets/css/page_contact.css'

import React from 'react'

//// Need to add button functionality to send form & save data in backend
const Contact = () => {
  return (
    <div className="flex flex-col py-1 w-100vw items-center bg-black">
      <h2 className="pb-1 font-size-2">Contact Us</h2>
      <form action="" className="contact-form">
        <div className="input-group">
          <input type="text" id="name" className="form-text" required />
          <label htmlFor="name">Name*</label>
        </div>
        <div className="input-group">
          <input type="email" id="email" className="form-text" required />
          <label htmlFor="email">Email Address*</label>
        </div>
        <div className="input-group">
          <input type="tel" id="phone" className="form-text" />
          <label htmlFor="phone">Phone #</label>
        </div>
        <div className="input-group">
          <textarea id="message" rows="10" className="form-text" required></textarea>
          <label htmlFor="message">Write your message here*</label>
        </div>
        <button type="submit">Submit</button>
      </form>

      <p>* required sections</p>
    </div>
  )
}

export default Contact