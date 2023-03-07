import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import Reservation from '../components/Reservation.js'
import styled from 'styled-components';

function Booking() {

  const form = useRef();

  const sendEmail = (e) => {
  

  emailjs.sendForm('service_l8gt0pa', 'template_6rgs1n9', form.current, '34uT-EcuAvUdIaDar')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };
  return (
    <div>
      <div>
        <Reservation />
      </div>
      <ContactForm>
      <h1>Information</h1> 
    <form ref={form} onSubmit={sendEmail}>
    
      <input className="name-input" placeholder='John Smith' type="text" name="user_name" />
      <input placeholder='JSmith21@email.com' className="email-input" type="email" name="user_email" />
      <textarea placeholder="Any extra information that you would like us to know?" className="message-input" name="message" />
      <input className="btn" type="submit" value="Submit" />
    </form>
      </ContactForm>
    </div>
    
  )
}

const ContactForm = styled.div`
  h1{
    position:relative;
    left:700px;
  }

  form{
    display:grid;
    justify-content:center;

  }

  form input{
    width:400px;
    height:50px;
  }

  form textarea{
    width:400px;
    height:100px;
  }
`;

export default Booking