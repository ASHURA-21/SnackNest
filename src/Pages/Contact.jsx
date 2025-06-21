import React from 'react';
import TopBtn from './TopBtn';
import Styles from './Contact.module.css';
import Call from '../assets/Call.svg';
import Footer from './Footer';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here (e.g. EmailJS or backend)
    alert("Form submitted!");
  };

  return (
    <>
      <div className={Styles.container1}>
        <img src={Call} alt="Contact Icon" className={Styles.image} />

        <div className={Styles.welcome}>
          <h1>📞 Contact Us!</h1>
          <p>
            We’d love to hear from you! Reach out with any questions, feedback, or collaboration ideas.
          </p>
        </div>


        <form onSubmit={handleSubmit} className={Styles.form}>
            <h2>Fill this to make an appointment</h2>
          <div className={Styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />
          </div>

          <div className={Styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>

          <div className={Styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Enter the subject" required />
          </div>

          <div className={Styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Enter your message" rows="5" required />
          </div>

             <button className={Styles.btn}>Submit</button>
        </form>
      </div>

      <TopBtn />
      <Footer/>
    </>
  );
}
