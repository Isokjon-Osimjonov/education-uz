import React ,{useState} from 'react'
import './Register.css'
import {Link} from 'react-router-dom'
import registerImg from "../../assets/images/loginbc2.png";
import Google from "../../assets/images/Google.png";
import Back from "../../assets/images/back.svg";

import { auth , googleProvider, firebase } from '../../auth/Firebase_auth';
import { useHistory} from 'react-router-dom'

function Register() {
  const [number, setNumber] = useState('');
  const [ email, setEmail]= useState('')
  const [ password, setPassword]= useState('')
 
 const history = useHistory()
 
  const createAccount = (e)=>{
    e.preventDefault()
    auth.createUserWithEmailAndPassword( email , password)
    .then(user => {
      if(user)
      history.push("/")
    } )
    .catch(err => console.log(err))
  }

  const signInwithGoogle = () => {
    auth.signInWithPopup(googleProvider)
    .then((user) => {
      if (user) history.push("/");
    })
    .catch((err) => console.log(err));
}

const verifyThePhone = () => {
  let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  firebase.auth().signInWithPhoneNumber(number, recaptcha)
      .then(e => {
        let code = prompt("Iltimos konfirmatsiya kodni kiriting")
        if(code === null){
            return
        }
        e.confirm(code).then(user => {
            console.log(user)
        })
      })
      .catch(err => console.log(err));
}

  return (
    <div className='register__main__container'>

<div className="register__actions">
  <div className="register__img">
  <Link to="/"> <img src={Back} alt="" className='back__img' />  </Link> 
  <img src={registerImg} alt="" className="register__main__img" /> 
  </div>


<div className="register__form__container">
          <div className="register__forms">
            <h2 className="welcome__title__register">Create an account for Edu-Uz</h2>
            <h1 className="register__title">Sign Up</h1>
            <form className="register__inputs"   onSubmit={createAccount} >
              <input type="text" id="register__email__number" placeholder="Enter your Email or Phone number"  required value={email}  onChange={(e) => setEmail(e.target.value)}  />
              <input type="password" name="" id="register__password" placeholder="Enter your Password"   value={password}  onChange={(e) => setPassword(e.target.value)} required />
              <button id="register__button" type="submit"  >Register</button>
            </form>
            <div className="register__social__media">
              <div className="line__meida"></div> <span>or</span><div className="line__meida"></div>
            </div>
            <div className="register__media__icons">
              <h2>Sign Up with Google</h2>
            <img onClick={signInwithGoogle} src={Google} alt="" className="google__link" />
            <div id="recaptcha-container"></div>
            </div>
            <div className="already__user">
              <h1 className="sue">You don't have an account yet? </h1>
              <Link className="register__link" to="/login">Sign In</Link>
            </div>
          </div>
        </div>

</div>

    </div>
  )
}

export default Register