import React from "react";
import ".././header/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__main__components">
        <h1 className="header__logo">LEARN ENGLISH</h1>
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
    </div>
  );
}

export default Header;
