import React from "react";
import "./Login.css";
import {Link} from 'react-router-dom'
import LoginImg from "../../assets/images/loginbc1.png";
import Google from "../../assets/images/Google.png";
// import {BiUserCircle} from 'react-icons/bi'
// import {RiLockPasswordLine} from 'react-icons/ri'
function Login() {
  return (
    <div className="login">
      <div className="login__container">
      
        <div className="login__img">
         
          <img src={LoginImg} alt="" className="login__main__img" />
        </div>

        <div className="login__form__container">
          <div className="login__forms">
            <h2 className="welcome__title__login">Welcome back to Edu-Uz</h2>
            <h1 className="login__title">Sign In</h1>
            <form className="login__inputs">
              <input type="text" id="email__number" placeholder="Enter your Email or Phone number" />
              <input type="text" name="" id="password" placeholder="Enter your Password" />
              <button id="login__button" type="submit">Login</button>
            </form>
            <div className="login__social__media">
              <div className="line__meida"></div> <span>or</span><div className="line__meida"></div>
            </div>
            <div className="login__media__icons">
              <h2>Sign In with Google</h2>
            <img src={Google} alt="" className="google__link" />
            </div>
            <div className="already__user">
              <h1 className="sue">You don't have an account yet? </h1>
              <Link className="register__link" to="/register">Register Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
