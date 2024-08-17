import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-container" id='contact'>
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>
          Have any questions, feedback, or just want to get in touch? We'd love to hear from you!
        </p>
        <div className="info">
          <p><strong>Address:</strong> 10,15 GST Main Road Tambaram Chennai 600045</p>
          <p><strong>Phone:</strong> +91 7339566898</p>
          <p><strong>Email:</strong> contact@chennairestarent.com</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Send Us A Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="number" placeholder="Your Phone Number" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
