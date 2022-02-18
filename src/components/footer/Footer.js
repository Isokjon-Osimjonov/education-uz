import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../footer/Footer.css";
import Telegram from '../../assets/images/tg.png'
import Instagram from '../../assets/images/instagram.png'
import Facebook from '../../assets/images/facebook.png'
import YouTube from '../../assets/images/youtube.png'
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
      <div className="media__div"> <img  className="telegram" src={Telegram} alt="" />  <Link >Telegram </Link>   </div>  
      <div className="media__div"> <img  className="instagram"src={Instagram} alt="" /> <Link >Instagram</Link>  </div> 
      <div className="media__div"> <img  className="facebook"src={Facebook} alt="" />   <Link >Facebook</Link>    </div> 
      <div className="phone__div"> <img  className="youtubeimg"src={YouTube} alt="" />      <a href="https://www.youtube.com/results?search_query=mr+fakhrullo" > YouTube</a>  </div> 
      </div>

      </div>
      <div className="line"></div>
      <div className="footer__below">
      <p className="copyright__text">Copyright © 2022 All Rights Reserved By Edu-Uz | <a href="http://www.google.com">Privacy Policy </a>| <a href="http://www.google.com"  >Terms of Use</a>  | <span>Uzbekistan</span> </p>
      </div>
    </div>
  );
  }
}

export default Footer;
