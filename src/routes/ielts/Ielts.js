import React from "react";
import "../ielts/Ielts.css";
import {Link} from 'react-router-dom'
function Ielts() {
  return (
    <div className="ielts__main__container">
      <div className="ielts__sections">
        <div className="section__block1">
          <div className="speaking__section">
            <img src="" alt="" />
            <h1>h</h1>
            <p>j</p>
            <Link><button></button></Link>
          </div>
          <div className="writing__section"></div>
          <div className="listening__section"></div>
        </div>

        <div className="section__block2">
          <div className="reading__section"></div>
          <div className="writing__section__tips"></div>
          <div className="speaking__section__tips"></div>
        </div>
      </div>
    </div>
  );
}

export default Ielts;
