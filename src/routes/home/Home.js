import React from "react";
import { Typewriter } from "react-simple-typewriter";
// import 'react-simple-typewriter/dist/index.css'
// import Header from "../../components/header/Header";
import "../home/Home.css";
// import BcImage from "../../assets/images/Online-Edu.jpg";
import BcImg from "../../assets/images/29493.jpg";
import Certificate from "./../../assets/images/certificate.png";
import Study from "./../../assets/images/study.png";
import Leraning from "./../../assets/images/learning.png";
function Home() {
  return (
    <div className="home">
      {/* <img src={BcImage} className="home__section__bcimg" alt="Background" /> */}
      <img src={BcImg} className="home__section__bcimg" alt="" />
      <div className="home__blur"></div>

      {/* <div className="home__description">
        <h1 className="description__title">LEARN ENGLISH ONLINE </h1>
      </div> */}

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
    </div>
  );
}

export default Home;
