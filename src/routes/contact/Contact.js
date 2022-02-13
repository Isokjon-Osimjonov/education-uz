import React from 'react';
import '../contact/Contact.css'
import ContactUs from '../../assets/images/contactUs.png'
function Contact() {
  return <div className='contact__main__container'>
<h1 className='contactus__title'>Have Some Questions?</h1>

<div className="contact__img__form">
<div className="contact__img__div">
  <img className='conatct__img' src={ContactUs} alt="" />
  <h1>Get In Touch!</h1>
</div>

<div className="contact__form">
  <div className="contact__details">
    <h2>Contct Us please fill out the form below.</h2>
    <form action="">
    <input type="text" name="" id="contact__name" placeholder='Enter your name' />
    <input type="email" placeholder='Enter your email' id='contact__email' />
    <textarea name="" id="contact__text" cols="30" rows="10" placeholder='Spill the beans'></textarea>
    <button type='submit' id='send__button' > Send </button>
    </form>

  </div>


</div>
</div>



  </div>;
}

export default Contact;
