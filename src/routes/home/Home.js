import React  from "react";
import {Link} from 'react-router-dom'
import { Typewriter } from "react-simple-typewriter";
// import 'react-simple-typewriter/dist/index.css'
// import Header from "../../components/header/Header";
import "../home/Home.css";
// import BcImage from "../../assets/images/Online-Edu.jpg";
// import BcImg from "../../assets/images/BcMainImg.jpg";
import BcImg1 from "../../assets/images/edu1.png";
import Certificate from "./../../assets/images/certificate.png";
import Study from "./../../assets/images/study.png";
import Leraning from "./../../assets/images/learning.png";
import Shield from "./../../assets/images/Shield.svg";
function Home() {
  return (
    <div className="home">
      <div className="home__main__img">
      <img src={BcImg1} className="home__section__bcimg" alt="" />

      </div>
 

      <div className="home__about">
        <div className="home__about__block1">
          <img src={Leraning} alt="" className="about__block__img" />
          <h1>Grammar Module</h1>
          <p>Improve your grammar and general english with us</p>
        </div>
        <div className="home__about__block1">
          <img src={Certificate} alt="" className="about__block__img" />
          <h1>EILTS Module</h1>
          <p>Score a high band from IELTS with us </p>
        </div>
        <div className="home__about__block1">
          <img src={Study} alt="" className="about__block__img" />
          <h1>English Books</h1>
          <p>Highly rated grammar books and IELTS books for free</p>
        </div>
      </div>

      <div className="home__welcome">
        <h1 className="welcome__title">Hi! Welcome To LearnEnglish.</h1>
        <p className="welcome__description">
          {" "}
          Learn English online and improve your skills through our high-quality
          courses and resources – all designed for adult language learners.
          Everything you find here has been specially created by the Edu-Uz
          LearnEnglish, the world's English teaching experts.
        </p>
      </div>

      <div className="auto__typing">
        <h1 className="auto__typing__title">
          You Can With Us -{" "}
          <span className="typwriter__title">
            {" "}
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              typeSpped={60}
              deleteSpeed={30}
              delaySpeed={1000}
              words={[
                "Learn English Online. ",
                "Get Highest IELTS Bands.",
                "Get  English Books For Free.",
                "Get Free English Lessons From Experts.",
              ]}
            />
          </span>
        </h1>
      </div>
      <div className="login__sue__div">
      <img src={Shield} alt="" className="login__sue__img" />
      <Link to="/login" className="login__sue" >Do yo have an account? </Link>

      </div>
    </div>
  );
}

export default Home;
