import React from "react";
import { useLocation } from "react-router-dom";
import "../footer/Footer.css";
import Telegram from '../../assets/images/tg.png'
import Instagram from '../../assets/images/instagram.png'
import Facebook from '../../assets/images/facebook.png'
import Phone from '../../assets/images/phone.png'
function Footer() {
  const location = useLocation(false)
  if(location.pathname === "/login" ){
    return <></>;
  }
  else if (location.pathname === "/register") {
    return <></>;

  }
  else if (location.pathname === "/admin") {
    return <></>;

  }
  else{
  return (
    <div className="footer">
      <div className="footer__above"> 
      <p className="social__media__text"> Our Addresses In Social Networks</p>
      
      <div className="social__media__links">
      <div className="media__div"> <img  className="telegram" src={Telegram} alt="" />  <a href="http://www.google.com">Telegram </a>   </div>  
      <div className="media__div"> <img  className="instagram"src={Instagram} alt="" /> <a href="http://www.google.com">Instagram</a>  </div> 
      <div className="media__div"> <img  className="facebook"src={Facebook} alt="" />   <a href="http://www.google.com">Facebook</a>    </div> 
      <div className="phone__div"> <img  className="facebook"src={Phone} alt="" />      <a href="http://www.google.com">Tell: +998 907508090</a>  </div> 
      </div>

      </div>
      <div className="line"></div>
      <div className="footer__below">
      <p className="copyright__text">Copyright © 2022 All Rights Reserved By Edu-Uz | <a href="http://www.google.com">Privacy Policy </a>| <a href="http://www.google.com">Terms of Use</a>  | <span>Uzbekistan</span> </p>
      </div>
    </div>
  );
  }
}

export default Footer;
