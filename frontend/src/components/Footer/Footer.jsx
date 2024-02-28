import React from 'react'
import "./footer.css"
import footer_logo from "../Assets/logo_big.png"
import insta_icon from "../Assets/instagram_icon.png"
import whats_icon from "../Assets/whatsapp_icon.png"
import pintester_icon from "../Assets/pintester_icon.png"
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-link">
          <li>Company</li>
          <li>Product</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
          <div className="footer-icon-containers">
            <img src={insta_icon} alt="" />
          </div>
          <div className="footer-icon-containers">
            <img src={pintester_icon} alt="" />
          </div>
          <div className="footer-icon-containers">
            <img src={whats_icon} alt="" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr/>
          <p>Copyright @ 2023 All Right reserved</p>
        </div>
    </div>
  )
}

export default Footer