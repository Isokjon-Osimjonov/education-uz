import React from "react";
import ".././header/Header.css";
import { Link  ,useLocation} from "react-router-dom";

function Header() {
  const location = useLocation()
  if(location.pathname === "/login" ){
    return <></>;
  } 
  else if (location.pathname === "/register") {
    return <></>;

  }  else if (location.pathname === "/admin") {
    return <></>;

  }
  else{
  return (
    <div className="header">
      <div className="header__main__components">
        <Link  to="/" className="header__logo">LEARN ENGLISH</Link>
        <ul className="header__components__links__ul">
          <li>
            <Link to="/"  className="header__link"> Home </Link>
          </li>
          <li>
            <Link to="/grammar"  className="header__link">  Grammar </Link>
          </li>
         
          <li>
            <Link to="/vocabulary" className="header__link"> Vocabulary </Link>
          </li>
         
          <li>
            <Link to="/materials"  className="header__link"> Materials </Link>
          </li>
          <li>
            <Link to="/quiz"  className="header__link" > Quiz </Link>
          </li>
          <li>
            <Link to="/ielts" className="header__link"> IELTS </Link>
          </li>
          <li>
            <Link to="/contact" className="header__link"> Contact </Link>
          </li>
         
        </ul>

       
      </div>
      <div className="login__register__links">
          <Link className="header__register__link" to="/register">Sign Up|</Link>
          <Link className="header__login__link" to="/login">Sign In</Link>
        </div>

    </div>
  );
  }
}

export default Header;
