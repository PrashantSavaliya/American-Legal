import React, { useEffect } from 'react';
import './Contact.css'
import ScrollReveal from 'scrollreveal';
import contact_img from '../../assets/contact_img.jpeg'

const Contact = () => {

  useEffect(() => {
    ScrollReveal({ 
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    ScrollReveal().reveal('.contact-left', { origin: 'bottom' });
    ScrollReveal().reveal('.contact-right', { origin: 'bottom' });
  }, []);

  return (
    <div className='container contact'>
      <div className="contact-left">
        <img src={contact_img} alt="" />
      </div>
      <div className="contact-right">
        <h2>Contact Us</h2>
        <p>American Legal is a new kind of law firm, on a mission to reinvent how Americans solve their legal issues. We are a welcoming place where anyone, regardless of background, can find fast, affordable legal solutions and expert advice about any legal matter.</p>
        <p>Let us diagnose your needs, explain your options, and help you find and hire the right lawyer or solution.</p>
        <button className='btn'>Free Consultation</button>
      </div>
    </div>
  )
}

export default Contact