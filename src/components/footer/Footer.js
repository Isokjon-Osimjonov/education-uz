import React from "react";
import "../footer/Footer.css";
import Telegram from '../../assets/images/tg.png'
import Instagram from '../../assets/images/instagram.png'
import Facebook from '../../assets/images/facebook.png'
import Phone from '../../assets/images/phone.png'
function Footer() {
  return (
    <div className="footer">
      <div className="footer__above"> 
      <p className="social__media"> Our Addresses In Social Networks</p>
      <div className="social__media__links">
       <a href="http://www.google.com">  <img  className="telegram" src={Telegram} alt="" />  Telegram</a>  
       <a href="http://www.google.com">  <img  className="instagram"src={Instagram} alt="" />  Instagram</a> 
        <a href="http://www.google.com">  <img  className="facebook"src={Facebook} alt="" /> Facebook</a>  
       <span> <img  className="facebook"src={Phone} alt="" /> Tell: +998 907508090</span>

      </div>
      </div>
      <div className="line"></div>
      <div className="footer__below">
      <p className="copyright__text">Copyright © 2022 All right reserved By Edu-Uz | <a href="http://www.google.com">Privacy Policy </a>| <a href="http://www.google.com">Terms of Use</a>  | <span>Uzbekistan</span> </p>
      
      </div>
    </div>
  );
}

export default Footer;
