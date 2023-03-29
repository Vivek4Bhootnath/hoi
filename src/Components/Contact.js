import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div id='contact'>
        <div>
        <form className='contact-from'>
      <label>
        Name:
        <input type="text"  />
      </label>
      <br />
      <label>
        Email:
        <input type="email"   />
      </label>
      <br />
      <label>
        Message:
        <textarea   />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>

        </div>
      
    </div>
  )
}

export default Contact
