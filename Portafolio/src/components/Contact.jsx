import React from 'react';

const Contact = () => {
  return (
    <section className="contact fade-in">
      <h2 className="numbered-heading">Get In Touch</h2>
      <p>
        I’m always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit" className="cta-button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;