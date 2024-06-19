import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='container footer'>
      <div className="footer-box">
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Cookies Settings</li>
        </ul>
        <ul>
          <li>For Individuals</li>
          <li>For Business Owners</li>
          <li>For Lawyers</li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>FAQs</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <p>©2023-2024 American Legal Office, Inc.,</p>
      <p>Attorney Advertising • All rights reserved.</p>
    </div>
  )
}

export default Footer