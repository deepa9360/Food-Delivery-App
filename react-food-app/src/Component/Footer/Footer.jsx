import React from 'react'
import "./footer.css"
import { assets } from '../../assets/Food Del Frontend Assets/assets/assets'

export default function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, quasi placeat voluptate distinctio fuga doloribus asperiores corporis, vel praesentium modi eligendi perspiciatis dolore? Illum debitis delectus laborum ea doloremque atque!</p>
                <div className='footer-social-icon'>
                    <img src={assets.facebook_icon} alt="" />
                     <img src={assets.twitter_icon} alt="" />
                      <img src={assets.linkedin_icon} alt="" />

                </div>
                </div>

                <div className='footer-content-center'>
                  <h2>COMPANY</h2>
                  <ul>
                   <li>Home</li>
                   <li>About us</li>
                   <li>Delivery</li>
                   <li>Privacy policy</li>

                  </ul>
                </div>

                <div className='footer-content-right'>
                 <h2>GET IN TOUCH</h2>
                 <ul>
                 <li>+1-212-456-7890</li>
                 <li>contact@tomoto.com</li>
                 </ul>
                </div>
            </div>
            <hr/>
            <p className='footet-copyright'>Copyright 2024 0 tomoto.com - All Right</p>
        </div>
    )
}
