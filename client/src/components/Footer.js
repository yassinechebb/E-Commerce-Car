import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">
  <nav className="footeer flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
    <a className="hover:text-gray-900" href="#">
      Home
    </a>
    <a className="hover:text-gray-900" href="#">
      About
    </a>
    <a className="hover:text-gray-900" href="#">
      Services
    </a>
   
    <a className="hover:text-gray-900" href="#">
      Contact
    </a>
  </nav>
  <div className="flex justify-center space-x-5">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </a>
    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
    </a>
  </div>
  <p className="text-center text-gray-700 font-medium">
    © 2024 Company Ltd. All rights reservered.
  </p>
</footer>

  //   <div className='footer'>
      
  //     <div class="container">
  // <div class="footer_trust_top">
  //   <p>AS FEATURED IN</p>
  //   <div class="trustlogos"></div>
  // </div><div class="col-lg-12 col-md-12 col-xs-12 footer_main">
  // <div class="col-xs-5 col-md-3 footer-left">
  //   <h4>Find Out More</h4>
  //   <ul class="footer_list">
  //     <li><a href=""><Link to ='/'>Home</Link></a></li>
      
  //     <li><Link to ='/login'>Login</Link></li>
  //     <li><Link to ='/register'>register</Link></li>
  //     <li><Link to ='/contact'>contact</Link></li>
  //   </ul>
  // </div>

  // <div class="col-xs-7 col-md-3 col-md-push-6 footer-right">
  //   <div class="footerbox">
  //     <h4>Contact Us</h4>
  //     <p>We're ready to help!</p>
  //     <ul class="footer_list">
  //       <li>RS | RUSSIA</li>
  //       <li class="phone">+219 94 959 532</li>
  //       <li>TN | TOZEUR</li>
  //       <li class="phone">+219 24 027 018</li>
  //     </ul>
  //   </div>
  // </div>

  // <div class="col-xs-12 col-md-6 col-md-pull-3 footer_middle">
  //   <h4>Be the first to know about Authentic Travel Deals</h4>
  //   <p>Subscribe to get exclusive offers on the world's greatest vacations.</p>

 
  // </div>
  // </div>
  
  // <div class="footer_bottom">
  //   <div class="col-lg-3 col-md-12 footer_copyright">
  //   <p>©2018 All rights reserved.</p>
  // </div>
 
  //   </div>
  //   </div>
  //   </div>
 
  )
}

export default Footer