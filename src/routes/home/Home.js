import React from "react";
// import Header from "../../components/header/Header";
import "../home/Home.css";
import BcImage from "../../assets/images/Online-Edu.jpg";
// import BcImg from '../../assets/images/29493.jpg'
import Certificate from './../../assets/images/certificate.png'
import Study from './../../assets/images/study.png'
import Leraning from './../../assets/images/learning.png'
function Home() {
  return (
    <div className="home">
      <img src={BcImage} className="home__section__bcimg" alt="Background" />
      {/* <img src={BcImg} className="home__section__bcimg" /> */}
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



    </div>
  );
}

export default Home;
