import React,{useState} from "react";
import "./Login.css";
import {Link} from 'react-router-dom'
import LoginImg from "../../assets/images/loginbc3.png";
import Google from "../../assets/images/Google.png";
import Back from "../../assets/images/back.svg";

import { useHistory } from "react-router-dom";
import { auth, googleProvider, firebase } from "../../auth/Firebase_auth";

function Login() {

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUse = (e) => {
    e.preventDefault();

    
    auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) history.push("/");
      })
      .catch((err) => console.log(err));
  };

   
  const signInwithGoogle = () => {
    auth.signInWithPopup(googleProvider)
    .then((user) => {
      if (user) history.push("/");
    })
    .catch((err) => console.log(err));
}

  return (
    <div className="login">
      <div className="login__container">
      
        <div className="login__img">
          <Link to="/"> <img src={Back} alt="" className='back__img' />  </Link> 
         
          <img src={LoginImg} alt="" className="login__main__img" />
        </div>

        <div className="login__form__container">
          <div className="login__forms">
            <h2 className="welcome__title__login">Welcome back to Edu-Uz</h2>
            <h1 className="login__title">Sign In</h1>
            <form className="login__inputs"  onSubmit={loginUse} >
              <input type="text" id="email__number" placeholder="Enter your Email or Phone number"   value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
              <input type="text" name="" id="password" placeholder="Enter your Password"    value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
              <button id="login__button" type="submit">Login</button>
            </form>
            <div className="login__social__media">
              <div className="line__meida"></div> <span>or</span><div className="line__meida"></div>
            </div>
            <div className="login__media__icons">
              <h2>Sign In with Google</h2>
              <img  onClick={signInwithGoogle} src={Google} alt="" className="google__link" /> 
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
