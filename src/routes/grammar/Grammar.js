import React from "react";
import "../grammar/Grammar.css";
// import {HEADER__LINKS} from './../../static/HEADER__STATIC__LINKS'
import { Link } from "react-router-dom";

import A1Level from "../../assets/images/a1.png";
import A2Level from "../../assets/images/a2.png";
import B1Level from "../../assets/images/b1.png";
import B2Level from "../../assets/images/b2.png";
import B2_C1Level from "../../assets/images/b2-c1.png";
import C1Level from "../../assets/images/c1.png";

function Grammar() {
  return (
    <div className="grammar__main__container">
      <div className="grammars__levels">
        <div className="degree__block1">
          <div className="degree_a1">
            <img src={A1Level} alt="" className="degree_img" />
            <h1 className="degree__title"> A1 – Beginners</h1>
            <p className="degree_description">
              At the end of this level, you’ll feel more confident in everyday
              conversations, will have better communication skills, and will
              know more vocabulary.
            </p>
            <Link to="beginner">
              {" "}
              <button className="degree_starting__btn">
                Start Learning
              </button>{" "}
            </Link>
          </div>

          <div className="degree_a2">
            <img src={A2Level} alt="" className="degree_img" />
            <h1 className="degree__title"> A2 – Lower Intermediate</h1>
            <p className="degree_description">
              Thanks to this level, you’ll be able to communicate simply in
              everyday situations where English is spoken.
            </p>
            <Link to="/">
              {" "}
              <button className="degree_starting__btn">
                Start Learning
              </button>{" "}
            </Link>
          </div>

          <div className="degree_b1">
            <img src={B1Level} alt="" className="degree_img" />
            <h1 className="degree__title">B1 – Intermediate</h1>
            <p className="degree_description">
              This level will allow you to communicate with greater confidence
              and to use the language consistently.
            </p>
            <Link to="/">
              {" "}
              <button className="degree_starting__btn">
                Start Learning
              </button>{" "}
            </Link>
          </div>
        </div>
        <div className="degree_block2">
          <div className="degree_b2">
            <img src={B2Level} alt="" className="degree_img" />
            <h1 className="degree__title">B2 – Upper Intermediate</h1>
            <p className="degree_description">
              You’ll be able to achieve a greater understanding of the main
              points in complex texts and speeches. You’ll be more autonomous in
              your use of the language.
            </p>
            <Link to="/">
              {" "}
              <button className="degree_starting__btn">
                Start Learning
              </button>{" "}
            </Link>
          </div>

          <div className="degree_b2-c1">
            <img src={B2_C1Level} alt="" className="degree_img" />
            <h1 className="degree__title">B2/C1 – Advanced</h1>
            <p className="degree_description">
              With this level, you’ll reach a greater degree of fluency that
              will allow you to communicate with native speakers. You’ll have a
              superior level of English comprehension.
            </p>
            <Link to="/">
              {" "}
              <button className="degree_starting__btn">
                Start Learning
              </button>{" "}
            </Link>
          </div>

          <div className="degree_c1">
            <img src={C1Level} alt="" className="degree_img" />
            <h1 className="degree__title">C1 – Business</h1>
            <p className="degree_description">
              You’ll improve your use of the language, feel more comfortable,
              and increase your vocabulary with a special focus on business.{" "}
            </p>
            <Link to="/">
              {" "}
              <button className="degree_starting__btn">
                Start Learning
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grammar;

// {
//   HEADER__LINKS?.map((links, index)=>(
//    <p key={index}>{links.linkName }</p>
//   ))
//   }
